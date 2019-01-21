<template>
    <div id="threechild">
        three-child
         <p>threechild:{{dataList.mn}}</p>
    </div>
</template>
<script>
export default {
     created(){
        console.log('three-parent',this.$parent);
    },
     inject: ['dataList']
}
</script>
<style scoped>

</style>
