export function required(val) {
  if (val || val === 0) {
    return true;
  } else {
    return "必填字段";
  }
}

/**
 * 验证规则定义
 */
let $valid = {};
$valid = {
  msg: {
    amount: "金额必须大于等于0，并最多2位小数，请输入正确的金额",
    amountTwo: "金额必须大于，并最多2位小数，请输入正确的金额",
    opsNum: "最多4位小数，请重新输入",
    posNum: "必须大于等于0，并且最多4位小数，请重新输入",
    minus: "金额必须小于0，并最多2位小数，请输入正确的金额",
    nteger: "请输入大于等于0的整数",
    intOrFloat: "请输入数字，并确保大于0",
    phone: "请输入11位数的手机号码",
    tel: "请输入6-20个字符且不包含非法字符",
    fax: "请输入正确的传真格式如：0751-5870829",
    name: "用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）！",
    age: "年龄必须在1-120之间！",
    normalChar: "输入值不能为空和包含其他非法字符！",
    norma: "输入值不能包含其他非法字符！",
    currency: "货币格式错误！",
    describe: "请输入6-50个字符！",
    idcard: "身份证号码格式不正确",
    zip: "邮政编码格式不正确,请输入不以零开头的六位数字。",
    notEmpty: "不能为空，也不能全为空格",
    integer: "请输入整数",
    accessory: "请输入大于0的整数",
    assetValue: "请输入大于等于0的数，且小数位最多2位",
    account:
      "登录账号只能使用数字，字母，下划线，不能以下划线开头，并且不超过20个字符",
    noNum: "名称不能包含数字和其他非法字符",
    pointNum: "请输入数字，且小数位最多6位",
    itemNum: "不能为非法字符或全是数字",
    percentage: "请输入0-100之间的数字,最多两位小数。",
    email: "请输入正确的邮箱格式,例：abc@ef.com",
    duration: "时长不能超过5位整数,并最多一位小数"
  },
  notEmpty: function(value) {
    value = value + "" || "";
    var valid = value.trim() != "";
    return valid && value != "undefined";
  }
};
//校验方法封装
export function $check(that, rules) {
  for (let i in rules) {
    let rule = rules[i].rule;
    let fun = $valid[rule];
    let msg = rules[i].msg ? rules[i].msg : $valid.msg[rule];
    let checkdata = "";
    rules[i].data.forEach(d => {
      checkdata = checkdata ? checkdata[d] : that[d];
    });
    let valid = fun(checkdata);
    if (!valid) {
      that.$toast(msg);
      return msg;
    }
  }
  return true;
}

export default $valid;
