/**
 * cn - 基本用法
 *    -- Dropdown 通过数据来渲染，支持 json 格式数据、React 组件
 * en - Base
 *    -- Dropdown is rendered through data and supports json formatted data and React components.
 */
import React from 'react'
import { Dropdown, Message, TYPE } from 'shineout'

type DropdownProps = TYPE.Dropdown.Props
type DropdownData = DropdownProps['data']

const data: DropdownData = [
  {
    content: 'Submenu',
    children: [
      {
        content: 'Link to Google',
        target: '_blank',
        url: 'https://google.com',
      },
      {
        content: 'Disabled',
        disabled: true,
      },
    ],
  },
  <a href="/">Home</a>,
  {
    content: 'Message',
    onClick: () => {
      Message.info('Some message.')
    },
  },
]

const App: React.FC = () => <Dropdown placeholder="Dropdown" data={data} />

export default App
