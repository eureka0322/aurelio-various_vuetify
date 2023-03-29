<template>
  <main>
    <v-layout row wrap style="width: 80%; margin: 0 auto;" class="table-scroll-enabled-1">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs10>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">4. </span>{{TRANS('Festivos')}}</span>
          </v-flex>
          <v-flex xs2>
            <v-layout row wrap>
              <v-flex xs3 style="display: flex; align-items: center;">
                <h3>Ver</h3>
              </v-flex>
              <v-flex xs9>
                <v-select
                  :items="items"
                  v-model="e1"
                  label="Todos"
                  single-line
                ></v-select>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-divider class="mb-3"></v-divider>
      </v-flex>
      <v-flex xs12>
        <v-expansion-panel expand>
          <v-expansion-panel-content class="grey lighten-4 pl-2">
            <div slot="header"><h3>FESTIVOS COMUNES</h3></div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
                <v-layout row wrap>
                  <template v-for="cal in cals">
                    <v-flex xs3>
                      <v-layout row wrap>
                        <v-flex xs9>
                          <v-menu
                            :ref="'menu' + cal.id"
                            lazy
                            :close-on-content-click="false"
                            v-model="cal.menu"
                            transition="scale-transition"
                            offset-y
                            full-width
                            :nudge-right="40"
                            min-width="290px"
                            :return-value.sync="cal.date"
                          >
                            <v-text-field
                              slot="activator"
                              label="Picker without buttons"
                              v-model="cal.date"
                              prepend-icon="event"
                              readonly
                            ></v-text-field>
                            <v-date-picker color="green" v-model="cal.date"
                                           @input="$refs['menu' + cal.id][0].save(cal.date)"></v-date-picker>

                          </v-menu>
                        </v-flex>
                        <v-flex xs3>
                          <v-btn
                            color="green"
                            dark
                            small
                            absolute
                            fab
                            :key="cal.id"
                            @click="closePicker(cal.id)"
                            style="width:30px; height: 30px; margin-left: -16px;"
                          >
                            <v-icon small>close</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </template>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn dark color="green" @click="plus()">{{TRANS('+Anadir festivo')}}</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-expansion-panel-content class="grey lighten-4 pl-2">
            <div slot="header"><h3>FESTIVOS BCN</h3></div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
                <v-layout row wrap>
                  <template v-for="picker in pickers">
                    <v-flex xs3>
                      <v-layout row wrap>
                        <v-flex xs12 v-if="picker.pickerStatus">
                          <v-card-text>
                            <v-date-picker color="green lighten-1" v-model="picker.pdate"
                                           @input="pickerClick(picker)" width="100%"></v-date-picker>
                          </v-card-text>
                        </v-flex>
                        <v-flex xs12 v-else>
                          <v-layout row wrap>
                            <v-flex xs9>
                              <v-menu
                                :ref="'pmenu' + picker.pid"
                                lazy
                                :close-on-content-click="false"
                                v-model="picker.pmenu"
                                transition="scale-transition"
                                offset-y
                                full-width
                                :nudge-right="40"
                                min-width="290px"
                                :return-value.sync="picker.pdate"
                              >
                                <v-text-field
                                  slot="activator"
                                  v-model="picker.pdate"
                                  prepend-icon="event"
                                  readonly
                                ></v-text-field>
                                <v-date-picker color="green" v-model="picker.pdate"
                                               @input="$refs['pmenu' + picker.pid][0].save(picker.pdate)"></v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs3>
                              <v-btn
                                color="green"
                                dark
                                small
                                absolute
                                fab
                                :key="picker.pid"
                                @click="closePickerCal(picker.pid)"
                                style="width:30px; height: 30px; margin-left: -16px;"
                              >
                                <v-icon small>close</v-icon>
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </template>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn dark color="green" @click="pickerPlus()">{{TRANS('+picker plus festivo')}}</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-expansion-panel-content class="grey lighten-4 pl-2">
            <div slot="header"><h3>FESTIVOS TGN</h3></div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-expansion-panel-content class="grey lighten-4 pl-2">
            <div slot="header"><h3>FESTIVOS LLE</h3></div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">

              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>

  </main>

</template>

<script>
  export default {
    name: 'Festivos4',
    data() {
      return {
        e1: null,
        picker: null,
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ],
        modal: false,
        n: 0,
        cals: [],
        pickers: [],
        console: window.console,
      }
    },
    mounted() {
      console.log('----- Step 4 Mounted -----')
      this.createCalendar()
      this.createPickers()
    },
    methods: {
      plus: function () {
        let i = this.n + 1
        this.n = this.n + 1
        this.cals.push({
          id: i,
          date: null,
          menu: false
        })
        this.n = this.cals.length
      },
      closePicker: function (i) {
        this.cals = this.cals.filter(item => item.id !== i)
        this.n = this.cals.length
      },
      closePickerCal: function (i) {
        this.pickers = this.pickers.filter(item => item.pid !== i)
        this.n = this.pickers.length
      },
      createCalendar: function () {
        for (let i = 1; i < this.n + 1; i++) {
          this.cals.push({
            id: i,
            date: null,
            menu: false
          });
        }
      },
      createPickers: function () {
        for (let i = 1; i < this.n + 1; i++) {
          this.pickers.push({
            pid: i,
            pdate: null,
            pmenu: false,
            pickerStatus: true
          });
        }
      },
      pickerPlus: function () {
        console.log('picker plus function')
        let i = this.n + 1
        this.n = this.n + 1
        this.pickers.push({
          pid: i,
          pdate: null,
          pmenu: false,
          pickerStatus: true
        })
        this.n = this.pickers.length
      },
      pickerClick: function (v) {
        v.pickerStatus = !v.pickerStatus
      }
    }
  }
</script>

<style>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 380px) !important;
    overflow: auto;
  }

  /*.picker .picker__body {*/
  /*width: 100% !important;*/
  /*}*/
</style>
