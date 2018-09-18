const app = getApp();

Page({
  data: {
      list: [
          {
          id: 'dataSourceMES',
              name: '站点一',
              open: false,
              pages: ['button', 'list', 'input', 'slider', 'uploader']
          },
          {
            id: 'dataSourceMES',
              name: '站点二',
              open: false,
              pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
          },
          {
            id: 'dataSourceMES',
              name: '站点三',
              open: false,
              pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
          },
          {
            id: 'dataSourceMES',
              name: '站点四',
              open: false,
              pages: ['navbar', 'tabbar']
          },
          {
            id: 'dataSourceMES',
              name: '站点五',
              open: false,
              pages: ['searchbar']
          }
      ]
  },
  onLoad:function(){
    var dataSource = wx.getStorageSync('dataSource');
    if (dataSource) {
      wx.switchTab({
        url: '../index/index',
      })
    }
  },
  toIndex:function(e){
    console.log(e)
    let dataId = e.currentTarget.id;
    //登录
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: app.setGeocoderUrl("user/login"),
            method: "post",
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              jsCode: res.code,
              dataSource: dataId
            },
            success: res => {
              console.log(res)
              if (res.data.status=='200'){
                wx.setStorageSync('Cookie', res.header['Set-Cookie']);
                wx.setStorageSync('dataSource', dataId);
                wx.switchTab({
                  url: '../index/index',
                })
              }else{
                wx.navigateTo({
                  url: '../bindUser/bindUser',
                })
              }

            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  kindToggle: function (e) {
      var id = e.currentTarget.id, list = this.data.list;
      for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == id) {
              list[i].open = !list[i].open
          } else {
              list[i].open = false
          }
      }
      this.setData({
          list: list
      });
  },
  onPullDownRefresh(res) {
    //this.init({})
  },
});
