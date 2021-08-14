import Axios from 'axios'

// http response 响应拦截器
Axios.interceptors.response.use(response => {
  return response;
},error => {
  if (error.response) {
    switch (error.response.status) {
      // 返回401，清除token信息并跳转到登录页面
      case 401:
        localStorage.removeItem('token');
        Vue.prototype.$confirm('当前登录失效，请重新登录', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          showCancelButton: false,
          center: true
        }).then(() => {
          // 跳转到登录页
          router.replace('/login');
        });
        break;
      case 403:

        break;
      case 404:

        break;
      case 504:
        Vue.prototype.$message({
          showClose: true,
          message: '服务器报错，请稍后再试',
          type: 'error',
          duration: 0,
        });
        break;
      case 502:
        Vue.prototype.$message({
          message: '服务端报错，请稍后再试',
          type: 'error',
        });
        break;
      default:
        Vue.prototype.$message.error(error.response.data);
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data);
  }
});
