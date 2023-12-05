<template>
    <div class="oc-chathome">
        <!-- 列表 -->
        <div class="oc-chathome__left">
            <div class="oc-chathome__search-input">
                <SearchInput></SearchInput>
            </div>
            <div class="oc-chathome__chat-list">
                <ChatList :list="list" :activeId="activeItemId"></ChatList>
            </div>
        </div>
        <div class="oc-chathome__right">
            <ChatRoom v-if="activeItemId" :toId="activeItemId"></ChatRoom>
            <Empty description="木有数据，快去和小伙伴们聊天吧～" v-show="!activeItemId"></Empty>
        </div>
    </div>
</template>


<script setup lang="ts">
import ChatList from './components/ChatList/index.vue'
import { onUnmounted, ref } from 'vue';
import type { IChatList } from './components/ChatList/type';
import $bus from '@/utils/bus';

const list = ref<IChatList>([
    {
        id: 1, // 聊天列表项ID
        name: '正常群聊1', // 名字
        isTop: false, // 是否置顶
        ava: 'https://i.postimg.cc/Znt1jWYF/user.jpg', // 头像
        status: 2,
        unreadNum: 12,
        lastInfo: { 
            username: '张三',
            content: '你好呀',
            time: '下午12:00',
            id: 1,
            formId: 1,
            toId: 2
        }
    },
    {
        id: 2, // 聊天列表项ID
        name: '免打扰群聊2', // 名字
        isTop: true, // 是否置顶
        ava: 'https://i.postimg.cc/Znt1jWYF/user.jpg', // 头像
        status: 1,
        unreadNum: 5,
        lastInfo: { 
            username: '张三',
            content: '你好呀',
            time: '下午12:00',
            id: 1,
            formId: 1,
            toId: 2
        }
    },
    {
        id: 3, // 聊天列表项ID
        name: '屏蔽群聊1屏蔽群聊1屏蔽群聊1屏蔽群聊1', // 名字
        isTop: false, // 是否置顶
        ava: 'https://i.postimg.cc/Znt1jWYF/user.jpg', // 头像
        status: 0,
        unreadNum: 2,
        lastInfo: { 
            username: '张三',
            content: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀',
            time: '下午12:00',
            id: 1,
            formId: 1,
            toId: 2
        }
    },
    {
        id: 4, // 聊天列表项ID
        name: '特别关注群聊4', // 名字
        isTop: false, // 是否置顶
        ava: 'https://i.postimg.cc/Znt1jWYF/user.jpg', // 头像
        status: 3,
        unreadNum: 1000,
        lastInfo: { 
            username: '张三',
            content: '你好呀',
            time: '下午12:00',
            id: 1,
            formId: 1,
            toId: 2
        }
    }
])

const activeItemId = ref<number | null>(null)

$bus.on('changeActiveItemId', (newId: any) => {
    activeItemId.value = newId as number
})

onUnmounted(() => {
    $bus.off('*')
})

</script>



<style scoped lang="scss">
@include b(chathome) {
    width: 100%;
    height: 100%;
    @include flex;

    @include e(left) {
        width: $chat-list-width;
        height: 100%;
        background-color: $bg-grey-lighter;
        @include flex;
        flex-direction: column;
    }

    @include e(right) {
        width: calc(100% - $chat-list-width);
        height: 100%;
    }

    @include e('search-input') {
        width: 100%;
        padding: 10px 20px;
        @include flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    @include e('chat-list') {
        width: 100%;
        flex: 1;
    }
}</style>