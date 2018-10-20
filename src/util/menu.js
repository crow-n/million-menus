import axios from 'axios'

// 常量设置 ========================
axios.defaults.baseURL = 'https://route.showapi.com/'

const showapi_appid = ''
const showapi_sign = ''
const maxResults = 10

// 方法 ============================
// 合并系统级参数
function assignParams(params) {
  return Object.assign({
    showapi_appid,
    showapi_sign,
    showapi_timestamp: formatterDateTime()
  }, params)
}

// 获取分类列表
// 错误情况: typeof res === 'string'
async function getCategory() {
  const result = await axios.get('1164-2', {
    params: assignParams({})
  })
  const data = result.data
  if(data.showapi_res_code) {
    return data.showapi_res_error
  }
  const res = data.showapi_res_body
  delete res.flag
  delete res.ret_code
  return res
}

// 获取菜单列表
// 错误情况: res.flag === false
async function searchMenu(type, cpName, page) {
  const result = await axios.get('1164-1', {
    params: assignParams({
      type,
      cpName,
      maxResults,
      page
    })
  })
  const data = result.data
  if (data.showapi_res_code) {
    return {
      flag: false,
      msg: data.showapi_res_error
    }
  }
  const res = data.showapi_res_body
  return res
}

// 获取时间戳
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
  maxResults,
  getCategory,
  searchMenu
}