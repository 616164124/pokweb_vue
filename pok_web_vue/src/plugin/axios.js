import axios from 'axios'


const instance = axios.create({
  baseURL:"http://localhost:4000",//baseURL会在发送请求的时候拼接url参数前面
  timeout:30000
});

//请求拦截
//所有的网络请求都会先走这个方法
instance.interceptors.request.use(
  function (config) {
    console.group('全局请求拦截')
    console.group(config);
    return  config;
  },
  function (err) {
    return Promise.reject(err);
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
export default function (method, url, data = null,config=null) {
  method = method.toLowerCase();
  url="http://localhost:4000"+url;
  if (method == 'post') {
    return instance.post(url, data,config)
  } else if (method == 'get') {
    return instance.get(url, { params: data})
  } else if (method == 'delete') {
    return instance.delete(url, { params: data })
  }else if(method == 'put'){
    return instance.put(url,data)
  }else{
    console.error('未知的method'+method)
    return false
  }
}
