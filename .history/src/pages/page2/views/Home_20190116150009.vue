<template>
    <div id="home">
      <ul class="puzzle-wrap">
            <li 
                :class="{'puzzle': true, 'puzzle-empty': !puzzle}" 
                v-for="(puzzle, index) in puzzles"
                :key="index"
                v-text="puzzle"
            ></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            puzzles: []
        }
    },
    mounted () {
        this.renderFn()
    },
    methods:{
        // 重置渲染
        renderFn() {
        	let puzzleArr = Array.from({ length: 15 }, (value, index) => index + 1);

            // 页面显示
            this.puzzles = this.shuffle(puzzleArr)
            this.puzzles.push('')
        },
        // 随机打乱数组
        shuffle(arr) {
            let len = arr.length
                
            for (let i = 0; i < len - 1; i++) {
                let idx = Math.floor(Math.random() * (len - i))
                let temp = arr[idx]
                arr[idx] = arr[len - i - 1]
                arr[len - i - 1] = temp
            }
            
            return arr
        },
    }
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


