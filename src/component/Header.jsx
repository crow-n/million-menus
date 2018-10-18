import React from 'react'
import DrawerContainer from './DrawerContainer.jsx'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <DrawerContainer />
        菜谱大全
      </div>
    )
  }
}

export default Header