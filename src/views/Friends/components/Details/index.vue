<template>
    <div class="oc-details">
        <div class="oc-details__header">
            <img :src="userInfo.userava" alt="">
            <p>{{ userInfo.username }}</p>
            <div class="oc-details__ops">
                <SvgIcon class="oc-details__icon" icon="info" width="22px" height="22px" color="#515151"></SvgIcon>
                <SvgIcon class="oc-details__icon" icon="space" width="26px" height="26px" color="#515151"></SvgIcon>
            </div>
        </div>
        <div class="oc-details__bodyer">
            <div class="oc-details__top">
                <div class="oc-details__top-row">
                    <div class="oc-details__top-row-item">
                        <SvgIcon :icon="userInfo.sex === Sex.Male ? 'male' : 'female'" width="20px" height="20px"
                            :color="userInfo.sex === Sex.Male ? '#03a2f5' : '#e89abe'"></SvgIcon>
                        <span>性别</span>
                    </div>
                    <div class="oc-details__top-row-item">
                        <span class="oc-details__age">{{ userInfo.age }}</span>
                        <span>年龄</span>
                    </div>
                    <div class="oc-details__top-row-item">
                        <SvgIcon width="22px" height="22px" :icon="userInfo.zodiac === Zodiac.Rat ? 'zodiac_rat' :
                            userInfo.zodiac === Zodiac.Ox ? 'zodiac_ox'
                                : ''" color="#0061b0"></SvgIcon>
                        <span>属相</span>
                    </div>
                </div>
                <div class="oc-details__top-row">
                    <div class="oc-details__top-row-item">
                        <SvgIcon width="24px" height="24px" color="#1296db" :icon="userInfo.constellation === Constellation.Libra ? 'constellation_libra' :
                            ''"></SvgIcon>
                        <span>星座</span>
                    </div>
                    <div class="oc-details__top-row-item">
                        <span class="oc-details__birth">
                            <span v-for="font in userInfo.birth?.split('-')">{{ font }}</span>
                        </span>
                        <span>生日</span>
                    </div>
                    <div class="oc-details__top-row-item">
                        <SvgIcon width="24px" height="24px" color="#e0620d"
                            :icon="userInfo.bloodType === BloodType.A ? 'blood_A' : ''"></SvgIcon>
                        <span>血型</span>
                    </div>
                </div>
            </div>
            <div class="oc-details__line"></div>
            <div class="oc-details__info">
                <div class="oc-details__info-item">
                    <span>Q Q</span>
                    <span>{{ userInfo.account }}</span>
                </div>
                <div class="oc-details__info-item">
                    <span>昵称</span>
                    <span>{{ userInfo.username }}</span>
                </div>
                <div class="oc-details__info-item">
                    <span>Q龄</span>
                    <span>{{ userInfo.qAge }}</span>
                </div>
                <div class="oc-details__info-item">
                    <span>手机</span>
                    <span>{{ userInfo.phoneNum ? userInfo.phoneNum : '-' }}</span>
                </div>
                <div class="oc-details__info-item" style="margin-top: 20px;">
                    <span>职业</span>
                    <span>{{ userInfo.career ? userInfo.career : '-' }}</span>
                </div>
                <div class="oc-details__info-item">
                    <span>家乡</span>
                    <span>{{ userInfo.hometown ? userInfo.hometown : '-' }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { type IUserInfo, Sex, Zodiac, Constellation, BloodType } from '../../type';

const userInfo: IUserInfo = {
    id: 1,
    username: 'zhangsan',
    userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    qAge: 1,
    account: 272798802,
    sex: Sex.Male,
    age: 13,
    zodiac: 0,
    constellation: Constellation.Libra,
    birth: '10-20',
    bloodType: BloodType.A,
    career: '学生',
    hometown: '烟台',
    phoneNum: '13888888888',
}

</script>


<style scoped lang="scss">
@include b(details) {
    width: 100%;
    height: 100%;
    background-color: white;

    @include e(header) {
        width: 100%;
        height: 40%;
        background-image: url('../../../../assets/images/bg.jpeg');
        background-repeat: no-repeat;
        @include flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;

        img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            outline: 2px solid white;
            box-shadow: 0 5px 10px 5px rgba(43, 43, 43, 0.321);
        }

        p {
            font-weight: 600;
        }
    }

    @include e(ops) {
        @include flex;
        align-items: center;
        gap: 15px;
    }

    @include e(icon) {
        cursor: pointer;
    }

    @include e(bodyer) {
        width: 100%;
        height: 60%;
        padding: 20px 20%;
        @include flex;
        flex-direction: column;
        align-items: center;
    }

    @include e(top) {
        width: 100%;
        @include flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 auto;
        align-items: center;
    }

    @include e('top-row') {
        width: 60%;
        @include flex;
        justify-content: space-between;
    }

    @include e('top-row-item') {
        @include flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 0.8rem;
    }

    @include e(age) {
        background: linear-gradient(45deg, #ff0000, #ffff00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.3rem;
    }

    @include e(birth) {
        background: linear-gradient(45deg, #ffd900, #ff5e00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        span {
            &:first-child {
                margin-right: 5px;
                font-size: 1.5rem;
            }
        }
    }

    @include e(line) {
        height: 1px;
        width: 60%;
        background-image: linear-gradient(to right, white, rgba(223, 223, 223, 0.521), white);
        margin: 20px 0;
    }

    @include e(info) {
        @include flex;
        font-size: 0.8rem;
        flex-direction: column;
        gap: 10px;
    }

    @include e('info-item') {
        @include flex;
        gap: 10px;

        span {
            &:first-child {
                color: grey;
            }
        }
    }
}
</style>