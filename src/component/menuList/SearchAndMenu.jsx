import React from 'react'
import MenuCard from './MenuCard'
import { Link } from 'react-router-dom'
import { Input, Icon } from 'antd';

import throttle from "../../util/higher-order-function.js";

const Search = Input.Search;

class SearchAndMenu extends React.PureComponent {

  toggleLoading() {
    const loading = this.refs.loading
    loading.classList.add('active')
    setTimeout(() => {
      loading.classList.remove('active')
    }, 1000);
  }

  handleScroll() {
    const cntRect = this.refs.wrapper.getBoundingClientRect()
    const winHeight = window.screen.height
    if (cntRect.height >= winHeight && cntRect.bottom <= winHeight) {
      this.toggleLoading()  // 显示 加载中
      this.props.loadMoreData()
    }
  }

  render() {
    return (
      <div
        ref="wrapper"
        // 对 上拉加载 间隔 1s 的节流
        onTouchMove={throttle(this.handleScroll, 1000).bind(this)}
      >
        {this.props.menu.length > 0 &&
          <div className="search-block">
            <Search
              className="search-bar"
              placeholder="只能搜索当前分类的菜谱哦~"
              enterButton="搜索"
              size="large"
              onSearch={value => this.props.onSearch(value)}
            />
          </div>
        }
        {
          this.props.menu.map((v) => (
            <Link
              key={v.id}
              to={{
                pathname: `/${v.id}`,
                state: v
              }}
            >
              <MenuCard
                img={v.smallImg}
                title={v.cpName}
                description={v.des} />
            </Link>
          ))
        }
        <div className="loading-down" ref="loading">
          <Icon
            className="loading-icon"
            style={{ 
              color: '#f4222d',
              fontSize: '0.28rem'
            }}
            type="loading" spin />
          {"正在加载···"}
        </div>
      </div>
    )
  }
}

export default SearchAndMenu