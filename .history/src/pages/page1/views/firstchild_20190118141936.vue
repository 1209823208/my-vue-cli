<template>
    <div id="firstchild">
        first-child
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            'name':'parent'
        }
    },
    methods:{
        getName(){

        }
    },
    created(){
        console.log('parent',this.$parent.name);
    }
}
</script>
<style scoped>

</style>


