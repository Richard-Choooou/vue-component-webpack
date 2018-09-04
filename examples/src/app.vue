<template>
    <div class="main">
        <sg-header></sg-header>
        <div class="content">
            <div class="left-nav">
                <sg-nav></sg-nav>
            </div>
            <div class="center-container">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import SgHeader from '@examples/src/components/header'
import SgNav from '@examples/src/components/nav'
export default {
    components: {
        SgHeader,
        SgNav
    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

.main {
    height: 100%;
}

.content {
    height: 80%;
    overflow: hidden;

    .left-nav {
        float: left;
        height: 100%;
    }

    .center-container {
        padding: 20px;
        height: 100%;
        overflow: hidden;
        background: #35353a;
        color:#fff;
    }
}

.footer {
    background: #005bae;
    height: 10%;
}
</style>
