<template>
  <div ref="calendar" id="calendar"></div>
</template>

<script>
  import defaultsDeep from 'lodash.defaultsdeep'
  import 'fullcalendar'
  import $ from 'jquery'

  export default {
    name: 'NewFullCalendar',
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

      initialDate:{
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
      },

      onHint: {
        default() {
          return () => {}
        }
      }
    },
    data() {
      return {
        multidays: []
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
          onHint: this.onHint,


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
            self.onHint(args, self.events)
            self.$emit('day-click', args)
            if(args[1].metaKey || args[1].ctrlKey){
              self.multidays.push(args[0]._d)
              console.log(self.multidays)
            }
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
      },
    },

    mounted() {

      console.log('--- 1.newFullCalendar.vue mounted ---')
      const that = this
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
            $(cal).find('td.fc-widget-content[data-date=' + this.outline[i].start.split('T')[0] + ']').css('border', '3px solid' + this.outline[i].color)
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
          arrow = $('<div id="hover-arrow"><i class="material-icons" style="color:red !important; font-size:15px;">arrow_forward</i></div>')
        $(arrow).appendTo($(this));
      });

    },

    methods: {
      fireMethod(...options) {
        return $(this.$el).fullCalendar(...options)
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
          this.onHint();
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
      dayClick: function (date) {
        alert('clicked ' + date.format());
      },
    },

    beforeDestroy() {
      this.$off('remove-event')
      this.$off('rerender-events')
      this.$off('refetch-events')
      this.$off('render-event')
      this.$off('reload-events')
      this.$off('rebuild-sources')
      this.$off('rebuild-outline')
      this.$off('rebuild-backgroundColor')
    },
  }
</script>
<style>

</style>
