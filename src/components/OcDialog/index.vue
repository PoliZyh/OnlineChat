<template>
    <Teleport to="body">
        <div class="oc-dialog" v-if="props.value" @click="handleClickBody">
            <div class="oc-dialog__inner-dialog" @click="handleClickDialog">
                <div class="oc-dialog__title">
                    <p v-if="props.title">{{ props.title }}</p>
                    
                </div>
                <div class="oc-dialog__content">
                    
                    <slot></slot>
                </div>
                <div class="oc-dialog__footer">
                    <slot name="footer"></slot>
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

const emits = defineEmits<{
    (e: 'update:value', value: boolean): void
}>()

const props = withDefaults(
    defineProps<Props>(),
    {
        title: '',
        value: false,
    }
);

const handleClickBody = (e: Event) => {
    e.stopPropagation()
    emits('update:value', false)
}

const handleClickDialog = (e: Event) => {
    e.stopPropagation()
}
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
        width: 40%;
        padding: 20px 10px;
        position: absolute;
        margin-top: 15vh;
        margin: 15vh auto;
        position: relative;
    }
    @include e('title') {
        padding: 0px 0px 10px 0px;
        font-size: 1rem;
        font-weight: 400;
    }
    @include e('content') {
        padding: 20px 0px;
    }
    @include e('footer') {
        padding: 10px 10px 0px 0px;
        @include flex;
        justify-content: flex-end;
    }
}
</style>