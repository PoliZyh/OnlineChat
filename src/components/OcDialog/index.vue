<template>
    <Teleport to="body">
        <div class="oc-dialog" v-show="props.value">
            <div class="oc-dialog__inner-dialog">
                <div class="oc-dialog__title">
                    <p v-if="props.title">{{ props.title }}</p>
                    
                </div>
                <div class="oc-dialog__content">
                    
                    <slot></slot>
                </div>
                <div class="oc-dialog__footer">
                    
                </div>
            </div>
        </div>
    </Teleport>
</template>


<script setup lang="ts">


interface Props {
    title?: string;
    value?: boolean;
}

const props = withDefaults(
    defineProps<Props>(),
    {
        title: '',
        value: false,
    }
);
</script>



<style scoped lang="scss">
@include b('dialog') {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    @include e('inner-dialog') {
        background-color: white;
        width: 45%;
        padding: 20px 10px;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @include e('title') {
        padding: 0px 0px 10px 0px;
        font-size: 1.3rem;
        font-weight: 400;
    }
    @include e('content') {
        padding: 20px 0px;
    }
    @include e('footer') {
        padding: 10px 0px 0px 0px;
    }
}
</style>