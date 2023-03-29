<template>
  <main>
    <v-layout row wrap style="width: 80%; margin: 0 auto;" class="table-scroll-enabled-1">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs11>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">8. </span>{{TRANS('Anadir / Editar Convenio')}}</span>
          </v-flex>
          <v-flex xs1 style="text-align: center; padding: 10px;">
            <v-icon color="green">edit</v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mt-4 mb-4"></v-divider>
      </v-flex>
      <v-flex xs12>
        <v-expansion-panel expand >
          <v-expansion-panel-content class="grey lighten-4">
            <div slot="header" style="color: green;">Datos Basicos</div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-card-text>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('1. Jornada anual: horas anuales')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          box
                          v-model="info.basicos.jornada"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('2. Vacaciones Anuales (Dias)')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          box
                          type="number"
                          v-model="info.basicos.vacaciones"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs4 class="pt-4">
                    <v-select
                      :items="items"
                      v-model="e1"
                      :label="TRANS('Dias naturales / laborables')"
                      single-line
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('3. Asuntos propios (Dias)')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          box
                          type="number"
                          v-model="info.basicos.asuntos"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('4. Horas eq. jornada laborable')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          box
                          v-model="info.basicos.horas"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs5 style="display: flex; align-items: center;">
                    <h4 class="pl-4">{{TRANS('5. Trabajo en festivo cuenta en la jornada anual')}}</h4>
                  </v-flex>
                  <v-flex xs4>
                    <v-checkbox
                      v-model="info.basicos.trabajo"
                      color="green"
                      box
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-expansion-panel-content class="grey lighten-4">
            <div slot="header" style="color: green;">Regias marcaje</div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-card-text>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-subheader style="color: green;">Margenes de cortesia</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Minutos maximos cortesia adelante inicio jornada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          type="number"
                          box
                          v-model="info.marcaje.cortesia.ad_inic"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Minutos maximos cortesia adelante fin jornada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          type="number"
                          box
                          v-model="info.marcaje.cortesia.ad_fin"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Minutos maximos cortesia retraso inicio jornada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          type="number"
                          box
                          v-model="info.marcaje.cortesia.ret_inic"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Minutos maximos cortesia retraso fin jornada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          type="number"
                          box
                          v-model="info.marcaje.cortesia.ret_fin"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-subheader style="color: green;">Pausa no retribuida y turnos partidos</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs2>
                        <v-checkbox
                          v-model="info.marcaje.pausa.no_ret"
                          class="pl-3"
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs10>
                        Descontar pausa no retribuida de forma integra siempre
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs2>
                        <v-checkbox
                          v-model="info.marcaje.pausa.turno"
                          class="pl-3"
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs10>
                        Descontar pausa del turno partido de forma integra siempre.
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-subheader style="color: green;">Ambito jornada</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Hora de inicio de ambito jornada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          box
                          v-model="info.marcaje.ambito.inic_de"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">
                          {{TRANS('Minutos minimos adelanto inicio para que cuenten aomo trabajada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          type="number"
                          box
                          v-model="info.marcaje.ambito.inic_para"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Hora de fin de ambito jornada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          box
                          v-model="info.marcaje.ambito.fin_de"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Minutos minimos retraso fin para que cuenten como trabajada')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          type="number"
                          box
                          v-model="info.marcaje.ambito.fin_para"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6>
                    <v-layout row wrap>
                      <v-flex xs9 style="display: flex; align-items: center;">
                        <h4 class="pl-4">{{TRANS('Umbral de verosimilitud')}}</h4>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          type="number"
                          box
                          v-model="info.marcaje.ambito.um_de"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout >
  </main>
</template>

<script>
  export default {
    name: 'EditReglas8',
    data() {
      return {
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ],
        e1: null,
        checkbox: false,
        info: {
          "basicos": {
            "jornada": "1800",
            "vacaciones": 30,
            "asuntos": 30,
            "horas": "1800",
            "trabajo": false
          },
          "marcaje": {
            "cortesia": {
              "ad_inic": 30,
              "ad_fin": 2,
              "ret_inic": 5,
              "ret_fin": 30
            },
            "pausa": {
              "no_ret": false,
              "turno": false
            },
            "ambito": {
              "inic_de": "00:00",
              "inic_para": 2,
              "fin_de": 24,
              "fin_para": 30,
              "um_de": 30
            }
          }
        },
      }
    },
    mounted() {
      console.log('----- Edit Step 8 Mounted -----')
    },
  }
</script>

<style scoped>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 380px) !important;
    overflow: auto;
  }
</style>
