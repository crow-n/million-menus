import React from 'react'
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

class RealMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: {
        "水产": {
          "贝": [
            "蛤蜊",
            "干贝",
            "鲍鱼",
            "牡蛎",
            "青口",
            "蛏子",
            "鲜贝",
            "北极贝",
            "河蚌"
          ],
          "虾": [
            "虾仁",
            "海米",
            "虾皮",
            "明虾",
            "基围虾",
            "龙虾",
            "小龙虾",
            "河虾",
            "虾",
            "海虾",
            "皮皮虾",
            "北极虾",
            "虾干",
            "青虾",
            "草虾",
            "海白虾"
          ],
          "鱼": [
            "海水鱼",
            "淡水鱼",
            "三文鱼",
            "鲫鱼",
            "金枪鱼",
            "黄鱼",
            "带鱼",
            "鳕鱼",
            "鱼",
            "鱼头",
            "鱼干",
            "鱼籽",
            "鱼肚"
          ],
          "螃蟹": [
            "梭子蟹",
            "大闸蟹",
            "蟹肉",
            "螃蟹",
            "蟹黄"
          ]
        },
        "汤粥主食": {
          "汤羹": [
            "汤羹"
          ],
          "饭": [
            "饭",
            "焖",
            "饭团",
            "盖浇饭",
            "煲仔饭",
            "焗饭",
            "烩饭"
          ],
          "面": [
            "面",
            "炒面",
            "汤面",
            "凉面",
            "焖面"
          ],
          "饼": [
            "饼"
          ]
        },
      }
    }
  }

  returnMenu(obj) {
    if(obj instanceof Array) {
      return obj.map(item => (
        <Menu.Item key={item}>{item}</Menu.Item>
      ))
    }
    const menu = []
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        menu.push(
          <SubMenu key={key} title={key}>
            {this.returnMenu(obj[key])}
          </SubMenu>
        )
      }
    }
    return menu
  }

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClickCapture={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {this.returnMenu(this.state.category)}
      </Menu>
    );
  }
}

export default RealMenu