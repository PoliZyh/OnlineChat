<template>
    <div class="oc-default">
        <p>
            <span v-for="font in renderFonts" :key="font">{{ font }}</span>
        </p>
    </div>
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { wait } from '@/utils/wait'

const fonts = ['B', 'y', '--', 'E', 't', 'h', 'a', 'n', '_', 'Z', 'h', 'a', 'n', 'g']

const renderFonts = ref<string[]>([])
const fontIndex = ref<number>(0)


const pushFonts = async () => {
    if (fontIndex.value >= fonts.length) {
        await wait(3000)
        fontIndex.value = 0
        renderFonts.value = []
    }
    renderFonts.value.push(fonts[fontIndex.value])
    fontIndex.value++
    await wait(400)
    pushFonts()
}

onMounted(() => {
    pushFonts()
})






</script>


<style scoped lang="scss">
@include b(default) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @include flex;
    font-family: 'MyFace';
    font-size: 3rem;
    font-weight: 700;

    p {
        transform: translateY(-40px);
        position: relative;
        @include flex;
        justify-content: center;
        align-items: center;
        @keyframes coding {
            0% {
                height: 100%;
            }
            50% {
                height: 0%;
            }
            100% {
                height: 100%;
            }
        }
        &::after {
            content: '';
            right: -5px;
            position: absolute;
            // height: 100%;
            animation: coding 0.7s ease-in-out infinite;
            width: 3px;
            background-color: $oc-color-primary;
        }
    }

    /* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
    @font-face {
        font-family: "MyFace";
        src: url("//at.alicdn.com/wf/webfont/EcDZYUbTijTR/ATC7EBKpknPw.woff2") format("woff2"),
            url("//at.alicdn.com/wf/webfont/EcDZYUbTijTR/D5582orUcFtk.woff") format("woff");
        font-display: swap;
    }
}
</style>