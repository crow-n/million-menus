import axios from 'axios'

// 常量设置 ========================
axios.defaults.baseURL = 'https://route.showapi.com/'

const showapi_appid = '77623'
const showapi_sign = '62856b4e41ff4a51afe85c0de613e756'
const maxResults = 10

// 方法 ============================
function assignParams(params) {
  return Object.assign({
    showapi_appid,
    showapi_sign,
    showapi_timestamp: formatterDateTime()
  }, params)

  // 1级分类
  // 1级分类.2级分类
  // 2级分类[]  3级分类
}

async function getCategory() {
  const result = await axios.get('1164-2', {
    params: assignParams({})
  })
  return result.data.showapi_res_body
}

async function getType(type, page) {
  const result = await axios.get('1164-1', {
    params: assignParams({
      type,
      maxResults,
      page
    })
  })
  const data = result.data.showapi_res_body

  // 数据结构
  // data.flag     // 是否成功
  // data.allNum   // 数量
  // data.allPage  // 页数
  // data.msg      // 提示
  // data.datas    // 数据
  //   id            // id
  //   cpName        // 名称
  //   smallImg      // 小图
  //   largeImg      // 大图
  //   type_v1       // 1级分类
  //   type_v2       // 2级分类
  //   type_v3       // 3级分类
  //   des           // 描述
  //   yl            // 食材(数组)
  //     y1Name      // 食材名
  //   steps         // 步骤(数组)
  //     imgUrl        // 图片
  //     orderNum      // 步骤数
  //     content       // 描述

}

async function searchMenu(type, cpName, page) {
  let result = await axios.get('1164-1', {
    params: assignParams({
      type,
      cpName,
      maxResults,
      page
    })
  })
  return result.data.showapi_res_body.datas
}

async function getDetail(type, id) {
  let result = await axios.get('1164-1', {
    params: assignParams({
      type,
      id
    })
  })
  return result.data.showapi_res_body.datas
}


function formatterDateTime() {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear()
    + ""
    + (month >= 10 ? month : "0" + month)
    + ""
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
    + ""
    + (date.getHours() < 10 ? "0" + date.getHours() : date
      .getHours())
    + ""
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
      .getMinutes())
    + ""
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
      .getSeconds());
  return datetime;
}

// 导出 ========================
export default {
  getCategory,
  getType,
  searchMenu,
  getDetail
}