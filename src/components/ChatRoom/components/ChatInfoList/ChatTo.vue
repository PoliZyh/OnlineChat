<template>
    <div class="oc-chat-to">
        <!-- 发送方为登录用户 -->
        <div class="oc-chat-to__left">
            <div class="oc-chat-to__msg">
                <!-- 文字消息 -->
                <template v-if="info.content.type == MessageType.Text">
                    {{ info.content.inner }}
                </template>
            </div>
        </div>
        <div class="oc-chat-to__right">
            <img :src="info.userava" alt="" class="oc-chat-to__ava">
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
@include b('chat-to') {
    width: 100%;
    @include flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px 5px;
    @include e(right) {

    }
    @include e(left) {
        flex: 1;
        @include flex;
        justify-content: flex-end;
    }
    @include e(ava) {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    @include e(msg) {
        padding: 7px 13px;
        @include flex;
        align-items: center;
        background-color: #bddeff;
        border-radius: 8px;
        font-size: 0.9rem;
        line-height: 140%;
        letter-spacing: 0.03rem;
    }
}
</style>