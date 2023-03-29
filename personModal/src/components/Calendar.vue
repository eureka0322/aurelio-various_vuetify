<template>
  <v-container class="pt-2 pb-0">
    <v-toolbar height="40px">
      <v-toolbar-items>
        <v-btn flat icon small @click="last">
          <v-icon>chevron_left</v-icon>
        </v-btn>
        <v-text-field
          type="number"
          v-model="toolDate"
          class="pt-2">
        </v-text-field>
        <v-btn flat icon small @click="next">
          <v-icon>chevron_right</v-icon>
        </v-btn>
        <v-btn flat @click="ToYear">Year</v-btn>
        <v-btn flat @click="ToQuater">Quater</v-btn>
        <v-btn flat @click="ToMonth">Month</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card>
      <CalendarView
        :viewType="viewType"
        :toolDate="toolDate">
      </CalendarView>
    </v-card>
  </v-container>
</template>
<script>

  import CalendarView from './CalendarView.vue'

  export default {
    name: 'calendar',
    data() {
      return {
        viewType: 'year',
        toolDate: new Date().getFullYear().toString()
      }
    },
    components: {CalendarView},
    mounted() {
      console.log('----- Hello World mounted -----')
    },
    methods: {
      ToYear: function () {
        this.viewType = 'year'
      },
      ToQuater: function () {
        this.viewType = 'quater'
      },
      ToMonth: function () {
        this.viewType = 'month'
      },
      last: function () {
        this.toolDate--
      },
      next: function () {
        this.toolDate++

      },
    }
  }
</script>
<style>

</style>
