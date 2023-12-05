<template>
    <div class="oc-empty" ref="emptyRef">
        <slot v-if="slots.default" class="oc-empty__icon"></slot>
        <SvgIcon icon="empty" 
        class="oc-empty__icon"
        :width="emptyLogoStyle.width + 'px'"
        :height="emptyLogoStyle.height + 'px'"
        :color="emptyLogoStyle.color"></SvgIcon>

        <p>{{ description ? description : 'No Data' }}</p>

    </div>
</template>


<script setup lang="ts">
import { useSlots, ref, onMounted, reactive } from 'vue';

const slots = useSlots()
const emptyRef = ref<HTMLDivElement>()
const emptyLogoStyle = reactive({
    width: 0,
    height: 0,
    color: '#8a8a8a'
})

interface Props {
    description: string;
}

withDefaults(
    defineProps<Props>(),
    {
        description: ''
    }
)

onMounted(() => {
    const width = emptyRef.value && emptyRef.value.getBoundingClientRect().width
    const height = emptyRef.value && emptyRef.value.getBoundingClientRect().height
    emptyLogoStyle.height = height as number / 6
    emptyLogoStyle.width = width as number / 6

}) 

</script>


<style scoped lang="scss">
@include b(empty) {
    width: 100%;
    height: 100%;
    @include flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include e(icon) {
        transform: translateY(-20%);
    }
}
</style>