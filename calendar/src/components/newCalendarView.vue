<template>
  <v-container fluid class="px-0 py-0">
    <v-layout v-show="view === 'year'" row wrap class="YearView">
      <template v-for="YearView in YearViewList">
        <v-flex xs12 sm6 md4 lg3 class="pa-2">
          <new-full-calendar
            :events="events"
            :config="config"
            :outline="getOutLine"
            :initialDate="YearView.month"
            :backgroundColor="getBackgroundColor"
            :onHint="onSelectionChange"
          >
          </new-full-calendar>
        </v-flex>
      </template>
    </v-layout>
    <v-layout v-show="view === 'month'" row wrap class="MonthView">
      <template v-for="YearView in YearViewList">
        <v-flex xs12 class="pa-2" v-show="YearView.month === month">
          <new-full-calendar
            :events="events"
            :config="config"
            :outline="getOutLine"
            :initialDate="YearView.month"
            :backgroundColor="getBackgroundColor"
            :onHint="onSelectionChange"
            class="month"
          >

          </new-full-calendar>
          <v-footer class="d-block text-xs-center" color="blue" dark>
            <v-spacer></v-spacer>
            <div class="pt-2">&copy; {{ new Date().getFullYear() }}</div>
          </v-footer>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
  import NewFullCalendar from '../Common/NewFullCalendar'
  import $ from 'jquery'

  window.$ = $

  export default {
    components: {NewFullCalendar},
    name: 'newCalendarView',
    props: ['viewType','Json','initialDate','monthData','event_selected','onhint'],
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
        events: [],
        multipleDays: [],
        testJson: [],
        YearViewList: [],
        month: '2018-05',
        view: 'month',
        selectedMonth: '',
        selectedDays: [],
        toolDate: new Date().getFullYear().toString(),
        $
      }
    },
    mounted() {
      console.log('---- 2.newCalendarView.vue mounted ----- ')
      setTimeout(() => {
        this.configJson()
      }, 5000)
      setTimeout(() => {
        this.selectAllDay()
      }, 2000)
      this.setYearView()
      this.selectAllDay()
      this.onClickTitle()

    },
    component: {
      NewFullCalendar
    },
    computed: {
      getOutLine() {
        return this.testJson.map((v, i) => ({
          // id: i,
          type: v.Type,
          start: v.startHPlannedDay,
          color: v.ColorRecuadroCaja,
          border: v.RecuadroCaja
        }))
      },
      getBackgroundColor() {
        return this.testJson.map((v, i) => ({
          // id: i,
          type: v.Type,
          start: v.startHPlannedDay,
          color: v.bgColor,
        }))
      },
    },
    methods: {
      configJson: function () {
        console.log('---- ConfigJson function implemented -----')
        console.log(this.Json)
        for (let i = 0; i < this.Json.length; i++) {
          this.events.push({
            // id: i,
            type: this.Json[i].Type,
            title: this.Json[i].HPlannedDay,
            start: this.Json[i].startHPlannedDay,
            end: this.Json[i].endHPlannedDay,
            allDay: true,
            color: this.Json[i].eBGColor,
            textColor: this.Json[i].textColor,
          })
          this.events.push({
            // id: i,
            type: this.Json[i].Type,
            title: this.Json[i].DetailedText,
            start: this.Json[i].startDetailedText,
            end: this.Json[i].endDetailedText,
            allDay: true,
            color: this.Json[i].eBGColor,
            textColor: this.Json[i].textColor,
          })
        }
        this.testJson.push(...this.Json)
      },
      getMonthFromString(mon) {
        return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1
      },
      rgbToHex: function (e) {
        var a = e.split("(")[1].split(")")[0];
        a = a.split(",");
        var b = a.map(function (x) {             //For each array element
          x = parseInt(x).toString(16);      //Convert to a base16 string
          return (x.length == 1) ? "0" + x : x;  //Add zero if we get only one character
        })
        b = "0x" + b.join("");
        return b;
      },
      onSelectionChange: function(args, events){
        if((args[1].shiftKey || args[1].metaKey) && args[1].altKey)
          return;
        const that = this
        const rgbToHex = color => {
          var a = color.split("(")[1].split(")")[0];
          a = a.split(",");
          var b = a.map(function (x) {             //For each array element
            x = parseInt(x).toString(16);      //Convert to a base16 string
            return (x.length == 1) ? "0" + x : x;  //Add zero if we get only one character
          })
          b = "0x" + b.join("");
          return b;
        }
        console.log('-- On Hint event --', args)
        const cal = args[2].el;
        const date = args[0].format();
        const currentSelect = $(cal).find('.fc-day-top[data-date=' + date + ']')
        const bgColor = $(cal).find('td.fc-widget-content[data-date =' + date + ']').css('background-color') || "rgb(255,255,255)";
        const ColorRecuadroCaja = $(cal).find('td.fc-widget-content[data-date=' + date + ']').css('border-color');
        if (ColorRecuadroCaja === "rgb(255,255,255)") {
          var RecuadroCaja = true
        } else {
          var RecuadroCaja = false
        }
        const index = currentSelect.parent().find('td').index(currentSelect) + 1;
        const HPlannedDay = $(currentSelect.closest('table').find('tbody tr td:nth-child(' + index + ')')[0] || '').find('span.fc-title').text();
        const detailedText = $(currentSelect.closest('table').find('tbody tr td:nth-child(' + index + ')')[1] || '').find('span.fc-title').text();
        const color = $(currentSelect.closest('table').find('tbody tr td:nth-child(' + index + ')')[0]).find('a').css('color') || "rgb(255,255,255)";
        const type = events[0].type
        var dayInfo = {
          "Type": type,
          "day": date,
          "HPlannedDay": HPlannedDay,
          "detailedText": detailedText,
          "bgColor": rgbToHex(bgColor),
          "color": rgbToHex(color),
          "RecuadroCaja": true,
          "ColorRecuadroCaja": rgbToHex(ColorRecuadroCaja)
        }
        // alert('Hello! Here is on Hint Event, You can get dayInfo Object at this point')
        var el = $(cal).find('td.fc-widget-content[data-date =' + date + ']')
        if (args[1].shiftKey || args[1].metaKey) {
          $(el).addClass('selected');
          $(el).data('origin-color', $(el).css('background-color'))
          $(cal).find('td.fc-widget-content[data-date =' + date + ']').css('background-color', '#0aa6c5ed')
          this.multipleDays.push(dayInfo)
        } else {
          // $.each($(cal).find('.selected'), function (e) {
          //   $(this).removeClass('selected');
          //   $(this).css('background-color', $(this).data('origin-color'));
          // })
          this.multipleDays = []
        }
        this.$emit('days-selected', that.multipleDays)
      },
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
      },
      onClickTitle: function () {
        const that = this
        const cal = $(this.$el)
        setTimeout(() => {
          $('.fc-center h2').on('click', function (e) {
            var str = $($(this)).text()
            const month = str.substr(0, str.indexOf(' '));
            const year = str.substr(str.indexOf(' ') + 1);
            if (that.getMonthFromString(month) < 10) {
              that.month = year + '-' + '0' + that.getMonthFromString(month).toString()
            } else {
              that.month = year + '-' + that.getMonthFromString(month).toString()
            }
            if (that.view === 'month') {
              that.view = 'year'
            } else if (that.view === 'year') {
              that.view = 'month'
              that.selectedMonth = str
            }
          })
        }, 1000)
      },
      selectAllDay: function () {
        const that = this
        $('td.fc-day-top').on('click', function (e) {
          console.log('--- selectAllDay ---');
          const cal = $(that.$el)
          if ((e.metaKey || e.shiftKey) && e.altKey) {
            $.each($(cal).find('td.fc-widget-content'), function() {
              $(this).data('all-origin-color', $(this).css('background-color'));
              $(this).css('background-color', '#0aa6c5ed');
            });
          } else {
            $.each($(cal).find('td.fc-widget-content'), function() {
              if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                if($(this).data('origin-color') != '') {
                  $(this).css('background-color', $(this).data('origin-color'));
                  $(this).data('origin-color', '')
                  $(this).data('all-origin-color', '');
                }
              } else {
                if($(this).data('all-origin-color') != '') {
                  $(this).css('background-color', $(this).data('all-origin-color'));
                  $(this).data('all-origin-color', '');
                }
              }
            });
          }
        })
      },
    }
  }
</script>
<style>
  @import '../dist/fullcalendar.css';
  @import '../assets/changedFormat.css';
</style>
