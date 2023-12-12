<template>
    <Teleport to="body">
        <div class="oc-dot-bg">
            <div class="oc-dot-bg__dot"
            v-for="i in dotNum" :key="i" :ref="setDot"></div>
        </div>
    </Teleport>
</template>


<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const dots = ref<Array<HTMLDivElement>>([])

const dotNum = computed(() => {
    return Math.floor(window.innerHeight / 10);
})

const setDot = (el: any): void => {
    dots.value.push(el as HTMLDivElement)
}

const initDots = (): void => {
    dots.value.forEach((el) => {
        const delay = Math.random() + 's'
        const color = `hsl(${Math.random()*360}, 50%, 50%)`
        el.style.setProperty('--delay', delay)
        el.style.setProperty('--bg-c', color)
    })
}

onMounted(() => {
    initDots()
})
</script>


<style scoped lang="scss">
@include b('dot-bg') {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @include e('dot') {
        --delay: 0s;
        --bg-c: white;
        background-color: var(--bg-c);
        height: 5px;
        width: 5px;
        border-radius: 50%;
        animation: dot-up 3s infinite ease-out;
        animation-delay: var(--delay);

        @keyframes dot-up {
            to {
                transform: translateY(-100vh);
            }
        }
    }
}
</style>