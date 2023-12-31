<template>
    <div class="oc-register">
        <h4>Register</h4>
        <div class="oc-register__row">
            <OcInput label="用户名" type="text" v-model:value="registerFrom.username"></OcInput>
        </div>
        <div class="oc-register__row">
            <OcInput label="密码" type="password" v-model:value="registerFrom.password"></OcInput>
        </div>
        <div class="oc-register__row">
            <OcInput label="确认密码" type="password" v-model:value="registerFrom.checkPassword"></OcInput>
        </div>
        <div class="oc-register__row">
            <OcInput label="验证码" v-model:value="registerFrom.code"></OcInput>
            <div class="oc-register__code">
                <img :src="imgUrl" alt="captcha" @click="handleChangeCaptcha">
            </div>
        </div>
        <div class="oc-register__row">
            <span class="oc-register__link" @click="handleToLogin">已有账号.</span>
            <span class="oc-register__link" style="margin-left: 20px;" v-if="account" @click="handleCopy">
                您的账号为: {{ account }}
            </span>
        </div>
        <button class="oc-register__submit" @click="handleRegister">
            注册
        </button>
    </div>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { IRegisterForm } from '../type'
import { userRegisterReq } from '@/api/user/index'
import { showMessage } from '@/components/OcMessage';
import { async } from 'fast-glob';

const imgUrl = ref<string>(import.meta.env.VITE_APP_BASE_API + '/users/captcha')
const registerFrom = reactive<IRegisterForm>({
    username: '',
    password: '',
    checkPassword: '',
    code: ''
})
const account = ref('')

const emits = defineEmits<{
    (e: 'changeComponent'): void
}>()

const handleToLogin = () => {
    emits('changeComponent')
}

const handleChangeCaptcha = () => {
    imgUrl.value = import.meta.env.VITE_APP_BASE_API + '/users/captcha?t=' + new Date().getTime()
}

const handleRegister = async () => {
    try {
        const res = await userRegisterReq(registerFrom)
        if (res.code === 200) {
            showMessage({
                type: 'success',
                message: '注册成功'
            })
            account.value = res.data.account
        } else {
            showMessage({
                type: 'error',
                message: res.msg
            })
        }
    } catch (err) {
        showMessage({
            type: 'error',
            message: '注册失败'
        })
    }
}

const handleCopy = async () => {
    await navigator.clipboard.writeText(account.value)
    showMessage({
        type: 'success',
        message: '账号已复制到黏贴板'
    })
}
</script>


<style scoped lang="scss">
@include b('register') {
    width: 400px;
    height: 400px;
    background-color: white;
    @include flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px 5px rgba(145, 145, 145, 0.4);
    border-radius: 10px;
    padding: 20px;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        right: -10px;
        bottom: 18px;
        width: 0;
        height: 0;
        border-left: 0px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #1a044e;
    }

    h4 {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 4px;
        line-height: 28px;
        margin-bottom: 20px;
    }

    @include e(row) {
        width: 90%;
        margin-bottom: 20px;
        position: relative;
    }

    @include e(code) {
        position: absolute;
        right: 5px;
        top: 5%;
        height: 90%;
        width: 100px;

        img {
            height: 100%;
            width: 100%;
            cursor: pointer;
        }
    }

    @include e(submit) {
        position: absolute;
        border-radius: 30px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        background-color: #0f0092;
        color: #FFF;
        padding: 12px 45px;
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 5px;
        right: -10px;
        bottom: -20px;
        cursor: pointer;
        transition: all .25s ease;
        box-shadow: -5px 6px 20px 0px rgba(26, 26, 26, 0.4);
        border: none;

        &:hover {
            background-color: #07013d;
            box-shadow: -5px 6px 20px 0px rgba(88, 88, 88, 0.569);
        }
    }

    @include e(link) {
        font-size: 0.8rem;
        color: $oc-color-primary;
        cursor: pointer;
    }
}
</style>