<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            
            <a @click="goFn('')">Index</a> |
            <a @click="goFn('page1')">Page1</a> |
            <a @click="goFn('page2')">Page2</a> |
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
  name: 'app',
  methods:{
      goFn(name){
        //   location.href = `${process.env.BASE_URL}` + name

        this.$openRouter({
          name: name,
          query: {
            text: 'hello'
          }
        })
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
