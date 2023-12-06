<template>
    <div class="oc-textarea">
        <textarea class="oc-textarea__inner"></textarea>
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped lang="scss">
@include b(textarea) {
    width: 100%;
    height: 100%;
    @include e(inner) {
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        padding: 0 10px;
        background-color: transparent;
    }
}
</style>