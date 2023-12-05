<template>
    <div class="oc-chat-room">
        <div class="oc-chat-room__title"></div>
        <div class="oc-chat-room__chats">
            <div class="oc-chat-room__inner-chats">
                
            </div>
        </div>
        <div class="oc-chat-room__editor">

        </div>
    </div>
</template>


<script setup lang="ts">
import ChatFrom from './components/ChatFrom/index.vue'
import ChatTo from './components/ChatTo/index.vue'
import RoomTitle from './components/RoomTitle/index.vue'
import Editor from './components/Editor/index.vue'

interface Props {
    toId: number; 
}

const props = withDefaults(
    defineProps<Props>(),
    {}
)

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
        background-color: red;
    }
    @include e(chats) {
        width: 100%;
        height: 100%;
        margin-bottom: $chat-room-editor-height;
        background-color: yellow;
        padding-top: $chat-room-title-height;
        padding-bottom: $chat-room-editor-height;
    }
    @include e(editor) {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: $chat-room-editor-height;
        background-color: blue;
    }
    @include e('inner-chats') {
        padding: 0px 20px 10px 20px;
    }
}
</style>