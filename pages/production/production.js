// pages/production /production .js
var sliderWidth = 96; 
Page({
  data: {
    tabs: ["计划订单", "历史订单"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    previewData:[
      {
        id:"1",
        goodsType:"混凝土",
        goodsName:"C10",
        projName:"碧桂园·山湖城二期十一区一标段",
        uptTime:"2018-08-22 09:02:25",
        pourLocation:"入户楼梯",
        customerName:"朱翔"
      },
      {
        id: "2",
        goodsType: "润管砂浆",
        goodsName: "c10",
        projName: "	东方红郡芙蓉园",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "24#道路硬化",
        customerName: "朱翔"
      },
      {
        id: "3",
        goodsType: "混凝土",
        goodsName: "C10P6",
        projName: "沩江景观提质改造工程沩江景观提质改造工程",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "20#12层梁板梯",
        customerName: "朱翔"
      },
      {
        id: "4",
        goodsType: "混凝土",
        goodsName: "C35碎石",
        projName: "长沙卫生职业学院湘江新区",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "24#道路硬化",
        customerName: "陆虎"
      },
      {
        id: "5",
        goodsType: "润管砂浆",
        goodsName: "M5",
        projName: "宁乡县美的城一期项目土建总承包工程	",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "6#墙柱板",
        customerName: "朱翔"
      }
    ]
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    console.log(e)
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 1000
    });
  },
  onReady: function () {

  },

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