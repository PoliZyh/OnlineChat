<template>
    <div class="oc-add-dialog">
        <OcDialog v-bind="attrs">
            <OcInput placeholder="请输入Q号或群号" type="text" v-model:value="number" :label="''"></OcInput>
            <div class="oc-add-dialog__search-result">
                <p v-if="searchRes.length == 0">
                    <Empty description="暂无搜索结果"></Empty>
                </p>
                <div class="oc-add-dialog__search-inner" v-else>
                    <div class="oc-add-dialog__search-item" v-for="item in searchRes" :key="item.id">
                        <div class="oc-add-dialog__item-ava">
                            <img :src="item.ava" alt="">
                        </div>
                        <div class="oc-add-dialog__item-info">
                            <div>{{ item.name }} <span :style="{
                                color: item.type == 0 ? 'orange' : '#07c160'
                            }">{{ item.type == 0 ? '用户' : '群聊' }}</span></div>
                            <div>({{ item.account }})</div>
                        </div>
                        <div class="oc-add-dialog__item-details"></div>
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="oc-add-dialog__footer">
                    <OcButton type="danger">取消</OcButton>
                    <OcButton type="primary">添加</OcButton>
                </div>
            </template>
        </OcDialog>

    </div>
</template>



<script setup lang="ts">

import { useAttrs, ref } from 'vue';
import { ListType } from '../../type';
import type { ISearchResultList } from '@/api/search/type';

const attrs = useAttrs();
const number = ref<string>('');
const searchRes = ref<ISearchResultList>([
    {
        id: 1,
        account: '272798802',
        name: 'zhangsan',
        ava: 'https://i.postimg.cc/Znt1jWYF/user.jpg',
        type: 0 // 0朋友，1群聊
    },
    {
        id: 2,
        account: '272798802',
        name: '群聊123123',
        ava: 'https://i.postimg.cc/Znt1jWYF/user.jpg',
        type: 1 // 0朋友，1群聊
    }
])

// TODO search


</script>


<style scoped lang="scss">
@include b('add-dialog') {
    @include e('footer') {
        display: flex;
        gap: 15px;
    }

    @include e('search-result') {
        width: 100%;
        padding: 20px;
    }

    @include e('search-item') {
        width: 100%;
        height: 70px;
        padding: 10px 10px;
        border-bottom: 1px solid rgb(213, 213, 213);
        display: flex;
        gap: 20px;

        img {
            height: 50px;
            border-radius: 50%;
        }
    }

    @include e('search-inner') {
        width: 100%;
    }

    @include e('item-info') {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        justify-content: space-around;

        div {
            display: flex;
            flex: 1;
            align-items: center;
        }

        div:last-child {
            color: grey;
        }

        span {
            margin-left: 10px;
        }
    }
    @include e('item-details') {
        
    }
}</style>