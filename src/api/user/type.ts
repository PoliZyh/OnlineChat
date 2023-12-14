import type { IResponseData } from "../type";
import type { ILoginForm, IRegisterForm } from "@/views/Login/type";
import type { IUserInfo } from "@/views/Friends/type";

// 登录
export type ILoginRequestData = ILoginForm
export interface ILoginResponseData extends IResponseData {
    data: {
        token: string;
    }
}

// 用户信息
export interface IUserInfoResponseData extends IResponseData {
    data: IUserInfo;
}

// 注册
export type IRegisterRequestData = IRegisterForm
export interface IRegisterResponseData extends IResponseData {
    data: {
        account: string;
    }
}

// 用户退出
export interface IUserLogoutResponseData extends IResponseData {
    data: ''
}