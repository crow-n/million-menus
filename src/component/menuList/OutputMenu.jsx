import React from 'react'
import MenuCard from './MenuCard'
import { Link } from 'react-router-dom'
import { Input } from 'antd';

const Search = Input.Search;

class OutputMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [{
        id:1,
        img: 'http://app2.showapi.com/img/caipuImg3/201611110447/1478810835688417_smallImg.jpg',
        title: '第三方施工',
        description: '阿瑟安抚'
      }, {
        id:2,
        img: 'http://app2.showapi.com/img/caipuImg3/201611110350/147880743544261_smallImg.jpg',
        title: '士大夫撒而非',
        description: '水电费个个外国'
      }, {
        id:3,
        img: 'http://app2.showapi.com/img/caipuImg3/201611110350/1478807434976930_smallImg.jpg',
        title: '第三方',
        description: 'cccc如果任何个人各五个ccc'
      },]
    }
  }

  render() {
    return (
      <div>
        <div className="search-block">
          <Search
            className="search-bar"
            placeholder="试着输入点什么吧"
            enterButton="搜索"
            size="large"
            onSearch={value => console.log(value)}
          />
        </div>
        {
          this.state.menu.map((v) => (
            <Link key={v.id} to={`/${v.id}`}>
              <MenuCard img={v.img} title={v.title} description={v.description} />
            </Link>
          ))
        }
      </div>
    )
  }
}

export default OutputMenu