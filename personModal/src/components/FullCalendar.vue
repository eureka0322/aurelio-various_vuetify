<template>
  <div ref="calendar" id="calendar"></div>
</template>

<script>
  import defaultsDeep from 'lodash.defaultsdeep'
  import 'fullcalendar'
  import $ from 'jquery'

  export default {
    // name: 'FullCalendar',
    props: {
      events: {
        default() {
          return []
        },
      },

      eventSources: {
        default() {
          return []
        },
      },

      editable: {
        default() {
          return true
        },
      },

      selectable: {
        default() {
          return true
        },
      },

      selectHelper: {
        default() {
          return true
        },
      },

      header: {
        default() {
          return {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          }
        },
      },
      footer: {
        default() {
          return {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          }
        },
      },

      defaultView: {
        default() {
          return 'agendaWeek'
        },
      },

      sync: {
        default() {
          return false
        }
      },

      config: {
        type: Object,
        default() {
          return {}
        },
      },
      initialDate: {
        default() {
          const today = new Date()
          return today
        }
      },
      outline: {
        default() {
          return []
        }
      },
      backgroundColor: {
        default() {
          return []
        }
      }
    },

    data() {
      return {
        multipleDays: []
      }
    },

    computed: {
      defaultConfig() {
        const self = this
        return {
          header: this.header,
          defaultView: this.defaultView,
          editable: this.editable,
          selectable: this.selectable,
          selectHelper: this.selectHelper,
          aspectRatio: 2,
          timeFormat: 'HH:mm',
          events: this.events,
          eventSources: this.eventSources,
          initialDate: this.initialDate,
          outline: this.outline,
          backgroundColor: this.backgroundColor,

          eventRender(...args) {
            if (this.sync) {
              self.events = cal.fullCalendar('clientEvents')
            }
            self.$emit('event-render', ...args)
          },

          eventDestroy(event) {
            if (this.sync) {
              self.events = cal.fullCalendar('clientEvents')
            }
          },

          eventClick(...args) {
            self.$emit('event-selected', ...args)
          },

          eventDrop(...args) {
            self.$emit('event-drop', ...args)
          },

          eventResize(...args) {
            self.$emit('event-resize', ...args)
          },

          dayClick(...args) {
            self.$emit('day-click', ...args)
          },
          select(start, end, jsEvent, view, resource) {
            self.$emit('event-created', {
              start,
              end,
              allDay: !start.hasTime() && !end.hasTime(),
              view,
              resource
            })
          }
        }
      }
    },

    mounted() {
      console.log('FullCalendar.vue mounted')
      const cal = $(this.$el),
        self = this

      this.$on('remove-event', (event) => {
        if (event && event.hasOwnProperty('id')) {
          $(this.$el).fullCalendar('removeEvents', event.id);
        } else {
          $(this.$el).fullCalendar('removeEvents', event);
        }
      })

      this.$on('rerender-events', () => {
        $(this.$el).fullCalendar('rerenderEvents')
      })

      this.$on('refetch-events', () => {
        $(this.$el).fullCalendar('refetchEvents')
      })

      this.$on('render-event', (event) => {
        $(this.$el).fullCalendar('renderEvent', event)
      })

      this.$on('reload-events', () => {
        $(this.$el).fullCalendar('removeEvents')
        $(this.$el).fullCalendar('addEventSource', this.events)
      })

      this.$on('rebuild-sources', () => {
        $(this.$el).fullCalendar('removeEventSources')
        this.eventSources.map(event => {
          $(this.$el).fullCalendar('addEventSource', event)
        })
      })

      this.$on('rebuild-outline', () => {
        const cal = $(this.$el)

        for (let i = 0; i < this.outline.length; i++) {
          if (this.outline[i].border) {
            $(cal).find('td.fc-widget-content[data-date=' + this.outline[i].start.split('T')[0] + ']').css('border', '1px solid' + this.outline[i].color)
          }
        }
      })

      this.$on('rebuild-backgroundColor', () => {
        const cal = $(this.$el)
        for (let i = 0; i < this.backgroundColor.length; i++) {
          $(cal).find('td.fc-widget-content[data-date =' + this.backgroundColor[i].start.split('T')[0] + ']').css('background-color', this.backgroundColor[i].color)
        }
      })

      cal.fullCalendar(defaultsDeep(this.config, this.defaultConfig))
      cal.fullCalendar('gotoDate', this.initialDate)

      $(this.$el).find('td.fc-day-top').on('mouseover', function (e) {
        var coord = $(this).offset();
        var arrow = $('#hover-arrow');
        if (arrow.length == 0)
          arrow = $('<div id="hover-arrow"><i class="material-icons" small style="color: red; !important;">arrow_forward</i></div>')
        $(arrow).css('position', 'absolute')
        $(arrow).css('left', coord.left);
        $(arrow).css('top', coord.top);
        $(arrow).appendTo($('body'));
      });

      this.onTipClicked()
    },

    methods: {
      fireMethod(...options) {
        return $(this.$el).fullCalendar(...options)
      },
      onTipClicked: function () {
        console.log('$$$ on tip clicked function $$$')
        const that = this;
        const cal = $(this.$el);
        $(this.$el).find('.fc-day-top').on('click', function (e) {
          // const date = e.toElement.getAttribute('data-date')
          const date = this.getAttribute('data-date');
          const bgColor = $(cal).find('td.fc-widget-content[data-date =' + date + ']').css('background-color');
          const ColorRecuadroCaja = $(cal).find('td.fc-widget-content[data-date=' + date + ']').css('border-color');
          if(ColorRecuadroCaja === "rgb(255,255,255)"){
            var RecuadroCaja = true
          } else {
            var RecuadroCaja = false
          }
          const index = $(this).parent().find('td').index($(this)) + 1;
          const HPlannedDay = $($(this).closest('table').find('tbody tr td:nth-child(' + index + ')')[0]).find('span.fc-title').text()
          const detailedText = $($(this).closest('table').find('tbody tr td:nth-child(' + index + ')')[1]).find('span.fc-title').text()
          const color = $($(this).closest('table').find('tbody tr td:nth-child(' + index + ')')[0]).find('a').css('color')
          const type = that.backgroundColor[0].type
          var dayInfo = {
            "Type": type,
            "day": date,
            "HPlannedDay": HPlannedDay,
            "detailedText": detailedText,
            "bgColor": bgColor,
            "color": color,
            "RecuadroCaja": false,
            "ColorRecuadroCaja": 0
          }
         if(e.metaKey){
            console.log('ok control')
           that.multipleDays.push(dayInfo)
           console.log(that.multipleDays)
         } else {
            that.multipleDays = []
         }
        })
      }
    },

    watch: {
      initialDate: {
        deep: true,
        handler(val) {
          const cal = $(this.$el);
          cal.fullCalendar('gotoDate', this.initialDate);
          this.$emit('rebuild-outline');
          this.$emit('rebuild-backgroundColor');
          $(this.$el).find('td.fc-day-top').on('mouseover', function (e) {
            var coord = $(this).offset();
            var arrow = $('#hover-arrow');
            if (arrow.length == 0)
              arrow = $('<div id="hover-arrow"><i class="material-icons" small style="color: red; !important;">arrow_forward</i></div>')
            $(arrow).css('position', 'absolute');
            $(arrow).css('left', coord.left);
            $(arrow).css('top', coord.top);
            $(arrow).appendTo($('body'));
          });
          this.onTipClicked();
        }
      },
      events: {
        deep: true,
        handler(val) {
          $(this.$el).fullCalendar('removeEvents')
          $(this.$el).fullCalendar('addEventSource', this.events)
        },
      },
      eventSources: {
        deep: true,
        handler(val) {
          this.$emit('rebuild-sources')
        },
      },
      outline: {
        deep: true,
        handler(val) {
          this.$emit('rebuild-outline')
        }
      },
      backgroundColor: {
        deep: true,
        handler(val) {
          this.$emit('rebuild-backgroundColor')
        }
      },
    },


    beforeDestroy() {
      this.$off('remove-event');
      this.$off('rerender-events');
      this.$off('refetch-events');
      this.$off('render-event');
      this.$off('reload-events');
      this.$off('rebuild-sources');
      this.$off('rebuild-outline');
      this.$off('rebuild-backgroundColor')
    },
  }
</script>
