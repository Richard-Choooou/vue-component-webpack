<template>
    <ul>
        <router-link :to="item.vueRouterHref" tag="li" v-for="(item, index) in routes" :key="index">
            <span>{{item.cnName}}</span>
        </router-link>
    </ul>
</template>

<script>
const routes = require('../router/nav.config.json')
export default {
    data() {
        return {
            routes: routes
        }
    }
}
</script>

<style lang="scss" scoped>
.router-link-active {
    color: #fff;
    opacity: 1;
}
ul {
    padding-top: 20px;
    padding-left: 0;
    height: 100%;
    width: 200px;
    background: #232323;
    color: #fff;

    li {
        padding-left: 20px; 
        line-height: 32px;
        list-style: none;
        user-select: none;
        opacity: 0.5;

        &:hover {
            background: #35353a;
            opacity: 1;
        }
    }
}
</style>
