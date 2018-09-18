// pages/bindUser/bindUser.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['站点1', '站点2', '站点3', '站点4'],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: app.setGeocoderUrl("user/bind"),
            method:"post",
            header: {
              "Content-Type":"application/x-www-form-urlencoded"
            },
            data: {
              loginName: e.detail.value.loginName,
              password: e.detail.value.password,
              jsCode:res.code,
              dataSource:"dataSourceMES"
            },
            success:res=>{
              if (statusCode=='200'){
                console.log(res)
              }else{
                
              }             
            }
        
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
    // wx.request({
    //   url: 'http://192.168.233.1:8080/app/user/login',
    //   method:"POST",
    //   data:{
    //     User:e.detail.value,
    //     jsCode:"",
    //     dataSource:"dataSourceA"
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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