<template>
    <div class="about">
        <div>
            text值为：{{getText}}
            <button @click="settext">修改text值</button>
        </div>
        <div>
            groups值为：{{getGroups}}
            <button type="button" @click="setGroup(getGroup.length+1)">修改groups值</button>
        </div>
        <div>
            http数据：{{dataStatus}}
            <button type="button" @click="getHttpData">获取github数据</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'About'
}
</script>
<style scoped>

</style>


