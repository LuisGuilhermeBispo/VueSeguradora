<template>
    <div class="page-header">
      <h1>{{ title }} <small>Cadastro</small></h1>
    </div>
</template>

<script>
  export default {
    // props: ['title'],
    
    data() {
      return {
        title: 'Seguros:'
      }
    }
  }

</script>

<style lang="scss" scoped>
  .page-header {
    text-align: center;
  }

</style>
