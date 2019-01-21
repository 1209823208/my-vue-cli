<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'iFormItem',
    inject:['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data(){
      return{
        isRequired:false,
        validateState:'',
        validateMessage:''
      }
    },
    computed:{
      fieldValue(){
        return this.form.model[this.prop]
      }
    }
  }
</script>
