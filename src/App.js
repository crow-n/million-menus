import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { message, Icon } from "antd";

import Header from './component/header/Header'
import SearchAndMenu from './component/menuList/SearchAndMenu'
import Details from './component/details/Details'

import menuMethods from './util/menu.js'
import './App.css'

// 全局配置message组件出现的位置
message.config({
  top: 300,
  duration: 2
})

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      category: [],
      nowType: '',
      searchWord: '',
      nowPage: 1,
      allNum: 0,
      menu: [],
      msg: ''
    }
    // 请求页数超过总页数 提示
    this.noMoreMsg = '已经到底啦'

    this.handleClickType = this.handleClickType.bind(this)
    this.handleSearchWord = this.handleSearchWord.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  // 错误提示
  componentWillUpdate(nextProps, nextState) {
    const newMsg = nextState.msg
    // 不需要比较 newMsg !== this.state.msg
    // 因为由 其他state数据 发生的变化, msg都会被置为 ''
    // 所以 newMsg !== '' 一定是从  错误情况 过来的 update
    if (newMsg !== '') {
      if (newMsg === this.noMoreMsg) {
        message.open({
          content: newMsg,
          icon: <Icon type="smile" theme="twoTone" />
        })
        this.setState({ msg: '' })
      }
      else {
        message.error(newMsg)
      }
    }
  }

  // 请求接口1, 初始化分类表
  componentWillMount() {
    menuMethods.getCategory()
      .then(res => {
        // 请求失败
        if (typeof res === 'string') {
          this.setState({ msg: res })
        } else {
          this.setState({ category: res })
        }
      })
  }

  // 点击分类, 调用searchType
  handleClickType(type) {
    this.tryToSetMenu(type, '')
  }

  // 点击搜索, 调用searchType
  handleSearchWord(word) {
    this.tryToSetMenu(this.state.nowType, word)
  }

  // 上拉加载更多, 调用searchType
  handleScroll() {
    this.tryToSetMenu(
      this.state.nowType,
      this.state.searchWord,
      this.state.nowPage + 1
    )
  }

  // 请求接口2, 获取菜单并尝试设置
  tryToSetMenu(type, word, page = 1) {
    // 判断 请求的页数 是否大于 总页数
    // 放在 请求外面 判断, 能减少 无用请求 次数
    const allNum = this.state.allNum
    const maxResults = menuMethods.maxResults
    if (allNum !== 0 && page > Math.ceil(allNum / maxResults)) {
      this.setState({ msg: this.noMoreMsg })
      return
    }
    // 请求
    menuMethods.searchMenu(type, word, page)
      .then(res => {
        // 请求成功
        if (res.flag) {
          // 如果请求的页数不为1, 则在原来的数据基础上 拼接 新数据
          const data = page === 1 ?
            res.datas : this.state.menu.concat(res.datas)
          this.setState({
            menu: data,
            msg: '',
            nowType: type,
            searchWord: word,
            nowPage: page,
            allNum: res.allNum
          })
        }
        // 系统级错误 或 请求错误
        else {
          this.setState({ msg: res.msg })
        }
      })
  }

  // 让 wrapper 固定位置
  componentDidMount() {
    const winHeight = window.screen.height
    const headerHeight =
      document.getElementsByClassName('header')[0].getBoundingClientRect().height

    const wrapper = this.refs.wrapper
    wrapper.style.cssText = `overflow:auto;height:${winHeight - headerHeight}px`
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header
            category={this.state.category}
            onClickType={this.handleClickType} />
          <div ref="wrapper">
            <Switch>
              <Route exact path="/" render={() => (
                <SearchAndMenu
                  onSearch={this.handleSearchWord}
                  menu={this.state.menu}
                  loadMoreData={this.handleScroll} />
              )} />
              <Route exact path="/:id" component={Details} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App