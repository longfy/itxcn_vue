export default {
  // 设置cookie
  setCookie: (name, value, days = 30) => {
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + JSON.stringify(value) + ";path=/;expires=" + exp.toGMTString();
  },
  // 获取cookie
  getCookie: name => {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
      return JSON.parse(arr[2]);
    } else {
      return "";
    }
  },
  // 删除cookie
  delCookie: name => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = this.getCookie(name);
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
  }
}