import request from "@/utils/request"

import type {
    ILoginRequestData,
    ILoginResponseData,
    IRegisterRequestData,
    IRegisterResponseData
} from './type'

enum API {
    // 登录接口地址
    LOGIN_URL = '/users/login',
    // 注册接口地址
    REGISTER_URL = '/users/register',
}

// 1.1用户登录
export const userLoginReq = (data: ILoginRequestData) => {
    return request<any, ILoginResponseData>({
        url: API.LOGIN_URL,
        method: 'post',
        data
    })
}

// 1.3用户注册
export const userRegisterReq = (data: IRegisterRequestData) => {
    return request<any, IRegisterResponseData>({
        url: API.REGISTER_URL,
        method: 'post',
        data
    })
}