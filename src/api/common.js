import request from './index'

// 新闻列表
export function getNewsLists(params){
  return request({
    url: 'Pth_NewsHouTai_Ctro/list_News',
    method: 'get',
    params
  })
}