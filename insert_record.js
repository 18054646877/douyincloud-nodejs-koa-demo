/**
 * @param params 调用参数，HTTP 请求下为请求体
 * @param context 调用上下文
 *
 * @return 函数的返回数据，HTTP 场景下会作为 Response Body
 *
 */

const { dySDK } = require("@open-dy/node-server-sdk");

module.exports = async function (params, context) {
  try {
    const database = dySDK.database();
    const res = await database
      .collection("demo")
      .add({ ...params, serverDate: database.serverDate() });
    return {
      data: res,
      code: 0,
      message: "",
    };
  } catch (_) {
    return {
      data: [],
      code: 1,
      message: "云数据库插入失败，请确认云数据库是否开通和创建todos集合",
    };
  }
};
