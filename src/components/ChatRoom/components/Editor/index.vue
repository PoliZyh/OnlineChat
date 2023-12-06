<template>
    <div class="oc-editor">
        <div class="oc-editor__ops">
            <SvgIcon icon="smile" width="25px" height="25px" color="#8a8a8a" class="oc-editor__icon"></SvgIcon>
            <SvgIcon icon="code" width="25px" height="25px" color="#8a8a8a" class="oc-editor__icon"></SvgIcon>
            <SvgIcon icon="folder" width="25px" height="25px" color="#8a8a8a" class="oc-editor__icon"></SvgIcon>
            <SvgIcon icon="image" width="25px" height="25px" color="#8a8a8a" class="oc-editor__icon"></SvgIcon>
        </div>
        <div class="oc-editor__content">
            <OcTextarea></OcTextarea>
        </div>
        <div class="oc-editor__send">
            <OcButton type="primary">发送</OcButton>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>


<style scoped lang="scss">
@include b(editor) {
    width: 100%;
    height: 100%;
    border-top: 1px solid rgba(206, 206, 206, 0.596);
    @include flex;
    flex-direction: column;

    @include e(ops) {
        width: 100%;
        padding: 5px 15px;
        @include flex;
        align-items: center;
        gap: 10px;
    }
    @include e(icon) {
        cursor: pointer;
    }
    @include e(content) {
        width: 100%;
        flex: 1;
    }
    @include e(send) {
        padding: 5px 15px;
        @include flex;
        justify-content: flex-end;
    }
}
</style>