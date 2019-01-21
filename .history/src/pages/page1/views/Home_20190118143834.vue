<template>
    <div id="home">
        page1-home
         <p>this is a parent-component</p>
        <firstchild  ref="f1"></firstchild>
        <p>组件之间插入元素</p>
        <secondchild ref="f2"></secondchild>
        <button @click='show_child_of_parents'>get parent msg</button>
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
    methods:{
        show_child_of_parents(){
            console.log('refs',this.$refs.f1.name);
            console.log('children-name',this.$children[0].name);
        },                                    
    }   
　　　　　　　　　　     
}
</script>
<style scoped>

</style>


