import type { IResponseData } from "../type";
import type { ListType } from "@/views/Friends/type";

// 搜索Q号或群号
export interface ISearchResultItem {
    id: number;
    account: string;
    name: string;
    ava: string;
    type: ListType;
}
export type ISearchResultList = ISearchResultItem[]
