<template>
  <v-container fluid>
    <v-card>
      <new-calendar-view
      :viewTyppe="viewType"
      :Json="testJson"
      :monthData="monthData"
      @event_selected="mySelectedEventHandler"
      @onhint="myOnHintEeentHandler"
      />
    </v-card>
  </v-container>
</template>
<script>

  import newCalendarView from './newCalendarView'
  import testJson from '../assets/test'


  export default {
    name: 'calendar',
    data() {
      return {
        viewType: '',
        initialDate: '',
        testJson: [],
        monthData:[],
      }
    },
    components: {newCalendarView},
    mounted() {
      console.log('----- 3. Calendar.vue mounted -----')
      this.viewType = 'month'
      console.log(testJson)
      this.testJson = testJson

    },
    methods: {
      mySelectedEventHandler: function() {

      },
      myOnHintEeentHandler: function() {

      },
    }
  }
</script>
<style>

</style>
