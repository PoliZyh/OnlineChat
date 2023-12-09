

// 用户组
// 
export interface IUserGroupListItem {
    id: number;
    username: string;
    userava: string;
    isOnline?: boolean;
    onLineNum?: number;
}
export type IUserGroupList = Array<IUserGroupListItem>
export interface IUserGroupItem {
    id: number;
    groupName: string;
    groupList?: IUserGroupList;
}
export type IUserGroup = Array<IUserGroupItem>
export enum ListType {
    Friends = 0,
    Groups = 1,
}
export interface IGroup {
    type: ListType; // 用户/群聊
    list: IUserGroup;
}

// 新朋友申请
export enum ApplyFriendStatus {
    Pass = 0,
    Reject = 1,
    Padding = 2
}
export interface IApplyFriendItem {
    id: number; // 申请项的ID
    username: string;
    userava: string;
    status: ApplyFriendStatus;
    description: string;
    userId: number;
    time: string;
}
export type IApplyFriendList = Array<IApplyFriendItem>