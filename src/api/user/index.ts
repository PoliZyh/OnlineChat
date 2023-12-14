import request from "@/utils/request"

import type {
    ILoginRequestData,
    ILoginResponseData,
    IRegisterRequestData,
    IRegisterResponseData,
    IUserInfoResponseData,
    IUserLogoutResponseData
} from './type'

enum API {
    // 登录接口地址
    LOGIN_URL = '/users/login',
    // 注册接口地址
    REGISTER_URL = '/users/register',
    // 用户信息接口地址
    USERINFO_URL = '/users/info',
    // 用户退出接口地址
    LOGOUT_URL = '/users/logout'
}

// 1.1用户登录
export const userLoginReq = (data: ILoginRequestData) => {
    return request<any, ILoginResponseData>({
        url: API.LOGIN_URL,
        method: 'post',
        data
    })
}

// 1.2用户信息
export const userInfoReq = () => {
    return request<any, IUserInfoResponseData>({
        url: API.USERINFO_URL,
        method: 'get'
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


// 1.5 用户退出登录
export const userLogoutReq = () => {
    return request<any, IUserLogoutResponseData>({
        url: API.LOGOUT_URL,
        method: 'post'
    })
}