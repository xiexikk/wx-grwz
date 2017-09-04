//生成一些测试数据
Page({
  /**
   * 页面的初始数据
   */
  data: {

    //海报图
    imgUrls: [
      '../images/wx-banner01.png',
      '../images/wx-banner02.png',
      '../images/wx-banner03.png',
      '../images/wx-banner04.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3500,
    duration: 1000,

    //作品文字
    worksPC:[
      {
        ti: '嗨推学院',
        link:''
      },
      {
        ti: '英诺公司官网',
        link: ''
      },
      {
        ti: '涂料经销商联盟商城',
        link: ''
      },
      {
        ti: '指印美图商城',
        link: ''
      },
      {
        ti: '印了吗商城',
        link: ''
      },
      {
        ti: '陪游商家版',
        link: ''
      },
      {
        ti: '北江纺织商城',
        link: ''
      }
    ],
    worksWap: [
      {
        ti: '嗨推学院',
        link: ''
      },
      {
        ti: '仲意建材报',
        link: ''
      },
      {
        ti: '清化商会',
        link: ''
      },
      {
        ti: '采批文具微商城',
        link: ''
      },
      {
        ti: '涂料微商城',
        link: ''
      },
      {
        ti: '孝感车天地微商城',
        link: ''
      },
      {
        ti: '北江纺织微商城',
        link: ''
      }
    ],

   
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
    return {
      title: 'xiexikk个人网站',
      desc: 'xiexikk小程序开发',
      // path: '/'
    }
  },
})

