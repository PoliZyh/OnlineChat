import type { IChatInfoItem } from "@/components/ChatRoom/type";

// 消息状态
export enum MessageStatus {
    Shield = 0, // 屏蔽
    NotDisturb = 1,  // 免打扰
    Normal = 2, // 正常模式
    Special = 3 // 特别关心
}
// 近期聊天列表项
export interface IChatListItem {
    id: number; // 聊天列表项ID
    name: string; // 名字
    ava: string; // 是否置顶
    isTop: boolean; // 头像
    lastInfo: IChatInfoItem; // 最后一条消息
    status: MessageStatus; // 状态
    unreadNum: number; // 未读的消息
}
// 近期聊天列表
export type IChatList = Array<IChatListItem>


