<template>
    <div class="about">
        <div>
            text值为：{{getText}}
            <button @click="setText">修改text值</button>
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
// import {getTestData} from '../services/moduleA'
export default {
    name:'About',
    data(){
        return{
            dataStatus:'未获取'
        }
    },
    created(){
		console.log('this.$stor',this.$store);
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
        ]),
        getHttpData(){
            // getTestData()
            // .then(response=>{
            //     console.log('response',response);
            //     this.dataStatus='获取成功'
            // })
        }
    }
}
</script>
<style scoped>

</style>


