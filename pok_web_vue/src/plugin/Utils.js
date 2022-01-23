/* eslint-disable */
export default {
  //获取url中的参数
  getUrlKey: function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  },
  // 函数实现，参数 delay 单位 毫秒 ；
  wait: function (delay) {
    for (var t = Date.now(); Date.now() - t <= delay;) ;
  }



}
