<template>
    <div class="oc-list-item" 
    @click="handleClickChatItem(info.id)"
    @mouseenter="handleMouseEnterChatItem"
    @mouseleave="handleMouseLeaveChatItem"
    :class="isActive ? 'oc-list-item--active' : ''">
        <div class="oc-list-item__left">
            <img :src="info.ava" alt="">
        </div>
        <div class="oc-list-item__right">
            <div class="oc-list-item__top">
                <div class="oc-list-item__name">
                    {{ info.name }}
                </div>
                <div class="oc-list-item__time">
                    {{ info.lastInfo.time }}
                </div>
            </div>
            <div class="oc-list-item__bottom">
                <div class="oc-list-item__info">
                    {{ info.lastInfo.username }}: {{ info.lastInfo.content.inner }}
                </div>
                <div class="oc-list-item__status" :class="getStatusClass()">
                    <!-- 正常模式/免打扰模式/特别关心 -->
                    <template 
                    v-if="info.status === MessageStatus.Normal || info.status === MessageStatus.NotDisturb || info.status === MessageStatus.Special">
                        {{ info.unreadNum > 99 ? '99+' : info.unreadNum }}
                    </template>
                    <!-- 屏蔽 -->
                    <template v-else>
                        <SvgIcon icon="shield"></SvgIcon>
                    </template>
                </div>
            </div>
        </div>
        <!-- 置顶logo -->
        <div class="oc-list-item__has-toped" v-show="info.isTop"></div>
        <!-- 删除该最近显示 -->
        <div class="oc-list-item__del" 
        v-show="isShowDel"
        @click="handleDeleteItem"
        @mouseenter="handleEnterDeleteIcon"
        @mouseleave="handleLeaveDeleteIcon">
            <SvgIcon icon="delete"
            :color="isEnterDelete ? '#f8290f' : '#8a8a8a'"
            width="12px"
            height="12px"></SvgIcon>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import type { IChatListItem } from './type';
import { MessageStatus } from './type'
import $bus from '@/utils/bus';

interface Props {
    info: IChatListItem;
    isActive: boolean;
}


const props = defineProps<Props>()
const isShowDel = ref<boolean>(false)
const isEnterDelete = ref<boolean>(false)

const getStatusClass = () => {
    return props.info.status === MessageStatus.Normal ? 'oc-list-item__status--normal' 
    : props.info.status === MessageStatus.NotDisturb ? 'oc-list-item__status--not-disturb'
    : props.info.status === MessageStatus.Shield ? 'oc-list-item__status--shield'
    : props.info.status === MessageStatus.Special ? 'oc-list-item__status--special'
    : ''
}

const handleClickChatItem = (activeId: number) => {
    $bus.emit('changeActiveItemId', activeId)
}

const handleMouseEnterChatItem = () => {
    isShowDel.value = true
}

const handleMouseLeaveChatItem = () => {
    isShowDel.value = false
}

const handleDeleteItem = (e: Event) => {
    e.stopPropagation()
}

const handleEnterDeleteIcon = () => {
    isEnterDelete.value = true
}

const handleLeaveDeleteIcon = () => {
    isEnterDelete.value = false
}

onUnmounted(() => {
    $bus.off('*')
})

</script>


<style scoped lang="scss">
@include b('list-item') {
    @include flex;
    flex-wrap: nowrap;
    padding: 10px 0px;
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    @include m('active') {
        background-color: $bg-grey-light;
    }
    @include e('left') {
        flex: 1;
        padding: 10px;
        padding-left: 20px;
        padding-right: 5px;
        img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
    }
    @include e('right') {
        max-width: 70%;
        flex: 3;
        padding: 10px;
        padding-left: 0px;
        gap: 5px;
        @include flex;
        flex-direction: column;
        font-size: 0.8rem;
    }
    @include e('top') {
        width: 100%;
        flex: 1;
        @include flex;
        align-items: center;
        justify-content: space-between;
    }
    @include e('bottom') {
        flex: 1;
        @include flex;
        align-items: center;
    }
    @include e(name) {
        font-size: 0.9rem;
        flex: 1;
        @include text-eps;
    }
    @include e(time) {
        font-size: 0.6rem;
        color: grey;
    }
    @include e(info) {
        color: grey;
        font-size: 0.7rem;
        flex: 1;
        @include text-eps;
    }
    @include e(status) {
        font-weight: 800;
        border-radius: 10px;
        @include flex;
        justify-content: center;
        align-items: center;
        padding: 3px 7px;
        font-size: 0.7rem;
        @include m(normal) {
            background-color: red;
            color: white;
        }
        @include m(special) {
            background-color: orange;
            color: white;
        }
        @include m(not-disturb) {
            background-color: rgb(180, 180, 180);
            color: white;
        }
    }
    @include e('has-toped') {
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        border-left: 15px solid skyblue;
        border-bottom: 10px solid transparent;
        border-right: 10px solid transparent;
    }
    @include e(del) {
        position: absolute;
        left: 4px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>