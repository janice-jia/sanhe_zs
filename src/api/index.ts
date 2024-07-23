// api/user.ts
import Axios from '../utils/axios'

// 列表
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

// 查询证书
const GetCertificate = (data: {[key: string]: any}) => {
  let paseUrl = '/Certificate/GetCertificate?';
  (data.realname) && (paseUrl += `realname=${data.realname}&`);
  (data.schoolname) && (paseUrl += `schoolname=${data.schoolname}&`);
  (data.workname) && (paseUrl += `workname=${data.workname}&`);
  (data.idcardno) && (paseUrl += `idcardno=${data.idcardno}&`);
  return Axios.get(paseUrl, data)
}


export default {
  GetPagerTable,
  GetCertificate,
}