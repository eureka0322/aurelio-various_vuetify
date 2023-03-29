<template>
  <v-card-text class="pb-0 pr-0">
    <full-calendar
      :events="events"
      :config="config"
      :initialDate="YearView"
      :outline="getOutLine"
      :backgroundColor="getBackgroundColor"
    />

    <v-footer v-if="viewType === 'month'" dark color="blue" class="pa-2 d-block text-xs-center">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-card-text>

</template>

<script>
  import FullCalendar from './FullCalendar'
  import json from '../assets/report'

  export default {
    name: 'MonthView',
    props: ['YearView', 'viewType'],
    data() {
      return {
        json: [],
        config: {
          weekends: true,
          weekNumbers: true,
          defaultView: 'month',
          header: {
            left: '',
            center: 'title',
            right: ''
          },
          height: 'auto',
        },
        events: []
      }
    },
    mounted() {
      console.log('@@ MonthView.vue mounted @@')
      this.configJson()
    },
    watch: {
      YearView: function(v) {
        // console.log(v)
      }
    },
    computed: {
      getOutLine() {
        return this.json.map((v, i) => ({
          id: i,
          type: v.Type,
          start: v.day,

          color: v.ColorRecuadroCaja,
          border: v.RecuadroCaja
        }))
      },
      getBackgroundColor() {
        return this.json.map((v, i) => ({
          id: i,
          type: v.Type,
          start: v.day,
          color: v.bgColor,
        }))
      }
    },
    components: {
      FullCalendar,
    },
    methods: {
      configJson: function () {
        console.log('---- ConfigJson function implemented -----')
        for (let i = 0; i < json.length; i++) {
          this.events.push({
            id: i,
            type: json[i].Type,
            start: json[i].day,
            title: json[i].HPlannedDay,
            allDay: true,
            textColor: json[i].color,
          })
          this.events.push({
            id: i,
            type: json[i].Type,
            start: json[i].day,
            title: json[i].detailedText,
            allDay: true,
            textColor: json[i].color,
          })
        }
        this.json.push(...json)
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../dist/fullcalendar.css';
</style>
