import store from '@/store'
const util = {
  // 设置store
  setStore: function (key, value, model) {
    this.setCookie(key, value);
    store.dispatch(model, { key, newValue: value });
  },
  // 设置cookie
  setCookie: function (name, value, days = 30) {
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + JSON.stringify(value) + ";path=/;expires=" + exp.toGMTString();
  },
  // 获取cookie
  getCookie: function (name) {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
      return JSON.parse(arr[2]);
    } else {
      return "";
    }
  },
  // 删除cookie
  delCookie: function (name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = this.getCookie(name);
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
  }
}

export default util