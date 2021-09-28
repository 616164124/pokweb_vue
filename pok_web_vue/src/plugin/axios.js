import axios from 'axios'
import URLData from "./UrlData";
//axios 全局拦截设置 https://segmentfault.com/a/1190000022647152

const instance = axios.create({
  timeout: 30000
});

//请求拦截
//所有的网络请求都会先走这个方法
instance.interceptors.request.use(config => {
    var token = "12321"

    if (config.push == '/') {
    } else {
      if (token) {
        config.headers.token = token
      }
      return config;
    }
  },
  error => {
    return Promise.reject(error)
  }
)

//响应拦截
//所有的网络返回数据之后都会先执行这个方法
instance.interceptors.response.use(

);


/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
export default function (method, url, data = null, config = null) {
  method = method.toLowerCase();
  var tokens
  if (url == URLData.login) {
    tokens = "login";
  } else {
    tokens = sessionStorage.getItem("token");
  }
  url = "http://localhost:4000" + url;
  if (method == "post") {
    return axios.post(url, {
      data,token:tokens
    }
    )
  }

  if (method == "get") {
    return axios.get(url, {
      data,token:tokens
    })
  }

  if (method == "put") {
    return axios.put(url, {
      data,token:tokens
    })
  }

  if (method == "delete") {
    return axios.delete(url, {
      data,token:tokens
    })
  }


  //
  // if (method == 'post') {
  //   return instance.post(url, {params:data,token:tokens},config)
  // } else if (method == 'get') {
  //   return instance.get(url, { params: data,token:tokens})
  // } else if (method == 'delete') {
  //   return instance.delete(url, { params: data,token:tokens })
  // }else if(method == 'put'){
  //   return instance.put(url,{ params: data,token:tokens })
  // }else{
  //   console.error('未知的method'+method)
  //   return false
  // }


}
