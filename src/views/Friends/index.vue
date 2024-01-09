<template>
    <div class="oc-friends">
        <div class="oc-friends__left">
            <div class="oc-friends__search">
                <div class="oc-friends__search-left">
                    <SearchInput></SearchInput>
                </div>
                <div class="oc-friends__search-right">
                    <OcButton type="primary" @click="handleAddFriendsOrGroups">
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
                    @click="checkedItemChange(ListType.Friends)"
                    @contextmenu.prevent="handleContextMenuOnList">
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
        <!-- 新增分组dialog -->
        <OcDialog v-model:value="isShowFriendsDialog" title="管理分组">
            <div class="oc-friends__check">
                <div class="oc-friends__check-item"
                :class="dialogCheck ? 'oc-friends__check-item--active' : ''"
                @click="dialogCheck = true">
                    新增分组
                </div>
                <div class="oc-friends__check-item"
                :class="!dialogCheck ? 'oc-friends__check-item--active' : ''"
                @click="dialogCheck = false">
                    删除分组
                </div>
            </div>
            <div class="oc-friends__add-group" v-if="dialogCheck">
                分组名称
                <input type="text" v-model="dialogParams.groupName">
            </div>
            <div class="oc-friends__del-group" v-else>
                删除分组
                <OcSelect
                :options="list.map(item => ({ label: item.groupName, value: '' + item.id }))"
                v-model:value="dialogParams.delId"></OcSelect>
            </div>
            <template #footer >
                <div class="oc-friends__confirm">
                    <OcButton type="primary" @click="handleConfirm">确认</OcButton>
                    <OcButton @click="isShowFriendsDialog = false">取消</OcButton>
                </div>
            </template>
        </OcDialog>
        <!-- 新增好友dialog -->
        <AddDialog v-model:value="isShowAddDialog" title="添加好友/群组"></AddDialog>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import List from './components/List/index.vue'
import AddDialog from './components/AddDialog/index.vue'
import { type IUserGroup, ListType } from './type';
import { useRouter } from 'vue-router';
import { getFriendsListReq, addFriendsGroupReq, deleteFriendsGroupReq } from '@/api/friend';
import { showMessage } from '@/components/OcMessage';
import useUserStore from '@/store/modules/useUserStore';


interface IDialogParams {
    groupName: string;
    delId: string;
}

const checkedItem = ref<ListType>(0)
const checkedItemChange = (itemNum: ListType) => {
    checkedItem.value = itemNum
}
const router = useRouter()
const userStore = useUserStore()
const isShowFriendsDialog = ref<boolean>(false)
const dialogCheck = ref<boolean>(true) // 是否为新增分组 否则删除
const dialogParams = ref<IDialogParams>({
    groupName: '',
    delId: ''
})
const list = ref<IUserGroup>([])
const isShowAddDialog = ref<boolean>(false)


const getFriendsList = async () => {
    try {
        const res = await getFriendsListReq(userStore.userInfo!.id)
        if (res.code == 200) {
            list.value = res.data
            showMessage({
                type: 'success',
                message: res.msg
            })
        }
        
    } catch (err) {
        showMessage({
            type: 'error',
            message: '获取好友列表失败'
        })
    }
    
}

// 添加好友或者群组
const handleAddFriendsOrGroups = () => {
    isShowAddDialog.value = true
}



// 确认添加分组或删除分组
const handleConfirm = async () => {
    if (dialogCheck.value) {
        // 新增分组
        const res = await addFriendsGroupReq(userStore.userInfo!.id, dialogParams.value.groupName)
        showMessage({
            type: res.data ? 'success' : 'error',
            message: res.msg
        })
        if (res.data) {
            // 刷新列表
            getFriendsList()
        }
    } else {
        // 删除分组
        const res = await deleteFriendsGroupReq(userStore.userInfo!.id, parseInt(dialogParams.value.delId))
        showMessage({
            type: res.data?'success' : 'error',
            message: res.msg
        })
        if (res.data) {
            getFriendsList()
        }
    }
    isShowFriendsDialog.value = false
}


const handleRouter = (name: string) => {
    router.push({
        name: name
    })
}

const handleContextMenuOnList = () => {
    Object.assign(dialogParams.value, {
        groupName: '',
        delId: ''
    })
    isShowFriendsDialog.value = true
}

onMounted(() => {
    getFriendsList()
})

</script>


<style scoped lang="scss">
@include b('friends') {
    @include flex;
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    @include e(check) {
        width: 100%;
        @include flex;
        flex-wrap: nowrap;
        border-bottom: 1px solid #eee;
        margin-bottom: 20px;
    }
    @include e('check-item') {
        padding: 5px 10px;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover {
            border-bottom: 1px solid $oc-color-primary;
        }
        @include m('active') {
            color: $oc-color-primary;
            border-bottom: 1px solid $oc-color-primary;
        }
    }
    @include e(left) {
        height: 100%;
        width: $friends-list-width;
        @include flex;
        flex-direction: column;
    }
    @include e('add-group') {
        width: 100%;
        font-size: 0.8rem;
        input {
            padding: 5px;
            margin-left: 5px;
            outline: none;
            border: none;
            border-bottom: 1px solid $oc-border-color;
            transition: all 0.2s;
            &:focus {
                border-color: $oc-color-primary;
            }
        }
    }
    @include e('del-group') {
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 0.8rem;
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
    @include e(confirm) {
        @include flex;
        gap: 10px;
    }

}
</style>