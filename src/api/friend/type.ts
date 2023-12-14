import type { IResponseData } from "../type";
import type { IUserGroup } from '@/views/Friends/type'

// 用户列表接口
export interface IFriendsListResponseData extends IResponseData {
    data: IUserGroup;
}
