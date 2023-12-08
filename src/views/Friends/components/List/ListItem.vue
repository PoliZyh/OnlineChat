<template>
    <div class="oc-list-item">
        <div class="oc-list-item__title" @click="handleClickTitle">
            <template v-if="isShowDetails">
                <!-- Down -->
                <SvgIcon icon="down" width="14px" height="14px" color="#707070"></SvgIcon>
            </template>
            <template v-else>
                <!-- Right -->
                <SvgIcon icon="right"  width="14px" height="14px" color="#707070"></SvgIcon>
            </template>
            <div class="oc-list-item__name">
                {{ item.groupName }}
            </div>
        </div>
        <div class="oc-list-item__inner-list" v-show="isShowDetails">
            <template v-if="item.groupList && item.groupList.length > 0">
                <InnerItem 
                v-for="inner in item.groupList" 
                :key="inner.id"
                :inner-item="inner"></InnerItem>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import InnerItem from './InnerItem.vue';
import type { IUserGroupItem } from '../../type';
import { ref } from 'vue';
interface Props {
    item: IUserGroupItem;
}

const props = defineProps<Props>()
const isShowDetails = ref<boolean>(false)

const handleClickTitle = () => {
    isShowDetails.value = !isShowDetails.value
}

</script>

<style scoped lang="scss">
@include b('list-item') {
    width: 100%;
    @include e('title') {
        @include flex;
        cursor: pointer;
        width: 100%;
        padding: 10px 15px;
        font-size: 0.8rem;
        gap: 5px;
        color: #707070;
        align-items: center;
    }
    @include e('inner-list') {

    }
    @include e('name') {

    }
}
</style>