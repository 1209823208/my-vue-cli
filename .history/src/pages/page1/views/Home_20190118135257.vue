<template>
    <div id="home">
        page1-home
         <p>this is a parent-component</p>
        <firstchild  ref="f1"></firstchild>
        <secondchild ref="f2"></secondchild>
        <button @click='show_child_of_parents'>show child msg</button>
    </div>
</template>
<script>
import firstchild from './firstchild'
import secondchild from './secondchild'

export default {
    components:{
        firstchild,
        secondchild
    }
}
</script>
<style scoped>

</style>


