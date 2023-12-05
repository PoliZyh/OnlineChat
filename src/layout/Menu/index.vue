<template>
    <div class="oc-menu">
        <div class="oc-menu__userava">
            <img src="../../assets/images/user.jpeg" alt="">
        </div>
        <div class="oc-menu__menus">
            <div class="oc-menu__menu-item">
                <SvgIcon 
                icon="chat" width="26px" height="26px" class="icon" 
                :color="activeKey == 'ChatHome' ? '#2aa515' : ''"
                @click="handleRouter('ChatHome')"></SvgIcon>
            </div>
            <div class="oc-menu__menu-item">
                <SvgIcon 
                icon="user" width="26px" height="26px" class="icon" 
                :color="activeKey == 'Friends' ? '#1296db' : ''"
                @click="handleRouter('Friends')"></SvgIcon>
            </div>
            <div class="oc-menu__menu-item">
                <SvgIcon 
                icon="space" width="26px" height="26px" class="icon" 
                :color="activeKey == 'Space' ? '#ea9518' : ''"
                @click="handleRouter('Space')"></SvgIcon>
            </div>
            <div class="oc-menu__menu-item">
                <SvgIcon 
                icon="video" width="26px" height="26px" class="icon"
                :color="activeKey == 'World' ? '#1196db' : ''"
                @click="handleRouter('World')"></SvgIcon>
            </div>
        </div>
        <div class="oc-menu__setting">
            <SvgIcon icon="setting" width="26px" height="26px" class="icon"></SvgIcon>
        </div>
    </div>
</template>



<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const activeKey = ref<string>('ChatHome')

const handleRouter = (routeName: string) => {
    activeKey.value = routeName;
    router.push({
        name: routeName
    })
}

</script>


<style scoped lang="scss">
.icon {
    cursor: pointer;
}

@include b('menu') {
    height: 100%;
    width: 100%;
    padding: 20px 6px;
    @include flex;
    flex-direction: column;

    @include e(userava) {
        @include flex;
        width: 100%;
        height: 50px;
        justify-content: center;

        img {
            border-radius: 50%;
            height: 100%;
            cursor: pointer;
        }
    }

    @include e(menus) {
        @include flex;
        flex: 1;
        margin-top: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
    }

    @include e('menu-item') {
        padding: 10px;
    }

    @include e('setting') {
        @include flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30%;
    }
}</style>