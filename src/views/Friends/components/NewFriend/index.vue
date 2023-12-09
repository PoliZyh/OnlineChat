<template>
    <div class="oc-new-friends">
        <template v-if="applies.length > 0">
            <NewFriendCard 
            v-for="item in applies" 
            :key="item.id"
            :info="item">
            </NewFriendCard>
        </template>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { type IApplyFriendList, ApplyFriendStatus } from '../../type'
import NewFriendCard from './NewFriendCard.vue';

const applies = ref<IApplyFriendList>([
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
    {
        id: 2,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Padding,
        userId: 2
    },
    {
        id: 3,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Reject,
        userId: 3
    },
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
    {
        id: 1,
        username: 'zhangsan',
        userava: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        description: '想加你好友',
        time: '2021-06-06 12:00:00',
        status: ApplyFriendStatus.Pass,
        userId: 1
    },
]);

</script>


<style scoped lang="scss">
@include b('new-friends') {
    width: 100%;
    height: 100%;
    padding: 20px;
    @include flex;
    flex-direction: column;
    gap: 20px;
    @include overflow-scroll;
}
</style>