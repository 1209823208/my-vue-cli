<template>
    <div id="firstchild">
        first-child
    </div>
</template>
<script>
export default {
     data:{
        'name':'firstchild'
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


