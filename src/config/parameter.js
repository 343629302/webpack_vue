export const deviceTypeEnum = [{
    value: "MEETING_BRAND",
    text: "会议牌"
  },
  {
    value: "DOMITORY_BRAND",
    text: "宿舍牌"
  },
  {
    value: "VISITOR_MACHINE",
    text: "访客机"
  },
  {
    value: "CHECK_IN_MACHINE",
    text: "考勤机"
  },
  {
    value: "CLASS_BRAND",
    text: "电子班牌"
  },
  // {value:'CONSUMER_IDENTIFY',text:'消费人脸识别机'},
  {
    value: "ACCESS_CONTROL",
    text: "门禁人脸识别机"
  }
];

export const deviceBrandEnum = [{
    value: "hik vision",
    text: "海康"
  },
  {
    value: "fooltech",
    text: "蠢材科技"
  },
  {
    value: "seewo",
    text: "希沃"
  },
  {
    value: "east river",
    text: "依时利"
  },
  {
    value: "yangday",
    text: "扬天"
  },
  {
    value: "jocat",
    text: "优卡特"
  }
];

//场地类型数据
export const siteListData = [{
    buildingType: "ACADEMIC", // 教学楼
    data: [{
        id: "CLASSROOM",
        text: "教室"
      },
      {
        id: "OFFICE",
        text: "办公室"
      },
      {
        id: "EXPERIMENT",
        text: "实验室"
      },
      {
        id: "CONFERENCE",
        text: "会议室"
      },
      {
        id: "MULTIMEDIA",
        text: "多媒体室"
      },
      {
        id: "OTHER",
        text: "其他"
      }
    ]
  },
  {
    buildingType: "CANTEEN", // 食堂
    data: [{
        id: "CANTEEN",
        text: "食堂"
      },
      {
        id: "OTHER",
        text: "其他"
      }
    ]
  },
  {
    buildingType: "OFFICE", // 办公楼
    data: [{
        id: "OFFICE",
        text: "办公室"
      },
      {
        id: 'EXPERIMENT',
        text: '实验室'
      },
      {
        id: 'CONFERENCE',
        text: '会议室'
      },
      {
        id: 'MULTIMEDIA',
        text: '多媒体室'
      },
      {
        id: "OTHER",
        text: "其他"
      }
    ]
  },
  {
    buildingType: "PLAYGROUND", // 体育馆
    data: [{
        id: "SPORT",
        text: "体育馆"
      },
      {
        id: "OTHER",
        text: "其他"
      }
    ]
  },
  {
    buildingType: "DORMITORY", // 宿舍楼
    data: [{
        id: "DORMITORY",
        text: "宿舍"
      },
      {
        id: "TEACHER_DORMITORY",
        text: "教工宿舍"
      },
      {
        id: "OTHER",
        text: "其他"
      }
    ]
  },
  {
    buildingType: "LIBRARY", // 图书馆
    data: [{
        id: "LIBRARY",
        text: "图书馆"
      },
      {
        id: "OTHER",
        text: "其他"
      }
    ]
  },
  {
    buildingType: "GATE", // 学校大门
    data: [{
      id: "OTHER",
      text: "其他"
    }]
  },
  {
    buildingType: "OTHER", // 其他建筑
    data: [{
      id: "OTHER",
      text: "其他"
    }]
  }
];

export var processTypeEnum = [
  //   { text: "学生请假", value: "STUDENT_LEAVE" },
  //   { text: "教师请假", value: "STAFF_LEAVE_APPLY" },
  //   { text: "公车申请", value: "CAR_APPLY" },
  //{ text: "公文审批", value: "DOCUMENT_APPROVAL" },
  // { text: "资讯审批", value: "NOTICE_APPLY" },
  //{ text: "场地申请", value: "PLACE_APPLY" },
  // { text: "资料印刷", value: "PRINT_APPLY" },
  // { text: "设备申请", value: "DEVICE_APPLY" },
  // { text: "设备维修", value: "DEVICE_REPAIR_APPLY" },
  // { text: "采购申请", value: "PURCHASE_APPLY" },
  // { text: "影映申请", value: "PHOTOCOPY" },
  //{ text: "访客预约", value: "VISIT_APPLY" },
  //   { text: "报修申请", value: "REPAIR_APPLY" },
  {
    text: "会议申请",
    value: "MEETING_APPLY"
  },
  //   { text: "活动申请", value: "ACTIVITY_MAIN" },
  //   { text: "接待餐申请", value: "RECEPTION_MAIN" },
  //   { text: "校园发布", value: "NOTICE_PUBLISH_APPLY" }, // 校园公告/新闻
  //   { text: "周程发布", value: "TRIP_PUBLISH_APPLY" },
  {
    text: "功能室申请",
    value: "FUNCTION_ROOM_APPLY"
  }
];