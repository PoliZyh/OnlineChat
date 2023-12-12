import { defineStore } from "pinia";
import type { IUserState } from "./types/type";


const useUserStore = defineStore('user', {
    state: (): IUserState => ({
        token: sessionStorage.getItem('token') || '',
    }),

    actions: {
        setToken(token: string) {
            sessionStorage.setItem('token', token);
            this.token = token;
        }
    }
})



export default useUserStore