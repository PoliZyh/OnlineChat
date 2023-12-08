<template>
    <div class="oc-inner-item" @click="handleInfos">
        <div class="oc-inner-item__ava">
            <img :src="innerItem.userava" >
        </div>
        <div class="oc-inner-item__content">
            <div class="oc-inner-item__content-top">
                {{ innerItem.username }} 
                <span>
                    {{ innerItem.onLineNum ? `(${innerItem})` : '' }}
                </span>
            </div>
            <div class="oc-inner-item__content-bottom">
                <span>
                    {{ innerItem.isOnline ? '[在线]' : ''}}
                </span>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { IUserGroupListItem } from '../../type'
import { useRouter } from 'vue-router';

interface Props {
    innerItem: IUserGroupListItem;
}
const props = defineProps<Props>()
const router = useRouter()

const handleInfos = () => {
    router.push({
        name: 'FriendsInfo',
        params: {
            id: props.innerItem.id
        }
    })
}


</script>


<style scoped lang="scss">
@include b('inner-item') {
    width: 100%;
    @include flex;
    flex-wrap: nowrap;
    padding: 8px 10px;
    cursor: pointer;
    @include e('ava') {
        width: 25%;
        img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
    }
    @include e('content') {
        @include flex;
        width: 70%;
        flex-direction: column;
        font-size: 0.8rem;
        justify-content: center;
    }
    @include e('content-top') {
        width: 100%;
        flex: 1;
        @include flex;
        align-items: center;
        font-size: 0.9rem;
    }
    @include e('content-bottom') {
        width: 100%;
        flex: 1;
        @include flex;
        align-items: center;
        color: grey;
    }
}
</style>