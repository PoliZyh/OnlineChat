<template>
    <div class="oc-login">
        <component
        :is="isLoginComponent ? Login : Register"
        @change-component="changeComponent"></component>
        <DotBackground></DotBackground>
    </div>
</template>


<script setup lang="ts">
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import { ref } from 'vue'; 


const isLoginComponent = ref<boolean>(true)

const changeComponent = () => {
    isLoginComponent.value = !isLoginComponent.value
}

</script>



<style scoped lang="scss">
@include b(login) {
    width: 100%;
    height: 100%;
    @include flex;
    justify-content: center;
    align-items: center;

    
}</style>