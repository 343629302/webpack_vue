import request from "@/tool/request.js";

/**
 * @description:
 * @param page 页码
 * @param myCreated  我创建的
 * @param myApproval 我审核的
 * @param type 列表类型
 */
export async function getSiteList({
  buildingId,
  pageNo,
  pageSize,
  roomStatus,
  searchKey
}) {
  const res = await request({
    url: "/web/room/page",
    method: "post",
    data: {
      pageNo,
      pageSize,
      buildingId,
      roomStatus,
      searchKey
    }
  });
  return res.data;
}

/**
 * @description 获取区域列表
 */
export async function getBuildingTree() {
  const res = await request({
    url: `/web/building/getTree`,
    method: "post",
    data: {}
  });
  return res.data;
}

/**
 * @description 获取场地设备列表
 * @param page  页码
 * @param id    场地id
 * @param key   识别区域
 */
export async function getRoomEqu({
  page = 1,
  id,
  key = "room"
}) {
  const res = await request({
    url: `/web/${key}/${id}/device`,
    data: {
      pageNo: page,
      size: 20
    }
  });
  return res.data;
}

/**
 * @description 添加建筑树列表
 * @param state 状态
 * @param name  名称
 * @param type  类型
 */
export async function addBuilding({
  state = "ON",
  name,
  type
}) {
  const res = await request({
    url: `/web/building/addBuilding`,
    method: "post",
    data: {
      state,
      name,
      type
    }
  });
  return res.data;
}

/**
 * @description 修改建筑树列表
 * @param state 状态
 * @param name  名称
 * @param type  类型
 * @param id    树的id
 */
export async function modifyBuilding({
  state = "ON",
  name,
  type,
  id
}) {
  const res = await request({
    url: `/web/building/${id}`,
    method: "put",
    data: {
      state,
      name,
      type
    }
  });
  return res.data;
}

/**
 * @description 删除建筑树列表
 * @param id 树的id
 */
export async function deleteBuilding(id) {
  const res = await request({
    url: `/web/building/${id}`,
    method: "delete"
  });
  return res.data;
}

/**
 * @description 添加场地
 * @param maxStudentAmount 最大人数
 * @param name  名称
 * @param type  类型
 * @param buildingId  建筑id
 * @param floor 楼层
 */
export async function addSite({
  maxStudentAmount,
  name,
  type,
  buildingId,
  floor
}) {
  const res = await request({
    url: `/web/room`,
    method: "post",
    data: {
      maxStudentAmount,
      name,
      type,
      buildingId,
      floor,
      admins: "",
      adminIds: [],
      code: ""
    }
  });
  return res.data;
}

/**
 * @description 修改场地
 * @param maxStudentAmount 最大人数
 * @param name  名称
 * @param type  类型
 * @param buildingId  建筑id
 * @param floor 楼层
 * @param id 场地id
 */
export async function editSite({
    maxStudentAmount,
    name,
    type,
    buildingId,
    floor,
    id
  },
  form = {}
) {
  const res = await request({
    url: `/web/room/${id}`,
    method: "put",
    data: Object.assign(form, {
      maxStudentAmount,
      name,
      type,
      buildingId,
      floor,
      admins: "",
      adminIds: [],
      code: ""
    })
  });
  return res.data;
}

/**
 * @description 删除场地
 * @param id 树的id
 */
export async function deleteSite(id) {
  const res = await request({
    url: `/web/room/${id}`,
    method: "delete"
  });
  return res.data;
}

/**
 * @description 获取可以场地绑定的设备
 * @param page  页码
 * @param size  每页数据量
 * @param searchKey  关键字
 * @param type  类型
 */
export async function getBindList({
  page,
  size,
  searchKey,
  type
}) {
  const res = await request({
    url: `/web/device/unbind/page`,
    method: "post",
    data: {
      pageNo: page,
      pageSize: size,
      type: type,
      searchKey,
      withoutBangingPlace: true
    }
  });
  return res.data;
}

/**
 * @description 为场所添加设备
 * @param arr   添加的设备组
 */
export async function addSiteBindEqu(arr) {
  const res = await request({
    url: `/web/room/device`,
    method: "post",
    data: arr
  });
  return res.data;
}

/**
 * @description  解绑设备
 * @param id     设备Id
 * @param rid    场地Id
 * @param key    识别区域
 */
export async function unBindEqu(rid, id, key = "room") {
  const res = await request({
    url: `/web/${key}/${rid}/device/${id}/unbang`,
    method: "post",
    data: {}
  });
  return res.data;
}

/**
 * @description 获取审核流程列表
 * @param page 页码
 * @param size 每页数据量
 */
export async function getProcessList({
  page,
  size
}) {
  const res = await request({
    url: `/web/work/process/page`,
    method: "post",
    data: {
      pageNo: page,
      pageSize: size
    }
  });
  return res.data;
}

/**
 * @description 添加审核流程
 * @param type 类型
 * @param name 名称
 * @param nodes 审批流程
 * @param nodifiers 抄送人
 * @param staffTargets 应用人
 */
export async function addProcess({
  type,
  name,
  nodes,
  nodifiers,
  staffTargets
}) {
  const res = await request({
    url: `/web/work/process`,
    method: "post",
    data: {
      type,
      target: [],
      conditions: [],
      groupName: "",
      name,
      nodes,
      nodifiers,
      staffTargets
    }
  });
  return res.data;
}

/**
 * @description 启用或禁用流程
 * @param key 启用或者禁用
 * @param id  流程id
 */
export async function settingProcess(key, id) {
  const res = await request({
    url: `/web/work/process/${key}/${id}`,
    method: "post",
    data: {}
  });
  return res.data;
}

/**
 * @description 获取某一个类型的建筑列表
 * @param type 类型
 */
export async function getRoomByType(type) {
  const res = await request({
    url: `/web/room/type?roomType=${type}`,
    method: "post",
  });
  return res.data;
}

/**
 * @description 获取功能室位置列表
 */
export async function getRoomTree() {
  const res = await request({
    url: `/web/room/getTree`,
    method: "post",
    data: {},
  });

  return res.data;
}