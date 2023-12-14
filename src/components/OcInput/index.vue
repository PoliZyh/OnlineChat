<template>
    <div class="oc-input">
        <span class="oc-input__label"
        :class="isActive ? 'oc-input__label--active' : ''">{{ label }}</span>
        <input :type="type" 
        class="oc-input__inner-input" @click="handleClick"
        :class="isActive ? 'oc-input__inner-input--active' : ''"
        @blur="handleFocus"
        @input="handleChange"
        :value="value">
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref<boolean>(false);

interface Props {
    label: string;
    value: string;
    type: 'password' | 'text';
}

const props = withDefaults(
    defineProps<Props>(),
    {
        title: '',
        value: '',
        type: 'text'
    }
)


const emits = defineEmits<{
    (e: 'update:value', value: string): void;
}>()

const handleClick = () => {
    isActive.value = true
}

const handleFocus = () => {
    if (!props.value) {
        isActive.value = false
    }
}

const handleChange = (e: Event) => {
    const val = (<HTMLInputElement>e.target).value
    emits('update:value', val)
}

</script>


<style scoped lang="scss">
@include b(input) {
    @include flex;
    gap: 20px;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    width: 100%;
    @include e('inner-input') {
        padding: 10px 20px;
        border: none;
        border-bottom: 1px solid rgb(210, 210, 210);
        width: 100%;
        transition: all 0.3s;
        border-radius: 0;
        background-color: transparent;
        z-index: 0;
        @include m(active) {
            border: 1px solid $oc-color-primary;
            border-radius: 5px;
        }
    }
    @include e('label') {
        color: black;
        position: absolute;
        left: 20px;
        transition: all 0.3s;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
        @include m(active) {
            padding: 0px 10px;
            background-color: white;
            top: 0px;
            left: 40px;
            color: $oc-color-primary;
            z-index: 1;
        }
    }
}
</style>