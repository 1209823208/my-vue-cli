<template>
    <div id="threechild">
        three-child
    </div>
</template>
<script>
export default {
     created(){
        console.log('three-parent',this.$parent);
    }
}
</script>
<style scoped>

</style>
