<template>
    <div class="oc-chat-from">
        <!-- 来自于 -->
        <div class="oc-chat-from__left">
            <img :src="info.userava" alt="" class="oc-chat-from__ava">
        </div>
        <div class="oc-chat-from__right">
            <div class="oc-chat-from__username">
                {{ info.username }}
            </div>
            <div class="oc-chat-from__msg">
                <!-- 文字消息 -->
                <template v-if="info.content.type == MessageType.Text">
                    {{ info.content.inner }}
                </template>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { MessageType, type IChatInfoItem } from '../../type';


const props = defineProps<{
    info: IChatInfoItem
}>()
</script>


<style scoped lang="scss">
@include b('chat-from') {
    width: 100%;
    @include flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px 5px;

    @include e(ava) {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }

    @include e(msg) {
        padding: 7px 13px;
        @include flex;
        align-items: center;
        background-color: white;
        border-radius: 8px;
        font-size: 0.9rem;
        line-height: 140%;
        letter-spacing: 0.03rem;
    }

    @include e(right) {
        flex: 1;
        @include flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    @include e(left) {}

    @include e(username) {
        width: 100%;
        margin-bottom: 5px;
        padding-top: 5px;
        font-size: 0.8rem;
        color: grey;
    }
}
</style>