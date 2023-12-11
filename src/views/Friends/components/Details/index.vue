<template>
    <div class="oc-details">
        <div class="oc-details__header">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
@include b(details) {
    width: 100%;
    height: 100%;
    background-color: white;
    @include e(header) {
        width: 100%;
        height: 40%;
        background-image: url('../../../../assets/images/bg.jpeg');
        background-repeat: no-repeat;
    }
}
</style>