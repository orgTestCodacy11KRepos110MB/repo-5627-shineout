import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Popover from '../Popover'
import { getProps, defaultProps } from '../utils/proptypes'
import { breadcrumbClass } from './styles'
import { getKey } from '../utils/uid'
import Caret from '../icons/Caret'

class Breadcrumb extends React.PureComponent {
  renderArray(data) {
    const first = data[0]
    return (
      <span>
        {this.renderItem(first)}
        <span className={breadcrumbClass('down')}>{<Caret />}</span>
        <Popover position="bottom">
          {data.slice(1).map((d, i) => (
            <div className={breadcrumbClass('dropdown-item')} key={i}>
              {this.renderItem(d)}
            </div>
          ))}
        </Popover>
      </span>
    )
  }

  renderItem(d) {
    const { renderItem } = this.props
    let item = d.title
    if (!React.isValidElement(item)) {
      if (d.onClick || d.url) {
        const props = {
          onClick: d.onClick,
        }
        if (d.url) props.href = d.url
        item = (
          <a {...props}>
            {d.icon}
            &nbsp;
            {d.title}
          </a>
        )
      } else {
        item = <b>{d.title}</b>
      }
    }
    return renderItem ? renderItem(d) : item
  }

  render() {
    const { data, separator, keygen } = this.props
    const className = classnames(breadcrumbClass('_'), this.props.className)

    return (
      <div className={className} style={this.props.style}>
        {data.map((d, index) => (
          <span key={keygen ? getKey(d, keygen, index) : index}>
            {Array.isArray(d) ? this.renderArray(d) : this.renderItem(d)}
            {index !== data.length - 1 ? <span className={breadcrumbClass('separator')}>{separator}</span> : null}
          </span>
        ))}
      </div>
    )
  }
}

Breadcrumb.propTypes = {
  ...getProps(PropTypes),
  data: PropTypes.array,
  renderItem: PropTypes.func,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Breadcrumb.defaultProps = {
  ...defaultProps,
  data: [],
  separator: '/',
}

Breadcrumb.displayName = 'ShineoutBreadcrumb'

export default Breadcrumb
