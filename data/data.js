/**
 * Created by kisnows on 2016/9/12.
 */
/* eslint-disable */
module.exports = {
  '/home/index': {
    'code': 0,
    'msg': '成功',
    'redirect': 1, // 首页
    'data': {
      'loanApplyId': 122, //申请订单编号,
      'status': 40, // 用户首页状态，10：我要贷款，20：去完善订单，30：等待电核(未进件)，31:等待电核(已进件) 40：获得额度 50：正在放款，60：正在还款  80:已关闭 90：已经还清
      'statusDec': '我要贷款', //状态给前端的描述
      'allowAmount': 50000,//最高额度 授信查询返回
      'availableAmount': 3000,//可用额度 授信查询返回
      'dayRate': '0.03%',//日利率
      "isBadCredit": 1, //1 信用不良 0 非信用不良
      "startAuth": 1 //1 已经开始四项认证 0：未开始四项认证  这个字段用来特殊处理 已经预提交的状态仍旧显示为 我要贷款 文案
    }
  },
  '/home/link': {
    'code': 1,
    'msg': '操作成功',
    'redirect': 3,//重定向至进度页（fromItems=true）
    'data': {
      'loanApplyId': 7
    }
  },
  '/preloan/submit': {
    'code': 1,
    'msg': '操作成功',
    'redirect': 10, // 重定向至四项基本资料页
    'data': {
      'applyAmt': 5000 // 期望金额
    }
  },
  '/preloan/items/index': {
    'code': 0,
    'msg': '查询成功',
    'redirect': 0,
    'data': {
      'isIdentified': 0, // 0 没有实名，1已经实名
      'basicInfoStatus': 30,  //基本信息认证状态
      'jobStatus': 10,  //'11' 未认证完成，已填写部分，比如提交了工作信息认证但是没有进行邮箱认证
      'bankCardHoldStatus': 20,   //储蓄卡认证状态
      'identityCardStatus': 40,   //个人身份证和工作证件认证状态 '41' 上传部分，没有完全上传完成
      'loanApplyId': 7,
      'applyAmt': 5000
    }
  },
  '/preloan/base/index': {
    'code': 0,
    'msg': '查询成功',
    'redirect': 0,
    'data': {
      'dataCityList': [{
        'cityName': '重庆市',
        'cityId': 11
      }, {
        'cityName': '成斗市',
        'cityId': 12
      }],
      'preApplyName': ''
    }
  },
  '/preloan/base/submit': {
    'code': 1,
    'msg': '成功',
    'redirect': 3,
    'data': {}
  },
  '/preloan/job/index': {
    'code': 0,
    'msg': '查询成功',
    'redirect': 0,
    'data': {
      'subjects': [
        {
          'questionId': 2,
          'questionType': 1,
          'minValue': '1000',
          'maxValue': '99999',
          'content': '去年年终奖',
          'description': '1000-99999'
        }, {
          'questionId': 6,
          'questionType': 2,
          'content': '上次发薪时间',
          'description': ''
        }
      ]
    }
  },
  '/preloan/job/submit': {
    'code': 1,
    'msg': '成功',
    'redirect': 9
  },
  '/preloan/job/mail/index': {
    'code': 0,
    'msg': '成功',
    'redirect': 0,
    'data': {
      'email': 'test@163.com'
    }
  },
  '/preloan/job/mail/getvcode': {
    'code': 0,
    'msg': '成功',
    'redirect': 0
  },
  '/preloan/job/mail/verify': {
    'code': 1,
    'msg': '成功',
    'redirect': 3
  },
  '/preloan/job/mail/modify': {
    'code': 1,
    'msg': '成功',
    'redirect': 9
  },
  '/loaning/index': {
    'code': 0,
    'msg': '成功',
    'redirect': 0,
    'data': {
      'status': 1, //订单状态
      'applyAmt': 6000,
      'applyPeriod': 24,
      'confirmAmt': 5000,
      'confirmPeriod': 6,
      'repayMethod': '自动还款',
      'bankCard': '尾号567的中国工商银行卡',
      'minLoanLimit': 3000,
      'maxLoanLimit': 50000,
      'productItemList': [{
        'itemCode': 'p8m1',
        'monthRateStr': '1.66%',
        'periodInNum': 1, // 1期
        'productCode': 'P8',
        'rateMax': '2.50%', // 利率分级新增 最高利率
        'rateMin': '1.56%', // 利率分级新增 最低利率
        'repayMethod': '自动还款'
      }, {
        'itemCode': 'p8m2',
        'periodInNum': 3, // 3期
        'productCode': 'P8',
        'rateMax': '2.20%', // 利率分级新增 最高利率
        'rateMin': '0.96%', // 利率分级新增 最低利率
        'repayMethod': '自动还款'
      }, {
        'itemCode': 'p8m3',
        'periodInNum': 6, // 6期
        'productCode': 'P8',
        'rateMax': '1.80%', // 利率分级新增 最高利率
        'rateMin': '0.76%', // 利率分级新增 最低利率
        'repayMethod': '自动还款'
      }]
    }
  },
  '/loaning/status': {
    'code': 0,
    'msg': '成功',
    'redirect': 0,
    'data': {
      'status': 1 //订单状态
    }
  },
  '/preloan/identity/index': {
    'code': 0,
    'msg': '操作成功',
    'redirect': 0,
    'data': {
      'idCardFront': 'http://i12.tietuku.com/fc21f14a4e6339e8t.jpg', //身份证正面照
      'idCardBack': '', //身份证反面照
      'idCardOnHand': 'FILE-20160114-1196578a9cfecaf-c71c-41f4-8dc0-5d7e223858e5.jpg', //身份证手持照
      'badge': 'http://i11.tietuku.com/0500fddcfde96a5ct.jpg' //工作证件照
    }
  },
  '/preloan/identity/upload': {
    'code': 0,
    'msg': '操作成功',
    'redirect': 0, //重定向至四项基本资料页
    'data': {}
  },
  '/preloan/identity/submit': {
    'code': 0,
    'msg': '成功',
    'redirect': 2,
    'data': {}
  },
  '/preloan/card/index': {
    'code': 1,
    'msg': '成功',
    'redirect': 6, //未认证13 到未绑卡页面 ，认证 6到已绑卡页面
    'data': {}
  },
  '/preloan/card/sendAuth': {
    'code': 0,
    'msg': '成功',
    'data': {}
  },
  '/preloan/card/boundidx': {
    "code": 0,
    "msg": "请求成功",
    "redirect": 0,
    "data": {
      "name": "马",
      "identityNo": "51132546587",
      "cardInfoList": [
        {
          "bankCardId": 1,
          "cardName": "666666********6479",
          "desc": "尾号6479的建设银行卡"
        }, {
          'bankCardId': 827384777,
          "cardName": "666666********6688",
          'desc': '尾号6688的招商银行卡'
        }
      ]
    }
  },
  '/preloan/card/boundingidx': {
    'code': 0,
    'msg': '成功',
    'redirect': 0,
    'data': {
      'name': '张三',
      'bankList': [{
        'bankCode': '001',
        'bankName': '中国工商银行'
      }, {
        'bankCode': '002',
        'bankName': '中国农业银行'
      }]
    }
  },
  '/preloan/card/bindapply': {   //绑卡提交
    'code': 1,
    'msg': '成功',
    'redirect': 3
  },
  '/preloan/card/submit': {   //绑卡新卡提交
    'code': 1,
    'msg': '成功',
    'redirect': 3
  }
}
