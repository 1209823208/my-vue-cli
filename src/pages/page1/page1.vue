<template>
    <div id="app">
        page1 html
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
         <div>
            <router-view />
        </div>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>


