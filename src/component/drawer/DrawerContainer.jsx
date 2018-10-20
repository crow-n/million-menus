import React from 'react'
import { Drawer, Icon } from 'antd';

import RealMenu from './RealMenu'

class DrawerContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Icon 
          className="show-category-icon"
          type="bars"
          onClickCapture={this.showDrawer} />
        <Drawer
          className="drawer-body"
          placement="left"
          closable={false}  // 是否显示 'x'
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <RealMenu 
            category={this.props.category} 
            onClickType={this.props.onClickType}
            closeDrawer={this.onClose} />
        </Drawer>
      </div>
    )
  }
}

export default DrawerContainer