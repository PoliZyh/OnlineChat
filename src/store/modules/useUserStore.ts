import { defineStore } from "pinia";
import type { IUserState } from "./types/type";
import { userInfoReq, userLogoutReq } from "@/api/user";
import { showMessage } from "@/components/OcMessage";

const useUserStore = defineStore('user', {
    state: (): IUserState => ({
        token: sessionStorage.getItem('token') || '',
        userInfo: null
    }),

    actions: {
        setToken(token: string) {
            sessionStorage.setItem('token', token);
            this.token = token;
        },

        async getUserInfo() {
            try {
                const res = await userInfoReq();
                if (res.code === 200) {
                    this.userInfo = res.data;
                } else {
                    showMessage({
                        type: 'error',
                        message: res.msg
                    })
                }
                
            } catch (err) {
                showMessage({
                    type: 'error',
                    message: '获取用户信息失败'
                })
            }
        },


        async userLogout() {
            const res = await userLogoutReq()
            if (res.code === 200) {
                this.userInfo = null
                this.token = ''
                sessionStorage.removeItem('token')
            } else {
                return Promise.reject(new Error(res.msg))
            }
        }
    }
})



export default useUserStore