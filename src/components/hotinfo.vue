<template>
    <div>
        <div>我是详情内容</div>
       <p>我的id:{{id}}</p>
    </div>
</template>
<script>
export default {
     name:"hotinfo",
    data(){
         return {}
    },
    created(){
        this.id=this.$route.params.id
    }
}
</script>
<style scoped>

</style>
