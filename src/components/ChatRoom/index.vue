<template>
    <div class="oc-chat-room">
        <div class="oc-chat-room__title">
            <RoomTitle :title="chatRoom.title" :room-id="chatRoom.id"
                :online-num="chatRoom.onlineNum ? chatRoom.onlineNum : -1">
            </RoomTitle>
        </div>
        <div class="oc-chat-room__chats">
            <div class="oc-chat-room__inner-chats">
                <ChatInfoList :chat-infos="chatRoom.chatInfos"></ChatInfoList>
            </div>
        </div>
        <div class="oc-chat-room__editor">
            <Editor></Editor>
        </div>
    </div>
</template>


<script setup lang="ts">
import RoomTitle from './components/RoomTitle/index.vue'
import ChatInfoList from './components/ChatInfoList/index.vue'
import Editor from './components/Editor/index.vue'
import { MessageType, type IChatRoom } from './type'
import { ref } from 'vue'

interface Props {
    toId: number;
}

const props = withDefaults(
    defineProps<Props>(),
    {}
)


const chatRoom = ref<IChatRoom>({
    title: '群聊12',
    id: 1,
    onlineNum: 12,
    chatInfos: [
        {
            id: 1,
            fromId: 1,
            toId: 2,
            username: '张三',
            content: {
                type: MessageType.Text,
                inner: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
            },
            time: '2021-06-01 12:00:00',
            userava: 'https://i.postimg.cc/Znt1jWYF/user.jpg'
        },
        {
            id: 2,
            fromId: 2,
            toId: 1,
            username: '张三',
            content: {
                type: MessageType.Text,
                inner: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
            },
            time: '2021-06-01 12:00:00',
            userava: 'https://i.postimg.cc/Znt1jWYF/user.jpg'
        },
        {
            id: 2,
            fromId: 2,
            toId: 1,
            username: '张三',
            content: {
                type: MessageType.Text,
                inner: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
            },
            time: '2021-06-01 12:00:02',
            userava: 'https://i.postimg.cc/Znt1jWYF/user.jpg'
        },
        {
            id: 2,
            fromId: 2,
            toId: 1,
            username: '张三',
            content: {
                type: MessageType.Text,
                inner: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
            },
            time: '2021-06-01 12:00:00',
            userava: 'https://i.postimg.cc/Znt1jWYF/user.jpg'
        },
        {
            id: 2,
            fromId: 2,
            toId: 1,
            username: '张三',
            content: {
                type: MessageType.Text,
                inner: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
            },
            time: '2021-06-01 12:00:00',
            userava: 'https://i.postimg.cc/Znt1jWYF/user.jpg'
        },
        {
            id: 2,
            fromId: 2,
            toId: 1,
            username: '张三',
            content: {
                type: MessageType.Text,
                inner: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
            },
            time: '2021-06-01 12:00:00',
            userava: 'https://i.postimg.cc/Znt1jWYF/user.jpg'
        }
    ]
})


</script>


<style scoped lang="scss">
@include b('chat-room') {
    width: 100%;
    height: 100%;
    position: relative;

    @include e('title') {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: $chat-room-title-height;
    }

    @include e(chats) {
        width: 100%;
        height: 100%;
        margin-bottom: $chat-room-editor-height;
        padding-top: $chat-room-title-height;
        padding-bottom: $chat-room-editor-height;
    }

    @include e(editor) {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: $chat-room-editor-height;
    }

    @include e('inner-chats') {
        width: 100%;
        height: 100%;
        padding: 0px 20px 1px 20px;
    }
}
</style>