<template>
    <div class="oc-new-group-card">
        <div class="oc-new-group-card__ava">
            <img :src="info.groupAva">
        </div>
        <div class="oc-new-group-card__content">
            <div class="oc-new-group-card__top">
                <template v-if="info.status == GroupNoticeStatus.ApplyPadding ||
                    info.status == GroupNoticeStatus.ApplyPassed ||
                    info.status == GroupNoticeStatus.ApplyRejected">
                    {{ info.username }}<span
                        class="oc-new-group-card__status oc-new-group-card__status--apply">申请加入</span>{{ info.groupName }}
                </template>
                <template v-else>
                    {{ info.username }}
                    <span class="oc-new-group-card__status oc-new-group-card__status--invite">邀请您加入</span>
                    {{ info.groupName }}
                </template>
                <span>{{ info.time }}</span>
            </div>
            <div class="oc-new-group-card__bottom">
                {{ info.description }}
            </div>
        </div>
        <div class="oc-new-group-card__ops">
            <template
                v-if="info.status == GroupNoticeStatus.ApplyPadding || info.status == GroupNoticeStatus.InviteMePadding">
                <OcButton type="primary">同意</OcButton>
                <OcButton type="danger">拒绝</OcButton>
            </template>
            <template
                v-if="info.status == GroupNoticeStatus.ApplyPassed || info.status == GroupNoticeStatus.InviteMePassed">
                <SvgIcon icon="pass" color="#11ac1c" width="25px" height="25px"></SvgIcon>
            </template>
            <template
                v-if="info.status == GroupNoticeStatus.ApplyRejected || info.status == GroupNoticeStatus.InviteMeRejected">
                <SvgIcon icon="reject" color="#FA5A5A" width="28px" height="28px"></SvgIcon>
            </template>
        </div>
    </div>
</template>


<script setup lang="ts">
import { type IGroupNoticeItem, GroupNoticeStatus } from '../../type';

interface Props {
    info: IGroupNoticeItem
}

const props = defineProps<Props>()

</script>


<style scoped lang="scss">
@include b('new-group-card') {
    width: 100%;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    @include flex;
    flex-wrap: nowrap;

    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }

    @include e('ava') {
        height: 100%;

        img {
            height: 50px;
            width: 50px;
            border-radius: 50px;
        }
    }

    @include e('content') {
        height: 100%;
        flex: 1;
        @include flex;
        flex-direction: column;
        padding-left: 20px;
    }

    @include e('top') {
        flex: 1;
        @include flex;
        align-items: center;
        font-size: 0.9rem;

        span {
            font-size: 0.8rem;
            color: grey;
            margin-left: 20px;
        }
    }

    @include e('bottom') {
        flex: 1;
        @include flex;
        align-items: center;
        font-size: 0.8rem;
        color: grey;
    }

    @include e('ops') {
        height: 100%;
        @include flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    @include e('status') {
        margin-left: 0px !important;

        @include m('invite') {
            color: orange !important;
        }

        @include m('apply') {
            color: $oc-color-success !important;
        }
    }
}</style>