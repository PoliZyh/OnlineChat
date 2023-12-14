

// 用户组
// 
export interface IUserGroupListItem {
    id: number; // 用户的ID
    username: string;
    userava: string;
    userId: number;
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

// 群通知
export enum GroupNoticeStatus {
    InviteMePadding = 0, // 邀请我加入
    InviteMeRejected = 1, // 邀请我加入我拒绝
    InviteMePassed = 2, // 邀请我加入我同意
    ApplyPadding = 3, // 申请加入我的群聊
    ApplyRejected = 4, // 拒绝加入我的群聊
    ApplyPassed = 5, // 同意加入我的群聊
}
export interface IGroupNoticeItem {
    id: number; // 历史ID
    groupId: number; // 群ID
    groupName: string; // 群名字
    groupAva: string; // 群头像
    status: GroupNoticeStatus;
    description: string;
    username: string;
    time: string;
}
export type IGroupNoticeList = Array<IGroupNoticeItem>

// 用户信息
export enum Sex {
    Male = 0,
    Female = 1,
}
export enum Constellation {
    Libra = 0, // 天秤座
    Aquarius = 1, // 水瓶座

}
export enum BloodType {
    A = 0,
    B = 1,
    AB = 2,
    O = 3,
}
export enum Zodiac {
    Rat = 0,
    Ox = 1,
    Tiger = 2,
    Rabbit = 3,
    Dragon = 4,
    Snake = 5,
    Horse = 6,
    Sheep = 7,
    Monkey = 8,
    Rooster = 9,
    Dog = 10,
    Pig = 11,
}
export interface IUserInfo {
    id: number;
    username: string;
    userava: string;
    qAge: number;
    account: number;
    phoneNum?: string;
    hometown?: string; // 家乡
    career?: string; // 职业
    sex?: Sex; // 性别
    birth?: string; // 生日
    constellation?: Constellation; // 星座
    age?: number; // 年龄
    bloodType?: BloodType; // 血型
    zodiac?: Zodiac; // 属性
}