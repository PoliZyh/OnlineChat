import { defineStore } from "pinia";
import type { IUserState } from "./types/type";


const useUserStore = defineStore('user', {
    state: (): IUserState => ({
        token: null
    })
})



export default useUserStore