<template>
    <Teleport to="body">
        <div class="oc-message-box" :class="classes()" v-if="isShow">
            {{ message }}
        </div>
    </Teleport>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
    message: string;
    type: 'success' | 'error';
}

const isShow = ref(false)


const props = withDefaults(
    defineProps<Props>(),
    {
        type: 'success',
        message: 'title'
    }
)


const classes = () => {
    const classes: string[] = []
    classes.push('oc-message-box--' + props.type)
    return classes
}

onMounted(() => {
    isShow.value = true
})




</script>


<style scoped lang="scss">
@include b('message-box') {
    position: fixed;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    padding: 10px 20px;
    border-radius: 4px;
    z-index: 99999;
    transition: all 2.3s;

    @include m(success) {
        color: $oc-color-success;
        background-color: $oc-color-success-light-8;
    }
    @include m(error) {
        color: $oc-color-danger;
        background-color: $oc-color-danger-light-8;
    }

    animation: move 0.38s linear forwards;

    @keyframes move {
        0% {
            top: -8%;
            opacity: 0.16;
        }

        50% {
            opacity: 0.68;
        }

        100% {
            top: 5%;
            opacity: 1;
        }
    }
}</style>