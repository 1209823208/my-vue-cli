<template>
    <div id="home">
        page1-home
         <p>this is a parent-component</p>
        <input v-model="data_message">
        <p>Message is: {{ data_message }}</p>
        <button @click='update_mn'>update to mn</button>
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
            name:'parent',
            data_message:this.message,
            data_mn:this.dataList
        }
    },
    provide: {
        message:'message',
        dataList:{
            mn:'and'
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
        update_mn(){
            this.dataList.mn = 'updata_1220200000'
        }                                   
    }   
　　　　　　　　　　     
}
</script>
<style scoped>

</style>


