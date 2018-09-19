<template>
    <div>
        <h1>首页</h1>
        <p>开发说明：在src目录下编写组件，在examples目录下编写说明文档以及预览组件</p>
        <p>为了脚手架的可扩展性，该脚手架只提供组件开发以及预览功能，其它功能可根据项目需求自行定制</p>
        <p>使用示例可以在alert.md文件中看见</p>
        <p>使用命令创建和删除组件都需要重启工程:: npm run dev</p>
        <p>如果需要markdown相关主题，可在npm下载，此工程没内置相关主题</p>
        <p>例如这个主题： <a href="https://www.npmjs.com/package/primer-markdown">https://www.npmjs.com/package/primer-markdown</a></p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
p {
    line-height: 40px;

    a {
        color: #005bae; 
    }
}
</style>
