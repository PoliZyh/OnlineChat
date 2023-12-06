
import type { IChatInfoList } from "@/components/ChatRoom/type"

export interface IGroupChatItem {
    time: string;
    lists: IChatInfoList;
}
export type IGroupChatList = IGroupChatItem[]
// 根据时间去分组
export const groupChatListByTime = (list: IChatInfoList): IGroupChatList => {
    const newList: IGroupChatList = []
    const timeDone: string[] = []
    // 根据时间分组 时间相同的一组
    list.forEach(item => {
        const time = item.time
        if (timeDone.indexOf(time) === -1) {
            timeDone.push(time)
            newList.push({
                time,
                lists: [item]
            })
        } else {
            newList[timeDone.indexOf(time)].lists.push(item)
        }
    })
    return newList
}