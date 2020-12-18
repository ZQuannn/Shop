import fetch from '../../api/Fetch'
import api from '../../api/api'
// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemInfo: null,
    num: 1,
    isSalmon: true
  },
  onChange(event) {
    this.setData({
      num: event.detail
    })
  },
  toContact() {
    console.log("点击了图标")
  },
  toCart() {
    console.log("点击了按钮")
  },
  //添加购物车
  addCart() {
    fetch({
      url: "http://47.105.96.139:8081/index.php?s=/api/cart/add",
      methods: "post",
      data: {
        wxapp_id: 10001,
        goods_id: this.data.itemInfo.goods_id,
        goods_num: this.data.num,
        goods_sku_id: this.data.itemInfo.goods_sku_id
      }
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
  },
  toConfirm() {},
  goAnyWhere(e) {
    wx.switchTab({
      url: e.currentTarget.dataset.url,
    })
  },
  goAnyWhere_more() {
    this.setData({
      isSalmon: !this.data.isSalmon
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch({
      url: api + "goods/detail&wxapp_id=10001&token=&goods_id=" + options.id,
    }).then(data => {
      console.log(data.data.data.detail);
      this.setData({
        itemInfo: data.data.data.detail
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})