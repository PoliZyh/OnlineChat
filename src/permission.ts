import router from "./router";
import useUserStore from "./store/modules/useUserStore";
import pinia from "./store";
import { showMessage } from "./components/OcMessage";

const userStore = useUserStore(pinia)

router.beforeEach(async (to, from, next) => {
    const token = userStore.token
    const username = userStore.userInfo?.username

    if (token) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            if (username) {
                next()
            } else {
                try {
                    await userStore.getUserInfo()
                    next()
                } catch (error) {
                    // token过期或者手动修改了token
                    // 退出登录
                    await userStore.userLogout()
                    showMessage({
                        type: 'error',
                        message: '登录信息已过期，请重新登录'
                    })
                    next({ path: '/login' })
                }
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})