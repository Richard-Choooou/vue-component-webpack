<template>
    <div>
        <div @click="alert">这是alert组件，点击试试看</div>
        <img src="../WechatIMG5.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'SgAlert',
    methods: {
        alert() {
            alert('执行了组件中的逻辑')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './main.scss';
body {
    background: #fff;
}
</style>
