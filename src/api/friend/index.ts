import type { IFriendsListResponseData } from "./type";
import request from "@/utils/request";


enum API {
    // 朋友列表接口地址
    FRIENDS_LIST_URL = '/friends/list'
}


// 获取朋友列表
export const getFriendsListReq = (id: number) => {
    return request<any, IFriendsListResponseData>({
        url: API.FRIENDS_LIST_URL + `/${id}`,
        method: 'GET'
    })
}
