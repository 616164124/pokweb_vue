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
export function get(url,params){
  return instance.get(url,{
    params
  });
}
export function post(url,data){
  return instance.post(url,data);
}
export function del(url){
  return instance.del(url);
}
export function put(url,data){
  return instance.put(url,data);
}
