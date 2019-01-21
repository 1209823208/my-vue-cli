<template>
    <div class="about">
        <div>
            text值为：{{getText}}
            <button @click="settext">修改text值</button>
        </div>
        <div>
            groups值为：{{getGroups}}
            <button type="button" @click="setGroup(getGroups.length+1)">修改groups值</button>
        </div>
        <div>
            http数据：{{dataStatus}}
            <button type="button" @click="getHttpData">获取github数据</button>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {getTestData} from '../services/moduleA'
export default {
    name:'About',
    data(){
        return{
            dataStatus:'未获取'
        }
    },
    computed:{
        ...mapGetters([
            'getText',
            'getGroups'
        ])
    },
    methods:{
        ...mapActions([
            'setText',
            'setGroup'
        ])
    }
}
</script>
<style scoped>

</style>


