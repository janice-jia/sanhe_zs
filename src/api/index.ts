// api/user.ts
import Axios from '../utils/axios'

// 登录
const GetPagerTable = (data: {[key: string]: any}) => {
  return Axios.get('/Article/GetPagerTable', data)
}


export default {
  GetPagerTable,
}