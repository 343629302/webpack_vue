import request from "@/tool/request.js";

/**
 * @description 获取用户信息
 */
export async function getUserInfo() {
  return await request({
    url: "/mobile/user"
  });
}


/**
 * @description 获取教师信息
 */
export async function getBaseData() {
  const res = await request({
    url: "/web/staff/department/group/basedata"
  });
  return res.data;
}