<template>
    <div class="oc-friends">
        <div class="oc-friends__left">
            <div class="oc-friends__search">
                <div class="oc-friends__search-left">
                    <SearchInput></SearchInput>
                </div>
                <div class="oc-friends__search-right">
                    <OcButton type="primary">
                        添加
                    </OcButton>
                </div>
            </div>
            <div class="oc-friends__notices">
                <div class="oc-friends__notices-item" @click="handleRouter('NewFriend')">
                    <p>新朋友</p>
                    <SvgIcon icon="right"></SvgIcon>
                </div>
                <div class="oc-friends__notices-item" @click="handleRouter('NewGroup')">
                    <p>群通知</p>
                    <SvgIcon icon="right"></SvgIcon>
                </div>
            </div>
            <div class="oc-friends__list">
                <div class="oc-friends__list-title">
                    <div class="oc-friends__list-title-item"
                    :class="checkedItem === ListType.Friends ? 'oc-friends__list-title-item--active' : ''"
                    @click="checkedItemChange(ListType.Friends)">
                        好友
                    </div>
                    <div class="oc-friends__list-title-item"
                    :class="checkedItem === ListType.Groups ? 'oc-friends__list-title-item--active' : ''"
                    @click="checkedItemChange(ListType.Groups)">
                        群组
                    </div>
                </div>
                <div class="oc-friends__lists">
                    <List :list="list"></List>
                </div>
                
            </div>
        </div>
        <div class="oc-friends__right">
            <router-view></router-view>
        </div>
        <OcDialog></OcDialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import List from './components/List/index.vue'
import { type IUserGroup, ListType } from './type';
import { useRouter } from 'vue-router';


const checkedItem = ref<ListType>(0)
const checkedItemChange = (itemNum: ListType) => {
    checkedItem.value = itemNum
}
const router = useRouter()

const list = ref<IUserGroup>([
    {
        id: 1,
        groupName: '他们',
        groupList: [
            {
                id: 1,
                username: '小明',
                userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                isOnline: true
            },
            {
                id: 2,
                username: '小红',
                userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                isOnline: false
            }
        ]
    }
])


const handleRouter = (name: string) => {
    router.push({
        name: name
    })
}

</script>


<style scoped lang="scss">
@include b('friends') {
    @include flex;
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    @include e(left) {
        height: 100%;
        width: $friends-list-width;
        @include flex;
        flex-direction: column;
    }
    @include e(search) {
        padding: 10px 10px;
        @include flex;
        flex-wrap: nowrap;
        width: 100%;
        background-color: white;
        align-items: center;
        justify-content: space-between;
    }
    @include e('search-left') {
        width: 70%;
    }
    @include e ('search-right') {
        width: 25%;
    }
    @include e(right) {
        height: 100%;
        flex: 1;
    }
    @include e(list) {
        flex: 1;
        background-color: $bg-grey-lighter;
    }

    @include e('notices-item') {
        padding: 12px 14px;
        width: 100%;
        @include flex;
        justify-content: space-between;
        font-size: 0.9rem;
        background-color: white;
        border-bottom: 1px solid rgb(240, 240, 240);
        cursor: pointer;
    }
    @include e('list') {
        width: 100%;
        height: 100%;
        @include flex;
        flex-direction: column;
    }
    @include e('list-title') {
        width: 100%;
        @include flex;
    }
    @include e('list-title-item') {
        flex: 1;
        @include flex;
        justify-content: center;
        align-items: center;
        padding: 8px 10px;
        background-color: white;
        transition: 0.3s ease-in-out;
        font-size: 0.8rem;
        cursor: pointer;
        @include m('active') {
            background-color: $oc-color-primary-light-9;
            color: $oc-color-primary;
            flex: 2;
        }
    }
    @include e('lists') {
        width: 100%;
        flex: 1;
    }

}
</style>