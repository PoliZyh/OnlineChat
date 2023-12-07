<template>
    <div class="oc-default">
        <div class="oc-default__top">
            <div class="oc-default__top-left">
                <PushpinCard>天气</PushpinCard>
            </div>
            <div class="oc-default__top-mid">
                <PushpinCard>代办</PushpinCard>
            </div>
            <div class="oc-default__top-right">
                <PushpinCard>朋友圈消息</PushpinCard>
            </div>
        </div>
        <div class="oc-default__mid">
            <PushpinCard>音乐</PushpinCard>
        </div>
        <div class="oc-default__bottom">
            <div class="oc-default__bottom-left">
                <PushpinCard>日历</PushpinCard>
            </div>
            <div class="oc-default__bottom-right">
                <PushpinCard>博客</PushpinCard>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped lang="scss">
@include b(default) {
    width: 100%;
    height: 100%;
    padding: 20px;
    @include flex;
    flex-direction: column;
    gap: 20px;
    @include e(top) {
        flex: 1;
        @include flex;
        flex-wrap: nowrap;
        gap: 15px;
    }

    @include e('top-left') {
        flex: 1;
    }
    @include e('top-mid') {
        flex: 1.5;
    }
    @include e('top-right'){
        flex: 1;
    }

    @include e(mid) {
        flex: 1;
        @include flex;
        flex-wrap: nowrap;
    }

    @include e(bottom) {
        flex: 1;
        @include flex;
        flex-wrap: nowrap;
        gap: 15px;
    }
    @include e('bottom-left') {
        flex: 1;
    }
    @include e('bottom-right') {
        flex: 1;
    }
}</style>