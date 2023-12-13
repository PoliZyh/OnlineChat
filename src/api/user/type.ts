import type { IResponseData } from "../type";
import type { ILoginForm, IRegisterForm } from "@/views/Login/type";

// 登录
export type ILoginRequestData = ILoginForm
export interface ILoginResponseData extends IResponseData {
    data: {
        token: string;
    }
}

// 注册
export type IRegisterRequestData = IRegisterForm
export interface IRegisterResponseData extends IResponseData {
    data: {
        account: string;
    }
}