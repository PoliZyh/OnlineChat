<template>
    <div class="oc-chat-list">
        <template v-if="list.length > 0">
            <ListItem 
            v-for="item in list" 
            :key="item.id" 
            :info="item"
            :isActive="item.id === activeId"
            >
            </ListItem>
        </template>
        <template v-else>
            空空如也
        </template>
    </div>
</template>


<script setup lang="ts">
import ListItem from './ListItem.vue'
import type { IChatList } from './type';

interface Props {
    list: IChatList;
    activeId: number | null;
}

const props = withDefaults(
    defineProps<Props>(),
    {
        list: () => [],
        activeId: null
    }
)


</script>


<style scoped lang="scss">
@include b('chat-list') {
    width: 100%;
    height: 100%;
    overflow: scroll;
    @include flex;
    flex-direction: column;
}
</style>