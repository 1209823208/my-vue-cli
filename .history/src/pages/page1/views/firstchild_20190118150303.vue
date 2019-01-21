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
    mounted () {
        console.log('message',this.message);  // Aresn
    },
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


