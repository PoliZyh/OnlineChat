import request from "@/utils/request"

import type {
    ILoginRequestData,
    ILoginResponseData
} from './type'

enum API {
    // 登录
    LOGIN_URL = '/users/login'
}

export const userLoginReq = (data: ILoginRequestData) => {
    return request<any, ILoginResponseData>({
        url: API.LOGIN_URL,
        method: 'post',
        data
    })
}