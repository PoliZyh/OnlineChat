<template>
    <div class="oc-layout">
        <div class="oc-layout__left">
            <Menu></Menu>
        </div>
        <div class="oc-layout__right">
            <Main></Main>
        </div>
    </div>
</template>


<script setup lang="ts">
import Main from './Main/index.vue'
import Menu from './Menu/index.vue'


</script>


<style scoped lang="scss">
@include b(layout) {
    height: 100%;
    width: 100%;
    @include flex;
    @include e(left) {
        height: 100%;
        padding-top: $win-padding;
        width: $menu-width;
    }
    @include e(right) {
        height: 100%;
        width: calc(100% - $menu-width);
    }
}
</style>