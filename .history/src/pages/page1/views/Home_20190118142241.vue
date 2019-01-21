<template>
    <div id="home">
        page1-home
         <p>this is a parent-component</p>
        <firstchild  ref="f1"></firstchild>
        <secondchild ref="f2"></secondchild>
        <button @click.stop='getParent'>get parent msg</button>
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
            //children方式访问自组件
　　　　　　　　　　　　　　 for(let i=0;i<this.$children.length;i++){
                    console.log(this.$children[i].msg);
            }
　　　　　　　　　　　　　　　//通过$ref打标记，访问子组件　
            console.log(this.$refs.f1.msg);
　　　　　　　　　　　　　　this.$refs.f1.getParent();
        },                                    
    }   
　　　　　　　　　　     
}
</script>
<style scoped>

</style>


