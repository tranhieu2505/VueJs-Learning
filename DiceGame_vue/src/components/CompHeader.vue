<template>
    <header><h1>{{ title }} <br>
      <button v-on:click="changeTitleHeader">Change title from ComponentHeader</button>
    </h1></header>
</template>

<script>
export default {
    name: 'comp-header',
    props: {
      title: String
    },
    data() {
        return {
            text: 'Header'
        }
    },
    methods: {
      changeTitleHeader(data) {
        //not allowed change props from parent component
        var data = {
          title: 'test -> transmit data by variable event'
        }
        this.$emit('changeTitleEvent', data)
      }
    }
}
</script>

<style>

</style>
