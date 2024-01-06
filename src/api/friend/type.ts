import type { IResponseData } from "../type";
import type { IUserGroup } from '@/views/Friends/type'

// 用户列表接口
export interface IFriendsListResponseData extends IResponseData {
    data: IUserGroup;
}


// 新增朋友分组接口
export interface IFriendsAddGroupReqData extends IResponseData {
    data: boolean;
}

// 删除朋友分组接口
export interface IFriendsDeleteGroupReqData extends IResponseData {
    data: boolean;
}