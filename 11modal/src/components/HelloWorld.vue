<template>
  <v-layout style="background-color: green;">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn color="green" dark slot="activator">Open Dialog</v-btn>
      <v-toolbar dark flat style="height: 45px; background-color: green;">
        <v-layout row wrap>
          <v-flex xs4 style="display: flex; align-items: center;">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <div><img style="width: 100px; padding-top: 10px;" src="../assets/logo_bold.png"/></div>
          </v-flex>
          <v-flex xs4 style="display: flex; align-items: center;">
            <h3 class="pl-5" style="text-align: center; padding-top: 10px;">{{TRANS('Asistente de configuracion bold workplanner')}}</h3>
          </v-flex>
          <v-flex xs4 style="display: flex; align-items: center; justify-content: flex-end;">
            <img style="width: 10%; border-radius: 50%;" src="../assets/123123.jpg">
            <h5 class="pl-3">CARLES GPS</h5>
            <v-btn dark flat @click.native="dialog = false">
              <v-icon>save</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-toolbar>
      <v-layout row wrap class="main_layout_height">
        <v-layout row wrap v-if="initScreenEnable">
          <v-flex xs12>
            <InitScreen  style="width: 100%" :click="click"></InitScreen>
          </v-flex>
          <v-flex xs12 class="text-xs-center">
            <v-btn color="green" dark @click="click">i Empezar!</v-btn>
          </v-flex>
        </v-layout>
        <v-stepper alt-labels v-if="wizardEnable" v-model="e1">
          <v-stepper-header style="height: 120px; align-items: center;">
            <v-stepper-step step="1" editable :complete="e1 > 1">{{TRANS('Inicio')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[1]}"></v-divider>
            <v-stepper-step step="2" editable :complete="e1 > 2">{{TRANS('Centros')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[2]}"></v-divider>
            <v-stepper-step step="3" editable :complete="e1 > 3">{{TRANS('Relojes')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[3]}"></v-divider>
            <v-stepper-step step="4" editable :complete="e1 > 4">{{TRANS('Festivos')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[4]}"></v-divider>
            <v-stepper-step step="5" editable :complete="e1 > 5">{{TRANS('Incidencias')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[5]}"></v-divider>
            <v-stepper-step step="6" editable :complete="e1 > 6">{{TRANS('Turnos')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[6]}"></v-divider>
            <v-stepper-step step="7" editable :complete="e1 > 7">{{TRANS('Ciclos')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[7]}"></v-divider>
            <v-stepper-step step="8" editable :complete="e1 > 8">{{TRANS('Convenios')}}</v-stepper-step>
            <v-divider v-bind:class="{divider_active: isActive[8]}"></v-divider>
            <v-stepper-step step="9" editable>{{TRANS('Empleados')}}</v-stepper-step>
          </v-stepper-header>
          <v-progress-linear style="margin: 0px" value="50" height="3" color="error"
                             background-color="success"></v-progress-linear>
          <v-stepper-items style="height: calc(100% - 110px)">
            <v-stepper-content class="px-0 pt-0" step="1">
              <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                <InitialConfig1></InitialConfig1>
              </v-card>
              <v-layout row wrap>
                <v-flex xs6 style="text-align: center">
                  <v-btn medium flat outline color="green" @click.native="e1 = 9">
                    <v-icon dark left>arrow_back</v-icon>
                    {{TRANS('Atras')}}
                  </v-btn>
                </v-flex>
                <v-flex xs6 style="text-align: center">
                  <v-btn medium color="green" dark @click.native="e1 = 2">{{TRANS('Siguiente')}}
                    <v-icon dark left>arrow_forward</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="2">
              <div v-if="!editStatus" style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <Centro2 :editItem="editItem" :addItem="addItem"></Centro2>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs6 style="text-align: center;">
                    <v-btn medium flat outline color="green" @click.native="e1 = 1">
                      <v-icon dark left>arrow_back</v-icon>
                      {{TRANS('Atras')}}
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 style="text-align: center;">
                    <v-btn medium color="green" dark @click.native="e1 = 3">{{TRANS('Siguiente')}}
                      <v-icon dark left>arrow_forward</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <div v-else style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <EditCentro2></EditCentro2>
                </v-card>
                <v-layout row wrap style="width: 72%; margin: 0 auto;">
                  <v-flex xs12 style="text-align: left;">
                    <v-btn color="green" dark medium @click.native="save">{{TRANS('Guradar')}}
                    </v-btn>
                    <v-btn medium @click.native="cancel">{{TRANS('Cancelar')}}</v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="3">
              <div v-if="!editStatus" style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <Prelojes3 :editItem="editItem" :addItem="addItem"></Prelojes3>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium flat outline color="green" @click.native="e1 = 2">
                      <v-icon dark left>arrow_back</v-icon>
                      {{TRANS('Atras')}}
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium color="green" dark @click.native="e1 = 4">{{TRANS('Siguiente')}}
                      <v-icon dark left>arrow_forward</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <div v-else style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <EditPrelojes3 :rowInfo="rowInfo"></EditPrelojes3>
                </v-card>
                <v-layout row wrap style="width: 72%; margin: 0 auto;">
                  <v-flex xs12 style="text-align: left;">
                    <v-btn color="green" dark medium @click.native="save">{{TRANS('Guradar')}}
                    </v-btn>
                    <v-btn medium @click.native="cancel">{{TRANS('Cancelar')}}</v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="4">
              <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                <Festivos4></Festivos4>
              </v-card>
              <v-layout row wrap>
                <v-flex xs6 style="text-align: center">
                  <v-btn medium flat outline color="green" @click.native="e1 = 3">
                    <v-icon dark left>arrow_back</v-icon>
                    {{TRANS('Atras')}}
                  </v-btn>
                </v-flex>
                <v-flex xs6 style="text-align: center">
                  <v-btn medium color="green" dark @click.native="e1 = 5">{{TRANS('Siguiente')}}
                    <v-icon dark left>arrow_forward</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="5">
              <div v-if="!editStatus" style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <Tipos5 :editItem="editItem" :addItem="addItem"></Tipos5>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium flat outline color="green" @click.native="e1 = 4">
                      <v-icon dark left>arrow_back</v-icon>
                      {{TRANS('Atras')}}
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium color="green" dark @click.native="e1 = 6">{{TRANS('Siguiente')}}
                      <v-icon dark left>arrow_forward</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <div v-else style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <EditTipos5></EditTipos5>
                </v-card>
                <v-layout row wrap style="width: 72%; margin: 0 auto;">
                  <v-flex xs12 style="text-align: left;">
                    <v-btn color="green" dark medium @click.native="save">{{TRANS('Guradar')}}
                    </v-btn>
                    <v-btn medium @click.native="cancel">{{TRANS('Cancelar')}}</v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="6">
              <div v-if="!editStatus" style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <Horarios6 :editItem="editItem" :addItem="addItem"></Horarios6>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium flat outline color="green" @click.native="e1 = 5">
                      <v-icon dark left>arrow_back</v-icon>
                      {{TRANS('Atras')}}
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium color="green" dark @click.native="e1 = 7">{{TRANS('Siguiente')}}
                      <v-icon dark left>arrow_forward</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <div v-else style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <EditHorarios6></EditHorarios6>
                </v-card>
                <v-layout row wrap style="width: 72%; margin: 0 auto;">
                  <v-flex xs12 style="text-align: left;">
                    <v-btn color="green" dark medium @click.native="save">{{TRANS('Guradar')}}
                    </v-btn>
                    <v-btn medium @click.native="cancel">{{TRANS('Cancelar')}}</v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="7">
              <div v-if="!editStatus" style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <Ciclos7 :editItem="editItem" :addItem="addItem"></Ciclos7>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium flat outline color="green" @click.native="e1 = 6">
                      <v-icon dark left>arrow_back</v-icon>
                      {{TRANS('Atras')}}
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium color="green" dark @click.native="e1 = 8">{{TRANS('Siguiente')}}
                      <v-icon dark left>arrow_forward</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <div v-else style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <EditCiclos7></EditCiclos7>
                </v-card>
                <v-layout row wrap style="width: 72%; margin: 0 auto;">
                  <v-flex xs12 style="text-align: left;">
                    <v-btn color="green" dark medium @click.native="save">{{TRANS('Guradar')}}
                    </v-btn>
                    <v-btn medium @click.native="cancel">{{TRANS('Cancelar')}}</v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="8">
              <div v-if="!editStatus" style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <Reglas8 :editItem="editItem" :addItem="addItem"></Reglas8>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium flat outline color="green" @click.native="e1 = 7">
                      <v-icon dark left>arrow_back</v-icon>
                      {{TRANS('Atras')}}
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium color="green" dark @click.native="e1 = 9">{{TRANS('Siguiente')}}
                      <v-icon dark left>arrow_forward</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <div v-else style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <EditReglas8></EditReglas8>
                </v-card>
                <v-layout row wrap style="width: 82%; margin: 0 auto;">
                  <v-flex xs12 style="text-align: left;">
                    <v-btn color="green" dark medium @click.native="save">{{TRANS('Guradar')}}
                    </v-btn>
                    <v-btn medium @click.native="cancel">{{TRANS('Cancelar')}}</v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-stepper-content>

            <v-stepper-content class="px-0 pt-0" step="9">
              <div v-if="!editStatus" style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <Empleados9 :editItem="editItem" :addItem="addItem"></Empleados9>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium flat outline color="green" @click.native="e1 = 8">
                      <v-icon dark left>arrow_back</v-icon>
                      {{TRANS('Atras')}}
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 style="text-align: center">
                    <v-btn medium color="green" dark @click.native="e1 = 1">{{TRANS('Siguiente')}}
                      <v-icon dark left>arrow_forward</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <div v-else style="height: 100%;">
                <v-card color="grey lighten-3" class="mb-2 stepper-first-card">
                  <EditEmpleados9></EditEmpleados9>
                </v-card>
                <v-layout row wrap style="width: 82%; margin: 0 auto;">
                  <v-flex xs12 style="text-align: left;">
                    <v-btn color="green" dark medium @click.native="save">{{TRANS('Guradar')}}
                    </v-btn>
                    <v-btn medium @click.native="cancel">{{TRANS('Cancelar')}}</v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-layout>
    </v-dialog>
  </v-layout>
</template>

<script>
  import InitScreen from './InitScreen.vue'
  import InitialConfig1 from './InitialConfig1.vue'
  import EditInitialConfig1 from './EditInitialConfig1.vue'
  import Centro2 from './Centro2.vue'
  import EditCentro2 from './EditCentro2.vue'
  import Prelojes3 from './Prelojes3.vue'
  import EditPrelojes3 from './EditPrelojes3.vue'
  import Festivos4 from './Festivos4.vue'
  import EditFestivos4 from './EditFestivos4.vue'
  import Tipos5 from './Tipos5.vue'
  import EditTipos5 from './EditTipos5.vue'
  import Horarios6 from './Horarios6.vue'
  import EditHorarios6 from './EditHorarios6.vue'
  import Ciclos7 from './Ciclos7.vue'
  import EditCiclos7 from './EditCiclos7.vue'
  import Reglas8 from './Reglas8.vue'
  import EditReglas8 from './EditReglas8.vue'
  import Empleados9 from './Empleados9.vue'
  import EditEmpleados9 from './EditEmpleados9.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        dialog: true,
        initScreenEnable: true,
        wizardEnable: false,
        e1: 0,
        editStatus: false,
        rowInfo: {},
        isActive: [],
      }
    },
    mounted() {
      console.log('----- Main Modal Mounted -----')

      for (let i = 1; i < 9; i++) {
        this.isActive[i] = false
      }
    },
    components: {
      InitScreen,
      InitialConfig1,
      Centro2,
      Prelojes3,
      Festivos4,
      Tipos5,
      Horarios6,
      Ciclos7,
      Reglas8,
      Empleados9,
      EditInitialConfig1,
      EditCentro2,
      EditPrelojes3,
      EditFestivos4,
      EditTipos5,
      EditHorarios6,
      EditCiclos7,
      EditReglas8,
      EditEmpleados9
    },
    watch: {
      e1: function (v) {
        for (var i = 1; i < 9; i++) {
          if (i < v) {
            this.isActive[i] = true
          } else {
            this.isActive[i] = false
          }
        }
      }
    },
    methods: {
      click: function () {
        this.initScreenEnable = false
        this.wizardEnable = true
      },
      editItem: function (item) {
        this.rowInfo = item
        this.editStatus = true
      },
      save: function () {
        this.editStatus = false
      },
      cancel: function () {
        this.editStatus = false
      },
      addItem: function () {
        console.log('@@ Function to Add New Item @@')
        this.rowInfo = {}
        this.editStatus = true
      }
    }
  }
</script>

<style>
  .main_layout_height {
    height: calc(100vh - 125px) !important;
    background-color: white;
    margin: 27px;
    overflow: auto;
  }

  .main_layout_height, .stepper, .stepper__items, .stepper__content, .stepper__wrapper {
    height: 100%;
  }

  .main_layout_height .stepper .stepper__header .stepper__step .stepper__step__step {
    width: 45px;
    height: 45px;
    background-color: ghostwhite !important;
    font-size: 20px;
    color: green;
    -webkit-box-shadow: 1px 1px 11px -1px rgba(131, 127, 138, 1);
    -moz-box-shadow: 1px 1px 11px -1px rgba(131, 127, 138, 1);
    box-shadow: 1px 1px 11px -1px rgba(131, 127, 138, 1);
  }

  .main_layout_height .stepper .stepper__header .stepper__step {
    padding-top: 1%;
  }

  .main_layout_height .stepper .stepper__header .stepper__step--complete .stepper__step__step {
    width: 45px;
    height: 45px;
    background-color: #cdda8d !important;
    font-size: 20px;
    color: green;
    -webkit-box-shadow: 1px 1px 11px -1px rgba(131, 127, 138, 1);
    -moz-box-shadow: 1px 1px 11px -1px rgba(131, 127, 138, 1);
    box-shadow: 1px 1px 11px -1px rgba(131, 127, 138, 1);
  }

  .stepper__content > div {
    height: 100%;
  }

  .stepper-first-card {
    padding-top: 30px !important;
    height: 88% !important;
    overflow-y: scroll !important;
  }

  .main_layout_height .stepper {
    width: 100%;
  }

  .divider_active {
    background: green !important;
    height: 3px;
  }
</style>
