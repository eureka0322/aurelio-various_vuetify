<template>
  <v-container fluid class="px-0 py-0">
    <v-layout v-if="viewType === 'year'" class="YearView" row wrap>
      <template v-for="YearView in YearViewList">
        <v-flex xs12 sm6 md4 lg3>
          <MonthView class="YearPicker" :YearView="YearView.month" :viewType="viewType"></MonthView>
        </v-flex>
      </template>
    </v-layout>
    <v-layout v-if="viewType === 'quater'" class="QuaterView" row wrap>
      <template v-for="YearView in YearViewList">
        <v-flex xs12 sm12 md6 lg4>
          <MonthView class="MonthPicker" :YearView="YearView.month" :viewType="viewType"></MonthView>
        </v-flex>
      </template>
    </v-layout>
    <v-layout v-if="viewType === 'month'" class="MonthView">
      <MonthView :viewType="viewType"></MonthView>
    </v-layout>
  </v-container>
</template>

<script>
  import MonthView from './MonthView'

  export default {
    name: 'CalendarView',
    props: [
      'viewType', 'toolDate'
    ],
    data() {
      return {
        MonthView: null,
        QuaterView: null,
        YearView: null,
        YearViewList: [],
      }
    },
    watch: {
      toolDate: function (v) {
        this.setYearView()
      }
    },
    components: {MonthView},
    mounted() {
      console.log('@@ Calendar @@')
      this.setYearView()
    },
    methods: {
      setYearView: function () {
        this.YearViewList = []
        const year = new Date().getFullYear().toString()
        const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        for (let i = 0; i < 12; i++) {
          this.YearViewList.push({
            id: i,
            month: this.toolDate + '-' + month[i]
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/FullCalendar.scss";
</style>
