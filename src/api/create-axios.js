import axios from 'axios'

function CreateAxios(configs) {
  this.api = null
  this.init()
}

CreateAxios.prototype.init = function () {
  this.api = axios.create(configs)
  this.api.interceptors.request.use(
    (config) => {
      // 写入请求拦截逻辑
      return config
    },
    (error) => {
      // 错误处理
      throw Error(error)
    })
  this.api.interceptors.response.use(
    (res) => {
      // 写入响应拦截逻辑

      return res
    },
    (error) => {
      // 错误处理
      throw Error(error)
    })
  return this.axios
}

//content-type: application/json是处理data
CreateAxios.prototype.toFromData = function (data) {
  const param = new URLSearchParams()
  Object.keys(data).map((key) => {
    if (data[key] !== null) param.append(key, data[key])
  })
  return param
}
export default CreateAxios
