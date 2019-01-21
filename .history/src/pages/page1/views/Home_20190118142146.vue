<template>
    <div id="home">
        page1-home
         <p>this is a parent-component</p>
        <firstchild  ref="f1"></firstchild>
        <secondchild ref="f2"></secondchild>
    </div>
</template>
<script>
import firstchild from './firstchild'
import secondchild from './secondchild'

export default {
    data:function(){
        return {
            'name':'parent'
        }
    },
    components:{
        firstchild,
        secondchild
    },
    created(){
        // console.log('children',this.$children);
         console.log('ref',this.$refs.f1);
    }
}
</script>
<style scoped>

</style>


