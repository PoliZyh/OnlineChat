import type { IFriendsListResponseData, IFriendsAddGroupReqData, IFriendsDeleteGroupReqData } from "./type";
import request from "@/utils/request";


enum API {
    // 朋友列表接口地址
    FRIENDS_LIST_URL = '/friends/list',
    // 添加朋友分组接口地址
    FRIENDS_ADD_GROUP_URL = '/friends/list',
    // 删除朋友分组接口地址
    FRIENDS_DELETE_GROUP_URL = '/friends/list',
}


// 获取朋友列表
export const getFriendsListReq = (id: number) => {
    return request<any, IFriendsListResponseData>({
        url: API.FRIENDS_LIST_URL + `/${id}`,
        method: 'GET'
    })
}

// 添加朋友分组
export const addFriendsGroupReq = (id: number, groupName: string) => {
    return request<any, IFriendsAddGroupReqData>({
        url: API.FRIENDS_ADD_GROUP_URL + `/${id}`,
        method: 'POST',
        data: {
            groupName
        }
    })
}

// 删除朋友分组
export const deleteFriendsGroupReq = (id: number, groupId: number) => {
    return request<any, IFriendsDeleteGroupReqData>({
        url: API.FRIENDS_DELETE_GROUP_URL + `/${id}/${groupId}`,
        method: 'DELETE',
    })
}