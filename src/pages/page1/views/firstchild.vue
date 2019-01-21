<template>
    <div id="firstchild">
        first-child
        <p>firstchild:{{message}}</p>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            'name':'parent'
        }
    },
    inject: ['message'],
    methods:{
        getName(){

        }
    },
    created(){
        console.log('parent',this.$parent);
    }
}
</script>
<style scoped>

</style>


