<template>
    <div class="oc-search-input">
        <div class="oc-search-input__icon">
            <SvgIcon icon="search" color="#8a8a8a"></SvgIcon>
        </div>
        <input type="text" class="oc-search-input__input">
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped lang="scss">
@include b('search-input') {
    position: relative;
    @include e(input) {
        background-color: $bg-grey-light;
        border: none;
        outline: none;
        padding: 8px 40px;
        border-radius: 6px;
        font-size: 0.8rem;
    }
    @include e('icon') {
        position: absolute;
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>