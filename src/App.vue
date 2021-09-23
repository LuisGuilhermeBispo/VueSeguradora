<template>
  <div class="container">
    <my-header/>
    <my-notificante/>
    <br><hr>
    <my-apolice/>
  </div>
</template>

<script>
  import Header from './assets/components/shared/Header.vue';
  import Notificante from './assets/components/notificante/Notificante.vue';
  import Apolice from './assets/components/apolice/Apolice.vue';

  export default {
    components: {
      'my-header': Header,
      'my-notificante' : Notificante,
      'my-apolice' : Apolice
    },
    data() {
      return {
        // title: 'Seguros'
      }
    },

    created() {


    }
  }

</script>

<style lang="scss">
  .title {
    text-align: center;
  }
   .form-container {
    width: 50%;
    //float: left;
  }

  .form-btn {
    width: 50%;

  }

</style>
