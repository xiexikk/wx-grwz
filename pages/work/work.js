Page({

  /**
   * 页面的初始数据
   */
  data: {
    //加载文字
    loadTxt:'正在加载',

    //tab栏
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 

    //作品集
    worksPC: [
      {
        id: 1,
        imgs: '../images/hituiPc01.jpg',
        title: '嗨推学院',
        text: '嗨推学院，专注淘宝客推广，淘宝客教程，淘宝客程序，销售视频教程与学习方法，为广大卖家以及淘宝客提供淘宝推广学习交流平台网站。',
        link: '',
      },
      {
        id: 2,
        imgs: '../images/tuliaoPc01.jpg',
        title: '涂料经销商联盟',
        text: '涂料经销商联盟，专注服务于涂料行业经销商，以帮助企业构建出一个商务人脉圈，优化和补充销售渠道的目的，社交加电商模式的平台网站。',
        link: '',
      },
      {
        "id": 3,
        "imgs": '../images/bjfzPc01.jpg',
        "title": '北江纺织商城',
        "text": '韶关北江纺织，是一家面料展示平台,是业界领先的牛仔面料生产厂家,专业生产各种优质牛仔面料,各类中高档牛仔面料批发分销的电商平台网站。',
        "link": ''
      },
      {
        "id": 4,
        "imgs": '../images/ylmPc01.jpg',
        "title": '印了吗商城',
        "text": '印了吗商城，是一家照片冲印定制，相册模版编辑，提供各式相册、台历等照片产品的网上冲印和相册模版个性定制服务的B2C电商平台网站。',
        "link": ''
      },
      {
        "id": 5,
        "imgs": '../images/yingnuoPc01.jpg',
        "title": '英诺公司官网',
        "text": '英诺科技，是一家提供高品质移动应用解决方案的提供商，专注于移动互联网APP开发，微信开发和提供网络整体解决方案的外包行业企业官网。',
        "link": ''
      },
      
    ],

    worksWap:[
      {
        "id": 1,
        "imgs": '../images/bjfzWx01.jpg',
        "title": '北江纺织微商城',
        "text": '微信公众号“北江纺织”，同步PC端网站，是业界领先的牛仔面料生产厂家，专业牛仔面料批发，各种牛仔面料优质供应商的电子商务微商城。',
        "link": ''
      },
      {
        "id": 2,
        "imgs": '../images/ctdWx01.jpg',
        "title": '孝感车天地微商城',
        "text": '孝感车天地，使用微信公众号的用户更多的是车主，所以侧重与车主的使用体验和车主粘性，并且提供商户入口，方便商户进行相关的操作的微网站。',
        "link": ''
      },
      {
        "id": 3,
        "imgs": '../images/cpWx01.jpg',
        "title": '采批文具商城微信端',
        "text": '采批文具商城，负责商品零售批发，专注文具、体育用品批发销售领域，为行业生产商，销售商及相关客户提供质优的商品和便捷使用的微商城。',
        "link": ''
      },
      {
        "id": 4,
        "imgs": '../images/qhshWx01.jpg',
        "title": '清化商会',
        "text": '微信公众号 “清化商会”，主要是在中国广东韶关市的商人与商人、商人与社会之间相互联系的，增加家乡文化与商业交流的社区资讯微官站。',
        "link": ''
      },
      {
        "id": 5,
        "imgs": '../images/tuliaoWx01.jpg',
        "title": '涂料微商城',
        "text": '微信公众号“涂经联新材”，同步涂料经销商PC端网站，以帮助企业构建出一个商务人脉圈，优化和补充销售渠道的目的，社交加电商模式的微商城。',
        "link": ''
      },
      {
        "id": 6,
        "imgs": '../images/zyjcbWx01.jpg',
        "title": '仲意建材报',
        "text": '微信公众号“仲意建材报”，主要以建材网展，展会预定，电子书刊，活动资讯的发布等待，展示介绍此平台的的相关信息的企业资讯微网站。',
        "link": ''
      },
      {
        "id": 7,
        "imgs": '../images/hituiWx01.jpg',
        "title": '嗨推学院',
        "text": '微信公众号“嗨推学院”,专注淘宝客推广，淘宝客教程，淘宝客程序，销售视频教程与学习方法，为广大卖家以及淘宝客提供淘宝推广学习交流平台网站。',
        "link": ''
      },
    ]

  },

 // tab栏操作
  tabFun :function(e){
    //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    //console.log(_datasetId);
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    }); 
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

    //wx.stopPullDownRefresh()


    //wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
     // wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log('加载更多')
    setTimeout(() => {
      this.setData({
        //状态
        isHideLoadMore: true,
        //pc数据
        worksPC: [
          {
            id: 1,
            imgs: '../images/hituiPc01.jpg',
            title: '嗨推学院',
            text: '嗨推学院，专注淘宝客推广，淘宝客教程，淘宝客程序，销售视频教程与学习方法，为广大卖家以及淘宝客提供淘宝推广学习交流平台网站。',
            link: '',
          },
          {
            id: 2,
            imgs: '../images/tuliaoPc01.jpg',
            title: '涂料经销商联盟',
            text: '涂料经销商联盟，专注服务于涂料行业经销商，以帮助企业构建出一个商务人脉圈，优化和补充销售渠道的目的，社交加电商模式的平台网站。',
            link: '',
          },
          {
            "id": 3,
            "imgs": '../images/bjfzPc01.jpg',
            "title": '北江纺织商城',
            "text": '韶关北江纺织，是一家面料展示平台,是业界领先的牛仔面料生产厂家,专业生产各种优质牛仔面料,各类中高档牛仔面料批发分销的电商平台网站。',
            "link": ''
          },
          {
            "id": 4,
            "imgs": '../images/ylmPc01.jpg',
            "title": '印了吗商城',
            "text": '印了吗商城，是一家照片冲印定制，相册模版编辑，提供各式相册、台历等照片产品的网上冲印和相册模版个性定制服务的B2C电商平台网站。',
            "link": ''
          },
          {
            "id": 5,
            "imgs": '../images/yingnuoPc01.jpg',
            "title": '英诺公司官网',
            "text": '英诺科技，是一家提供高品质移动应用解决方案的提供商，专注于移动互联网APP开发，微信开发和提供网络整体解决方案的外包行业企业官网。',
            "link": ''
          },
        ],
        //wap数据
        worksWap: [
          {
            "id": 1,
            "imgs": '../images/bjfzWx01.jpg',
            "title": '北江纺织微商城',
            "text": '微信公众号“北江纺织”，同步PC端网站，是业界领先的牛仔面料生产厂家，专业牛仔面料批发，各种牛仔面料优质供应商的电子商务微商城。',
            "link": ''
          },
          {
            "id": 2,
            "imgs": '../images/ctdWx01.jpg',
            "title": '孝感车天地微商城',
            "text": '孝感车天地，使用微信公众号的用户更多的是车主，所以侧重与车主的使用体验和车主粘性，并且提供商户入口，方便商户进行相关的操作的微网站。',
            "link": ''
          },
          {
            "id": 3,
            "imgs": '../images/cpWx01.jpg',
            "title": '采批文具商城微信端',
            "text": '采批文具商城，负责商品零售批发，专注文具、体育用品批发销售领域，为行业生产商，销售商及相关客户提供质优的商品和便捷使用的微商城。',
            "link": ''
          },
          {
            "id": 4,
            "imgs": '../images/qhshWx01.jpg',
            "title": '清化商会',
            "text": '微信公众号 “清化商会”，主要是在中国广东韶关市的商人与商人、商人与社会之间相互联系的，增加家乡文化与商业交流的社区资讯微官站。',
            "link": ''
          },
          {
            "id": 5,
            "imgs": '../images/tuliaoWx01.jpg',
            "title": '涂料微商城',
            "text": '微信公众号“涂经联新材”，同步涂料经销商PC端网站，以帮助企业构建出一个商务人脉圈，优化和补充销售渠道的目的，社交加电商模式的微商城。',
            "link": ''
          },
          {
            "id": 6,
            "imgs": '../images/zyjcbWx01.jpg',
            "title": '仲意建材报',
            "text": '微信公众号“仲意建材报”，主要以建材网展，展会预定，电子书刊，活动资讯的发布等待，展示介绍此平台的的相关信息的企业资讯微网站。',
            "link": ''
          },
          {
            "id": 7,
            "imgs": '../images/hituiWx01.jpg',
            "title": '嗨推学院',
            "text": '微信公众号“嗨推学院”,专注淘宝客推广，淘宝客教程，淘宝客程序，销售视频教程与学习方法，为广大卖家以及淘宝客提供淘宝推广学习交流平台网站。',
            "link": ''
          },
        ],
        //加载文字
        loadTxt: '没有了...',
      })
    }, 1000)
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
  }
})