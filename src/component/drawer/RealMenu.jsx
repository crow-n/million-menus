import React from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

class RealMenu extends React.Component {

  constructMenu(obj, level = 1) {
    if (obj instanceof Array) {
      return obj.map(item => (
        <Menu.Item key={`v${level}-${item}`}>
          <Link className="ant-menu-item" to="/">{item}</Link>
        </Menu.Item>

      ))
    }
    const menu = []
    if (obj instanceof Object) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          menu.push(
            <SubMenu key={`v${level}-${key}`} title={key}>
              {this.constructMenu(obj[key], level + 1)}
            </SubMenu>
          )
        }
      }
    }
    return menu
  }

  handleClick = (e) => {
    const { target } = e
    if (target.nodeName === "A") {
      this.props.onClickType(target.innerText)
      this.props.closeDrawer()
    }
  }

  render() {
    return (
      <Menu
        onClickCapture={this.handleClick}
        mode="inline"
      >
        {this.constructMenu(this.props.category)}
      </Menu>
    );
  }
}

export default RealMenu