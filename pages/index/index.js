//index.js
//获取应用实例
const app = getApp()
let utils = require('../../utils/util')
Page({
  data: {
    titlt: 'Hello World',
    //搜索内容
    searchText:'',
    previewData: [
      {
        id: "1",
        goodsType: "混凝土",
        goodsName: "C10",
        projName: "9#负一层西单元墙柱",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "入户楼梯",
        customerName: "朱翔"
      },
      {
        id: "2",
        goodsType: "润管砂浆",
        goodsName: "C10",
        projName: "	9#负一层西单元墙柱",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "24#道路",
        customerName: "朱翔"
      },
      {
        id: "3",
        goodsType: "混凝土",
        goodsName: "C35",
        projName: "9#负一层西单元墙柱",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "20#层梁",
        customerName: "朱翔"
      },
      {
        id: "4",
        goodsType: "混凝土",
        goodsName: "C30",
        projName: "9#负一层西单元墙柱",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "24#道路",
        customerName: "陆虎"
      },
      {
        id: "5",
        goodsType: "润管砂浆",
        goodsName: "M5",
        projName: "9#负一层西单元墙柱",
        uptTime: "2018-08-22 09:02:25",
        pourLocation: "6#墙柱板",
        customerName: "朱翔"
      }
    ]
  },

  onLoad: function () {
    var dataSource = wx.getStorageSync('dataSource');
    this.setData({
      title: dataSource
    })
    wx.request({
      url: app.setGeocoderUrl("sale/proder/listPage"),
      header:{
        'Cookie': wx.getStorageSync('Cookie'),
        'Content-Type':'application/json'
      },
      data:{
        pageNum:'1',
        pageSize:'10',
        pourId:'15'
      },
      success:function(res){
        console.log(res)
        if (res.data.data==500){
          
        } else{
          // wx.redirectTo({
          //   url: '../home/home',
          // })
        }
        
      }
    })
  },
  commitSearch(res) {
    let val = ((res.detail || {}).value || '').replace(/\s+/g, '')
    this.search(val)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  addOrder:res=>{

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    console.log("ccc")
  },

})
