<template>
  <div>你好</div>
</template>

<script>
  export default {
    name: "wellcome",
    mounted() {
      this.$parent.activeSidebar("welcome-sidebar")
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>