<template>
    <div class="oc-login-box">
        <div class="oc-login-box__inner">
            <div class="oc-login-box__logo">
                <img src="../../../assets/images/logo.png">
            </div>
            <div class="oc-login-box__row">
                <OcInput label="账号" type="text" v-model:value="loginForm.account"></OcInput>
            </div>
            <div class="oc-login-box__row">
                <OcInput label="密码" type="password" v-model:value="loginForm.password"></OcInput>
            </div>
            <div class="oc-login-box__row">
                <button class="oc-login-box__btn" @click="handleLogin">Login</button>
            </div>
            <div class="oc-login-box__row oc-login-box__links">
                <span class="oc-login-box__link" @click="handleToRegister">没有账号?</span>
                <span class="oc-login-box__link">文档</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { ILoginForm } from '../type';
import { userLoginReq } from '@/api/user';
import useUserStore from '@/store/modules/useUserStore'
import router from '@/router';
import { showMessage } from '@/components/OcMessage';

const loginForm = reactive<ILoginForm>({
    account: '',
    password: '',
})
const userStore = useUserStore()
const emits = defineEmits<{
    (e: 'changeComponent'): void
}>()

const handleLogin = async () => {
    try {
        const res = await userLoginReq(loginForm)
        if (res.code == 200) {
            userStore.setToken(res.data.token)
            router.push('/')
            showMessage({
                type: 'success',
                message: '登录成功'
            })
        } else {
            showMessage({
                type: 'error',
                message: res.msg
            })
        }
    } catch {
        showMessage({
            type: 'error',
            message: '登录失败'
        })
    }
}

const handleToRegister = () => {
    emits('changeComponent')
}
</script>


<style scoped lang="scss">
@include b('login-box') {
    @include e(inner) {
        height: 400px;
        width: 400px;
        border: 1px solid rgb(230, 230, 230);
        box-shadow: 0 0 10px 5px rgb(219, 219, 219);
        border-radius: 10px;
        background-color: white;
    }

    @include e(logo) {
        width: 100%;
        @include flex;
        justify-content: center;
        transform: translateY(-50%);

        img {
            width: 70%;
        }
    }

    @include e(row) {
        margin-bottom: 20px;
        padding: 10px 40px;
        width: 100%;
        @include flex;
    }

    @include e(btn) {
        padding: 10px 20px;
        width: 100%;
        cursor: pointer;
        background-color: $oc-color-primary;
        border: none;
        color: white;
        border-radius: 5px;
    }

    @include e(links) {
        @include flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: $oc-color-primary;

        span {
            cursor: pointer;
        }
    }
}
</style>