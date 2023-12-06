<template>
    <div class="oc-button">
        <button class="oc-button__inner" :class="btnClass()">
            <slot></slot>
        </button>
    </div>
</template>


<script setup lang="ts">

interface Props {
    type: 'plain' | 'primary' | 'success' | 'danger' | 'warning';
}

const props = withDefaults(
    defineProps<Props>(),
    {
        type: 'plain'
    }
)

const btnClass = () => {
    const classes: string[] = []
    classes.push('oc-button__inner--' + props.type)
    return classes
}

</script>


<style scoped lang="scss">
@include b(button) {
    @include e(inner) {
        border: none;
        padding: 5px 10px;
        font-size: 0.8rem;
        border-radius: 5px;
        cursor: pointer;
        animation: .1s;
        @include m(pain) {}

        @include m(primary) {
            color: white;
            background-color: $oc-color-primary;
            outline-color: $oc-color-primary-dark-2;
            border-color: $oc-color-primary;
            &:hover {
                background-color: $oc-color-primary-light-3;
            }
        }
    }


}
</style>