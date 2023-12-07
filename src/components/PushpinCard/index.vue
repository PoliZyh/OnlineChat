<template>
    <div class="oc-pushpin-card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
        <SvgIcon 
        icon="pushpin" 
        class="oc-pushpin-card__icon" 
        width="20px" height="20px"
        :color="iconColor()"></SvgIcon>
        <slot></slot>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const isEnter = ref<boolean>(false)

const iconColor = () => {
    return isEnter.value ? '#1296db' : ''
}

const handleMouseEnter = () => {
    isEnter.value = true
}

const handleMouseLeave = () => {
    isEnter.value = false
}


</script>



<style scoped lang="scss">
@include b('pushpin-card') {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    transition: 0.3s;
    box-shadow: none;
    position: relative;
    &:hover {
        box-shadow: 0 0 20px 10px rgb(211, 211, 211);
    }
    @include e('icon') {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-50%, -50%);
    }
}

</style>