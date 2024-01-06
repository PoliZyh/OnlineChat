<template>
    <div class="oc-select">
        <div class="oc-select__inner">
            <input type="text" class="oc-select__input" readonly v-model="checkedValue" @focus="handleFocus"
                @blur="handleBlur">
            <div class="oc-select__icon">
                <SvgIcon icon="down" color="#909399" :class="iconClass"></SvgIcon>
            </div>
            <div class="oc-select__options" v-if="isShowOptions">
                <ul>
                    <li v-for="item in options" :key="'' + item.value + item.label" @click="handleSelected($event, item)">{{
                        item.label }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { computed, ref, onUnmounted } from 'vue';
import type { ISelectOptions, ISelectOptionItem } from './type'

interface Props {
    options: ISelectOptions;
    value: string;
}

const props = withDefaults(
    defineProps<Props>(),
    {
        options: () => [],
        keyName: '',
        value: ''
    }
)

const emits = defineEmits<{
    (e: 'update:value', value: string): void
}>()


const isShowOptions = ref(false)
const checkedValue = ref('')
let timerId: NodeJS.Timeout


const handleSelected = (e: Event, item: ISelectOptionItem) => {
    e.stopPropagation()
    isShowOptions.value = false
    console.log(item)
    checkedValue.value = item.label
    emits('update:value', item.value)
}


const iconClass = computed(() => {
    return isShowOptions.value ? 'oc-select__icon--active' : ''
})

// 聚焦
const handleFocus = () => {
    isShowOptions.value = true
}

// 失焦
const handleBlur = () => {
    timerId = setTimeout(() => {
        isShowOptions.value = false;
    }, 200);

    // 在组件销毁时清除定时器

}

onUnmounted(() => {
    clearTimeout(timerId);
});


</script>


<style scoped lang="scss">
@include b('select') {
    @include e('inner') {
        position: relative;
    }

    @include e('input') {
        padding: 7px 15px;
        border: 1px solid $oc-border-color;
        border-radius: 5px;
    }

    @include e('icon') {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: fit-content;
        transition: all .3s;

        @include m('active') {
            transform: rotate(180deg);
        }
    }

    @include e('options') {
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        border-radius: 5px;
        box-shadow: $oc-box-shadow;
        z-index: 100;
        transition: all .3s;
        background-color: white;
        z-index: 20000;

        ul {
            width: 100%;

            li {
                padding: 10px 20px;
                transition: all 0.3;
            }

            li:hover {
                background-color: $oc-color-primary-light-9;
                cursor: pointer;
            }
        }
    }
}
</style> 