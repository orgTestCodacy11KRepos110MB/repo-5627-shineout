import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { docSize } from '../utils/dom/document'
import { moveableClass } from './styles'
import { getUidStr } from '../utils/uid'
import { curry } from '../utils/func'

const DIS_LIMIT = 50

export default curry(
  (handler, Origin) =>
    class Moveable extends React.Component {
      static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        moveable: PropTypes.bool,
      }

      constructor(props) {
        super(props)
        this.state = {
          x: 0,
          y: 0,
          draging: false,
        }
        this.moveabledId = getUidStr()
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
      }

      componentDidMount() {
        this.bindEvent()
      }

      componentWillUnmount() {
        if (this.el) {
          this.el.removeEventListener('mousedown', this.handleMouseDown)
        }
      }

      getStyle() {
        const { x, y } = this.state
        if (!this.hasDragged) return undefined
        return {
          transform: `translate(${x}px, ${y}px)`,
        }
      }

      bindEvent() {
        this.el = document.querySelector(`.${moveableClass(this.moveabledId)}`)
        if (!this.el) return
        this.el.addEventListener('mousedown', this.handleMouseDown)
        this.handlerEl = handler ? this.el.querySelector(handler) || this.el : this.el
      }

      handleMouseDown(e) {
        if (e.button !== 0 || !this.el) return
        if (handler && !e.target.matches(handler)) return
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
        document.addEventListener('mouseleave', this.handleMouseUp)
        if (!this.handlerPos) {
          this.handlerPos = this.handlerEl.getBoundingClientRect()
        }
        this.hasDragged = true
        this.setState({
          draging: true,
        })
      }

      handleMouseMove(e) {
        this.setState(prev => {
          let x = prev.x + e.movementX
          let y = prev.y + e.movementY
          if (this.handlerPos.right + x < DIS_LIMIT || this.handlerPos.left + x > docSize.width - DIS_LIMIT) {
            // eslint-disable-next-line prefer-destructuring
            x = prev.x
          }
          if (this.handlerPos.bottom + y < DIS_LIMIT || this.handlerPos.top + y > docSize.height - DIS_LIMIT) {
            // eslint-disable-next-line prefer-destructuring
            y = prev.y
          }
          return { x, y }
        })
      }

      handleMouseUp() {
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)
        document.removeEventListener('mouseleave', this.handleMouseUp)
        this.setState({
          draging: false,
        })
      }

      render() {
        const { moveable, ...others } = this.props
        if (!moveable) return <Origin {...others} />
        const ms = Object.assign({}, this.props.style, this.getStyle())
        const mc = classnames(
          this.props.className,
          moveableClass('_', this.moveabledId, this.state.draging && 'draging')
        )
        return <Origin {...others} style={ms} className={mc} />
      }
    }
)
