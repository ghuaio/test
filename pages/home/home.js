Page({
  data: {
      list: [
          {
              id: 'form',
              name: '站点一',
              open: false,
              pages: ['button', 'list', 'input', 'slider', 'uploader']
          },
          {
              id: 'widget',
              name: '站点二',
              open: false,
              pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
          },
          {
              id: 'feedback',
              name: '站点三',
              open: false,
              pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
          },
          {
              id: 'nav',
              name: '站点四',
              open: false,
              pages: ['navbar', 'tabbar']
          },
          {
              id: 'search',
              name: '站点五',
              open: false,
              pages: ['searchbar']
          }
      ]
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
  }
});