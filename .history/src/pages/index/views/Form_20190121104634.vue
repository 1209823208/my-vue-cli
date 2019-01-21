<template>
    
</template>
<script>
import iForm from '_components/form/form.vue'
import iFormItem from '_components/form/form-item.vue'
import iInput from '_components/input/input.vue'
export default {
    components:{iForm,iFormItem,iInput},
    data(){
        return {
            formValidate:{
                name:'',
                mail:''
            },
            ruleValidate:{
                name:[
                    {required:true,message:'用户名不能为空',trigger:'blur'}
                ],
                mail:[
                    {required:true,message:'邮箱不能为空',trigger:'blur'},
                     {type:'email',message:'邮箱格式不正确',trigger:'blur'}
                ]
            }
        }
    }
}
</script>
<style scoped>

</style>


