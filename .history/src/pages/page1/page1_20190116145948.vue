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
.puzzle-wrap {
    width: 328px;
    height: 328px;
    padding: 0;
    margin: 50px auto 0;
    background: #ccc;
    list-style: none;
}
.puzzle {
    float: left;
    width: 80px;
    height: 80px;
    font-size: 20px;
    background: #f90;
    text-align: center;
    line-height: 80px;
    border: 1px solid #ccc;
    cursor: pointer;
}
.puzzle-empty {
    background: #ccc;
    box-shadow: inset 2px 2px 18px;
}
.btn-reset {
	width: 200px;
	height: 40px;
	line-height: 40px;
	margin-top: 20px;
	text-align: center;
	border-radius: 5px;
	border: none;
	background: #ccc;
}
</style>


