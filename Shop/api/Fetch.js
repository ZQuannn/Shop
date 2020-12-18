function fetch(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data,
      dataType: "json",
      method: options.method,
      responseType: "text",
      header: {
        "Content-Type": "application/x-www-from-urlencoded"
      },
      success: resolve,
      fail: reject,
    })
  })
}
export default fetch;