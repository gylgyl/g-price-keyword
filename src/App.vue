<template>
  <div id="app">
    77
    <keyword></keyword>
  </div>
</template>

<script>
  import keyword from './keyword'
  export default {
    name: 'App',
    components: {
      keyword
    },
    beforeCreate: function () {
      console.log('调用了beforeCreat钩子函数')
    },
    created() {
      console.log('88');
    }

  }
</script>

<style>
</style>