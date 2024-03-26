// api/user.ts
import Axios from '../utils/axios'

// 登录
const GetPagerTable = (data: {[key: string]: any}) => {
  let paseUrl = '/Article/GetPagerTable?';
  (data.page) && (paseUrl += `page=${data.page}&`);
  (data.limit) && (paseUrl += `limit=${data.limit}&`);
  if(data.jsondata){
    paseUrl += 'jsondata='
    paseUrl += encodeURIComponent(`{"article_title":"${data.jsondata.article_title}"}`)
  }
  return Axios.get(paseUrl, data)
}


export default {
  GetPagerTable,
}