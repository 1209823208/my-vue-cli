<template>
    <div id="about">
        page1-about
        <div @click="doSomething">click</div>
    </div>
</template>
<script>
export default {
     methods: {
        doSomething() {
            console.log(a); // a is not defined
        }
    }
}
</script>
<style scoped>

</style>


