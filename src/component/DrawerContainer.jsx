import React from 'react'
import { Drawer, Icon } from 'antd';

import RealMenu from './RealMenu'

class DrawerContainer extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Icon 
          className="show-category-icon"
          type="bars"
          onClickCapture={this.showDrawer} />
        <Drawer
          // title="Basic Drawer"
          className="drawer-body"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <RealMenu />
        </Drawer>
      </div>
    );
  }
}

export default DrawerContainer