var app = getApp();

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchBar: {
      canteen: {
        index: "eastFengWei",
        name: "东院风味餐厅"
      },
      searchHint: "搜索菜式",
      searchHistory: ["瓦香鸡","煲仔饭","黄焖鸡米饭"]
    }
  },

  onTapSearchHistory: function(event) {
    console.log(event.currentTarget.dataset.history);
  },

  showCanteenSeletor: function(event) {
    var that = this;
    wx.showActionSheet({
      itemList: ["东院风味餐厅","西苑风味餐厅","浮山大酒店"],
      success: function(res) {
        console.log(res.tapIndex);
        switch(res.tapIndex) {
          case 0: 
            that.setData({
              "searchBar.canteen": {
                index: "eastFengWei",
                name: "东院风味餐厅"
              }
            });
            break;
          case 1:
            that.setData({
              "searchBar.canteen": {
                index: "westFengWei",
                name: "西院风味餐厅"
              }
            });
            break;
          case 2:
            that.setData({
              "searchBar.canteen": {
                index: "fushan",
                name: "浮山大酒店"
              }
            });
            break;
        };
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: app.globalData.navigationBarColor,
    });
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