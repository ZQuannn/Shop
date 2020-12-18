import Store from 'wxministore'

let store = new Store({
  state: {
    msg: "hello,baby",
    babys: [{
      id: 1,
      name: "one"
    }, {
      id: 2,
      name: "two"
    }, {
      id: 3,
      name: "thr"
    }],
  },
  methods: {
    goAnyWhere(e) {
      console.log(e.currentTarget.dataset)
      wx.navigateTo({
        url: e.currentTarget.dataset.url + "?" + e.currentTarget.dataset.sendkey + "=" + e.currentTarget.dataset.sendvalue,
      })
    }
  },
  pageListener: {
    onLoad(options) {
      //this.route 当前onLoad正在执行的页面
      console.log("我在" + this.route + "参数为:", options);
    }
  },
})

export default store;