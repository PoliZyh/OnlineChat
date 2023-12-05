<template>
    <div class="oc-main">
        <keep-alive>
            <router-view v-if="route.meta.keepAlive" #="{ Component }">
                <transition name="fade">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </keep-alive>
        <!-- 不可以被缓存的视图组件 -->
        <router-view v-if="!route.meta.keepAlive" #="{ Component }">
            <transition name="fade">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>



<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>


<style scoped lang="scss">
@include b('main') {
    width: 100%;
    height: 100%;
    background-color: $bg-grey-light;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
</style>