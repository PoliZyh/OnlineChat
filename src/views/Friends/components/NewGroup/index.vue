<template>
    <div class="oc-new-group">
        <NewGroupCard
        v-for="item in groupList"
        :key="item.id"
        :info="item"></NewGroupCard>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { type IGroupNoticeList, GroupNoticeStatus } from '../../type'
import NewGroupCard from '@/views/Friends/components/NewGroup/NewGroupCard.vue'

const groupList = ref<IGroupNoticeList>([
    {
        id: 1,
        groupName: 'group1',
        status: GroupNoticeStatus.ApplyPadding,
        description: '我想申请加入你的群',
        groupId: 1,
        groupAva: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        username: 'zhangsan',
        time: '2021-06-06 12:00:00'
    },
    {
        id: 2,
        groupName: 'group1',
        status: GroupNoticeStatus.ApplyRejected,
        description: '我想申请加入你的群',
        groupId: 1,
        groupAva: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        username: 'zhangsan',
        time: '2021-06-06 12:00:00'
    },
    {
        id: 3,
        groupName: 'group1',
        status: GroupNoticeStatus.ApplyPassed,
        description: '我想申请加入你的群',
        groupId: 1,
        groupAva: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        username: 'zhangsan',
        time: '2021-06-06 12:00:00'
    },
    {
        id: 4,
        groupName: 'group1',
        status: GroupNoticeStatus.InviteMePadding,
        description: '我想申请加入你的群',
        groupId: 1,
        groupAva: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        username: 'zhangsan',
        time: '2021-06-06 12:00:00'
    },
    {
        id: 5,
        groupName: 'group1',
        status: GroupNoticeStatus.InviteMePassed,
        description: '我想申请加入你的群',
        groupId: 1,
        groupAva: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        username: 'zhangsan',
        time: '2021-06-06 12:00:00'
    },
    {
        id: 6,
        groupName: 'group1',
        status: GroupNoticeStatus.InviteMeRejected,
        description: '我想申请加入你的群',
        groupId: 1,
        groupAva: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        username: 'zhangsan',
        time: '2021-06-06 12:00:00'
    }
])

</script>


<style scoped lang="scss">
@include b('new-group') {
    width: 100%;
    height: 100%;
    padding: 20px;
    @include flex;
    flex-direction: column;
    gap: 20px;
    @include overflow-scroll;
}
</style>