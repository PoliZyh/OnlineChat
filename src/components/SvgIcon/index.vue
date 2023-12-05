<template>
    <svg :class="iconClass" aria-hidden="true" :style="{width, height}">
        <use :xlink:href="iconName" :fill="color"></use>
    </svg>
</template>
  
<script setup lang="ts">

// 定义属性
import { computed } from "vue";
import type { ISvgIcon } from "./type";

const props = withDefaults(
    defineProps<ISvgIcon>(),
    {
        color: '',
        iconClass: 'icon',
        height: '16px',
        width: '16px'
    }
)


function external(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

const isExternal = computed(() => external(props.icon))
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

/**
 * 内部图标
 */
const iconName = computed(() => `#icon-${props.icon}`)

</script>