import type { IUserInfo } from "@/views/Friends/type";

export interface IUserState {
    token: string | null;
    userInfo: IUserInfo | null;
}
