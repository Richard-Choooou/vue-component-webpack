<template>
    <div class="header">
        <h1>vue 组件开发</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    height: 10%;

    h1 {
        position: absolute;
        left: 60px;
        top: 50%;
        transform: translateY(-50%);
        // line-height: inherit;
    }
}
</style>
