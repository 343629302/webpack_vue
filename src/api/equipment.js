import request from "@/tool/request.js";

/**
 * @description  获取设备列表
 * @param pageNo   页码
 * @param pageSize 每页条数
 * @param status   设备状态
 * @param searchKey  关键字
 * @param type     设备类型
 */
export async function getDeviceList({
  pageNo,
  pageSize,
  status,
  searchKey,
  type
}) {
  const res = await request({
    url: "/web/device/page",
    method: "post",
    data: {
      pageNo,
      pageSize,
      status: status == "" ? null : status,
      searchKey,
      type: type == "" ? null : type
    }
  });
  return res.data;
}

/**
 * @description 添加新设备
 * @param brand 品牌
 * @param deviceId 设备标识
 * @param ip 设备IP地址
 * @param model 设备型号
 * @param name 设备名称
 * @param serialNumber 序列号
 * @param type 设备类型
 * @param version 版本号
 */
export async function addDevice({
  brand = "",
  deviceId = "",
  ip = "",
  model = "",
  name = "",
  serialNumber = "",
  type = "",
  version = ""
}) {
  const res = await request({
    url: "/web/device/add",
    method: "post",
    data: {
      brand,
      deviceId,
      ip,
      model,
      name,
      serialNumber,
      type,
      version
    }
  });
  return res.data;
}

/**
 * @description 添加新设备
 * @param brand 品牌
 * @param deviceId 设备标识
 * @param ip 设备IP地址
 * @param model 设备型号
 * @param name 设备名称
 * @param serialNumber 序列号
 * @param type 设备类型
 * @param version 版本号
 * @param id   设备id号
 */
export async function editDevice({
  brand = "",
  deviceId = "",
  ip = "",
  model = "",
  name = "",
  serialNumber = "",
  type = "",
  version = "",
  id
}) {
  const res = await request({
    url: `/web/device/${id}`,
    method: "put",
    data: {
      brand,
      deviceId,
      ip,
      model,
      name,
      serialNumber,
      type,
      version,
      id
    }
  });
  return res.data;
}

/**
 * @description 删除设备
 * @param id 设备id
 */
export async function delDevice(id) {
  const res = await request({
    url: `/web/device/${id}`,
    method: "delete"
  });
  return res.data;
}
