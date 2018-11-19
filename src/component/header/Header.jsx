import React from 'react'
import { Link } from "react-router-dom";
import DrawerContainer from '../drawer/DrawerContainer.jsx'

const Header = props => (
  <div className="header">
    <DrawerContainer 
      category={props.category} 
      onClickType={props.onClickType} />
    菜谱大全
    {
      props.pathname !== '/' &&
      <Link to="/" className="goback">返回</Link>
    }
  </div>
)

export default Header