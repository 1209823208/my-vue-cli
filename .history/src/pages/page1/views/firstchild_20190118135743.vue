<template>
    <div id="firstchild">
        first-child
    </div>
</template>
<script>
export default {
    created(){
        console.log('parent',this.$parent);
    }
}
</script>
<style scoped>

</style>


