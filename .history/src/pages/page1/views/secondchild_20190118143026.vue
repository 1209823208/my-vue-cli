<template>
    <div id="secondchild">
        second-child
        <threechild />
    </div>
</template>
<script>
import threechild from './threechild'
export default {
    data:function(){
        return {
            'msg':'msg'
        }
    },
    components:{
        threechild
    }
}
</script>
<style scoped>

</style>


