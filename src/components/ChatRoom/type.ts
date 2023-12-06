
// 聊天内容
// 消息类型
export enum MessageType {
    Mixin = 0,
    Text = 1,
    Image = 2,
    Audio = 3,
    Video = 4,
    File = 5,
    Location = 6,
}
// 文本消息
export interface ITextMessage {
    type: MessageType.Text;
    inner: string;
} 
// 图片消息
export interface IImageMessage {
    type: MessageType.Image;
    inner: string; // 图片url
}
export interface IChatInfoItem {
    id: number;
    content: ITextMessage | IImageMessage;
    time: string;
    fromId: number;
    toId: number;
    username: string;
    userava: string;
}
export type IChatInfoList = Array<IChatInfoItem>

export interface IChatRoom {
    id: number;
    title: string;
    onlineNum?: number;
    chatInfos: IChatInfoList; 
}