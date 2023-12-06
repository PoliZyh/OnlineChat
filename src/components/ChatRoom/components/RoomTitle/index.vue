<template>
    <div class="oc-room-title">
        <p class="oc-room-title__title">
            {{ title }}
            <span class="oc-room-title__online-nums">
                {{ onlineNum > 0 ? '在线' + `[${onlineNum}]` : '' }}
            </span>
        </p>
        <div class="oc-room-title__ops">
            <div class="oc-room-title__icon-box">
                <SvgIcon icon="voicecall" width="22px" height="22px" class="oc-room-title__icon"></SvgIcon>
            </div>
            <div class="oc-room-title__icon-box">
                <SvgIcon icon="videocall" width="22px" height="22px" class="oc-room-title__icon"></SvgIcon>
            </div>
            <div class="oc-room-title__icon-box">
                <SvgIcon icon="more" width="22px" height="22px" class="oc-room-title__icon"></SvgIcon>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">


interface Props {
    title: string;
    roomId: number;
    onlineNum: number;
}

const props = withDefaults(
    defineProps<Props>(),
    {
        title: '',
        roomId: -1,
        onlineNum: -1
    }
)

</script>


<style scoped lang="scss">
@include b('room-title') {
    width: 100%;
    height: 100%;
    padding: 5px 20px;
    @include flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(206, 206, 206, 0.596);
    @include e('title') {
        font-size: 0.9rem;
    }
    @include e('online-nums') {
        font-size: 0.5rem;
        color: rgb(0, 196, 33);
    }
    @include e('ops') {
        height: 100%;
        @include flex;
        align-items: center;
        gap: 10px;
    }
    @include e('icon-box') {
        padding: 5px;
        cursor: pointer;
    }
}
</style>