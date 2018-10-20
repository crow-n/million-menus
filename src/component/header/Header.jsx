import React from 'react'
import DrawerContainer from '../drawer/DrawerContainer.jsx'

const Header = props => (
  <div className="header">
    <DrawerContainer 
      category={props.category} 
      onClickType={props.onClickType} />
    菜谱大全
  </div>
)

export default Header