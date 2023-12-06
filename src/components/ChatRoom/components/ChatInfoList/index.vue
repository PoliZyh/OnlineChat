<template>
    <div class="oc-chat-info-list">
        <div class="oc-chat-info-list__item" v-for="item in lists" ref="listsRef">
            <div class="oc-chat-info-list__time">
                <p>{{ item.time }}</p>
            </div>
            <template v-for="info in item.lists">
                <ChatFrom v-if="userId !== info.fromId" :info="info"></ChatFrom>
                <ChatTo v-if="userId === info.fromId" :info="info"></ChatTo>
            </template>
        </div>
    </div>
</template>


<script setup lang="ts">
import ChatFrom from './ChatFrom.vue'
import ChatTo from './ChatTo.vue'
import type { IChatInfoList } from '../../type'
import { computed, onMounted, ref } from 'vue';
import { groupChatListByTime } from '@/utils/group';

interface Props {
    chatInfos: IChatInfoList
}

const props = withDefaults(
    defineProps<Props>(),
    {
        chatInfos: () => []
    }
)

const userId = 1; // TODO: axios

const lists = computed(() => {
    return groupChatListByTime(props.chatInfos)
})

const listsRef = ref<HTMLDivElement[]>()

onMounted(() => {
    const lastEl = (listsRef.value && listsRef.value.length > 0)&& listsRef.value[listsRef.value.length - 1]
    lastEl && lastEl?.scrollIntoView()
})

</script>


<style scoped lang="scss">
@include b('chat-info-list') {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 10px 10px 0px;
    @include e('item') {
        width: 100%;
        padding-bottom: 40px;
    }
    @include e('time') {
        @include flex;
        justify-content: center;
        align-items: center;
        color: rgb(161, 161, 161);
        font-size: 0.8rem;
        margin-bottom: 5px;
    }
}
</style>