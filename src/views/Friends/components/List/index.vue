<template>
    <div class="oc-list">
        <template v-if="list.length > 0">
            <ListItem 
            v-for="item in list"
            :key="item.id"
            :item="item"
            ></ListItem>
        </template>
    </div>
</template>


<script setup lang="ts">
import ListItem from './ListItem.vue';
import type { IUserGroup } from '../../type';

interface Props {
    list: IUserGroup;
}

const props = withDefaults(
    defineProps<Props>(),
    {
        list: () => [] as IUserGroup,
    }
)


</script>



<style scoped lang="scss">
@include b('list') {
    height: 100%;
    width: 100%;
}
</style>