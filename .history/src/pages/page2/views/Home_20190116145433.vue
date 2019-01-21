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
            puzzles: Array.from({ length: 15 }, (value, index) => index + 1)
        }
    },
}
</script>
<style scoped>

</style>


