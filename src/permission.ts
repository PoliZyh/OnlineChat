import router from "./router";
import useUserStore from "./store/modules/useUserStore";
import pinia from "./store";

const userStore = useUserStore(pinia)

router.beforeEach(async (to, from, next) => {
    const token = userStore.token

    if (token) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})