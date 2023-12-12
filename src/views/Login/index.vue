<template>
    <div class="oc-login">
        <div class="oc-login__inner">
            <div class="oc-login__logo">
                <img src="../../assets/images/logo.png" >
            </div>
            <div class="oc-login__row">
                <OcInput label="账号" type="text" v-model:value="loginForm.account"></OcInput>
            </div>
            <div class="oc-login__row">
                <OcInput label="密码" type="password" v-model:value="loginForm.password"></OcInput>
            </div>
            <div class="oc-login__row">
                <button class="oc-login__btn">Login</button>
            </div>
            <div class="oc-login__row oc-login__links">
                <span class="oc-login__link">没有账号?</span>
                <span class="oc-login__link">文档</span>
            </div>
        </div>
        <DotBackground></DotBackground>
    </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import type { ILoginForm } from './type';

const loginForm = reactive<ILoginForm>({
    account: '',
    password: '',
})
</script>



<style scoped lang="scss">
@include b(login) {
    width: 100%;
    height: 100%;
    @include flex;
    justify-content: center;
    align-items: center;
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