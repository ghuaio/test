//app.js
App({
  onLaunch: function () {
    var that = this;
    var dataSource = wx.getStorageSync('dataSource');
    console.log(dataSource)
    // 加载小程序时登录
    // if (dataSource){
    //   wx.login({
    //     success: function (res) {
    //       if (res.code) {
    //         console.log(res.code)
    //         //发起网络请求
    //         wx.request({
    //           url: that.setGeocoderUrl("user/login"),
    //           method: "post",
    //           header: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //           },
    //           data: {
    //             jsCode: res.code,
    //             dataSource: dataSource
    //           },
    //           success: res => {
    //             console.log(res)
    //             if (res.data.status == '200') {
    //               wx.setStorageSync('Cookie', res.header['Set-Cookie']);
    //               wx.switchTab({
    //                 url: '../index/index',
    //               })
    //             } else {
    //               wx.navigateTo({
    //                 url: '../bindUser/bindUser',
    //               })
    //             }
    //           }
    //         })
    //       } else {
    //         console.log('登录失败！' + res.errMsg)
    //       }
    //     }
    //   });
    // }   
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    dataId:'',
    userInfo: null
  },
  setGeocoderUrl(address) {
    return `http://localhost:8080/app/${address}`
  },
})