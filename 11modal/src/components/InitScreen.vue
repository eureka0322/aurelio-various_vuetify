<template>
  <main>
    <v-layout row wrap class="table-scroll-enabled-1">
      <v-flex xs12 style="height: 120px; text-align: center;">
        <h1 style="color: green; padding-top: 50px;">Bienvenido al asistente Boldworkplanner</h1>
      </v-flex>
      <v-progress-linear value="45" height="3" color="error" background-color="success"></v-progress-linear>
      <v-flex xs12 style="text-align: center;" color="grey lighten-3">
        <img style="width: 500px; height: 300px; padding-top: 30px;" src="../assets/svg.png"/>
        <v-list-tile-sub-title class="mt-5">
          Lorem lpsum es simplemente el texto de relleno de las imprentas y archivos de<br>
          testo. Lorem lpsum ha sido el testo de relleno estandar de las industrias des<br>
          de el ano 1500, cyando un impresor(N. del T. persona que se dedica a la impre<br>
          ta) desconocido uso una galeria de tetos y los mezclo de tal manera que logro<br>
          hacer un libreo de textos especimen. No solo sobrevivos 500 anos.sino que tem<br>
          bien ingreso como texto de relleno en documentos electronicos quedando.
        </v-list-tile-sub-title>
        <!--<v-btn class="mt-5" color="green" dark @click="click">i Empezar!</v-btn>-->
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
  export default {
    name: 'InitScreen',
    props: ['click'],
    data() {
      return {}
    },
    mounted() {
      console.log('----- Initial Screen Page Mounted -----')
    },
  }
</script>

<style scoped>
    .table-scroll-enabled-1 {
        max-height: calc(100vh - 200px) !important;
        overflow: auto;
    }
</style>
