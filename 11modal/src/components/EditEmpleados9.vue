<template>
  <main>
    <v-layout row wrap style="width: 80%; margin: 0 auto;" class="table-scroll-enabled-1">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs11>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">9. </span>{{TRANS('Anadir / Editar Empleado')}}</span>
          </v-flex>
          <v-flex xs1 style="text-align: center; padding: 10px;">
            <v-icon color="green">edit</v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mt-4 mb-4"></v-divider>
      </v-flex>
      <v-flex xs12>
        <v-expansion-panel expand >
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i" :value="item === 1"
                                     class="grey lighten-4">
            <div slot="header" style="color: green;">{{TRANS('Paso 1: Datos Basicos')}}</div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-layout row wrap>
                      <v-flex xs3>
                        <v-card-text>
                          <v-checkbox
                            :label="TRANS('Copiar de otro empleado')"
                            v-model="info.paso1.copiar"
                            color="green"
                          ></v-checkbox>
                        </v-card-text>
                      </v-flex>
                      <v-flex xs9>
                        <v-select
                          :items="elegirItems"
                          item-text="text"
                          item-value="value"
                          v-model="info.paso1.elegir"
                          :label="TRANS('Elegir empleado')"
                        ></v-select>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    <v-layout row wrap>
                      <v-flex xs7>
                        <v-layout row wrap>
                          <v-flex xs10>
                            <v-text-field
                              box
                              :label="TRANS('Codigo')"
                              v-model="info.paso1.codigo"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 style="padding-top: 33px; padding-left: 10px;">
                            <v-tooltip bottom style="margin-left: -45px;">
                              <i class="fa fa-question-circle" slot="activator"
                                 style="font-size:25px;color:green;"></i>
                              <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                                      Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                                      Relleno estandar de las industrias de ano 1500. cuando<br>
                                      un impresor (N. del T. persona que se decica a la imprenta)<br>
                                      desconocido use una galeria de textos y los meaclo de tal<br></span>
                            </v-tooltip>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs5>
                        <v-text-field
                          box
                          v-model="info.paso1.dni"
                          :label="TRANS('DNI')"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      box
                      v-model="info.paso1.nombre"
                      :label="TRANS('Nombre y apellidos')"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-select
                      :items="categoriaItems"
                      item-text="text"
                      item-value="value"
                      v-model="info.paso1.categoria"
                      :label="TRANS('Categoria profesional')"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-expansion-panel-content class="grey lighten-4">
            <div slot="header" style="color: green;">{{TRANS('Paso 2')}}</div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-layout row wrap>
                      <v-flex xs1 style="text-align: center;" class="pt-5">
                        <h3>{{TRANS('Alta')}}</h3>
                      </v-flex>
                      <v-flex xs3>
                        <v-card-text>
                          <v-menu
                            ref="menu2"
                            lazy
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            full-width
                            v-model="menu2"
                            :nudge-right="40"
                            min-width="290px"
                            :return-value.sync="info.paso2.date2"
                          >
                            <v-text-field
                              slot="activator"
                              v-model="info.paso2.date2"
                              append-icon="event"
                              readonly
                              box
                            ></v-text-field>
                            <v-date-picker v-model="info.paso2.date2"
                                           color="green lighten-1"
                                           @input="$refs.menu2.save(info.paso2.date2)"></v-date-picker>

                          </v-menu>
                        </v-card-text>
                      </v-flex>
                      <v-flex xs1 style="text-align: center;" class="pt-5">
                        <h3>{{TRANS('Baja')}}</h3>
                      </v-flex>
                      <v-flex xs3>
                        <v-card-text>
                          <v-menu
                            ref="menu3"
                            lazy
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            full-width
                            v-model="menu3"
                            :nudge-right="40"
                            min-width="290px"
                            :return-value.sync="info.paso2.date3"
                          >
                            <v-text-field
                              slot="activator"
                              v-model="info.paso2.date3"
                              append-icon="event"
                              readonly
                              box
                            ></v-text-field>
                            <v-date-picker v-model="info.paso2.date3"
                                           color="green lighten-1"
                                           @input="$refs.menu3.save(info.paso2.date3)"></v-date-picker>

                          </v-menu>
                        </v-card-text>
                      </v-flex>
                      <v-flex xs1 style="text-align: center;" class="pt-5">
                        <h3>{{TRANS('Centro')}}</h3>
                      </v-flex>
                      <v-flex xs3>
                        <v-card-text>
                          <v-select
                            :items="centroItems"
                            v-model="info.paso2.centro"
                            :label="TRANS('BCN')"
                            class="pt-4"
                            box
                          ></v-select>
                        </v-card-text>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-card-text>
                      <v-checkbox
                        :label="TRANS('Trabajo en festivos')"
                        v-model="info.paso2.trabajo"
                        color="green"
                      ></v-checkbox>
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-expansion-panel-content class="grey lighten-4">
            <div slot="header" style="color: green;">{{TRANS('Paso 3: Asignar ciclo')}}</div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-layout row wrap>
                      <v-flex xs6>
                        <v-card-text>
                          <v-select
                            :items="cicloItems"
                            v-model="info.paso3.ciclo"
                            :label="TRANS('Ciclo')"
                          ></v-select>
                        </v-card-text>
                      </v-flex>
                      <v-flex xs2 class="pt-3">
                        <v-card-text>
                          <h3>{{TRANS('Posicion de inicio')}}</h3>
                        </v-card-text>
                      </v-flex>
                      <v-flex xs1 style="padding-top: 33px;">
                        <v-tooltip bottom>
                          <i class="fa fa-question-circle" slot="activator"
                             style="font-size:25px;color:green;"></i>
                          <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                        </v-tooltip>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          v-model="info.paso3.inicio"
                          type="number"
                          class="pt-4"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    <v-data-table
                      v-bind:headers="headers"
                      :items="formattedData"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <tr>
                          <td class="text-xs-center" style="width: 12%;">
                            <v-menu
                              :ref="'tmenu' + props.item.cal.id"
                              lazy
                              :close-on-content-click="false"
                              v-model="props.item.cal.tmenu"
                              transition="scale-transition"
                              offset-y
                              full-width
                              :nudge-right="40"
                              min-width="290px"
                              :return-value.sync="props.item.cal.tdate"
                            >
                              <v-text-field
                                slot="activator"
                                v-model="props.item.cal.tdate"
                                readonly
                              ></v-text-field>
                              <v-date-picker color="green" v-model="props.item.cal.tdate"
                                             @input="$refs['tmenu'+props.item.cal.id].save(props.item.cal.tdate)"></v-date-picker>

                            </v-menu>
                          </td>
                          <td class="text-xs-center">{{props.item.Semana}}</td>

                          <td class="text-xs-left">

                            <v-edit-dialog
                              :return-value.sync="props.item.L.value"
                              lazy
                              style="width: 40%;"
                            > {{props.item.L.value}}
                              <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.L.value"
                                single-line
                                counter
                                :rules="[max25chars]"
                              ></v-text-field>
                            </v-edit-dialog>

                            <v-tooltip right>
                              <v-btn v-if="props.item.L.pause === 'P'" fab
                                     style="height: 20px; width: 20px;" slot="activator"
                                     dark
                                     color="red">p
                              </v-btn>
                              <span>{{TRANS('Informacion de la pausa')}}</span>
                            </v-tooltip>
                          </td>

                          <td class="text-xs-left">

                            <v-edit-dialog
                              :return-value.sync="props.item.M.value"
                              lazy
                              style="width: 40%;"
                            > {{props.item.M.value}}
                              <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.M.value"
                                single-line
                                counter
                                :rules="[max25chars]"
                              ></v-text-field>
                            </v-edit-dialog>
                            <v-tooltip right>
                              <v-btn v-if="props.item.M.pause === 'P'" fab
                                     style="height: 20px; width: 20px;" slot="activator"
                                     dark
                                     color="red">p
                              </v-btn>
                              <span>{{TRANS('Informacion de la pausa')}}</span>
                            </v-tooltip>
                          </td>

                          <td class="text-xs-left">
                            <v-edit-dialog
                              :return-value.sync="props.item.Mi.value"
                              lazy
                              style="width: 40%;"
                            > {{props.item.Mi.value}}
                              <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.Mi.value"
                                single-line
                                counter
                                :rules="[max25chars]"
                              ></v-text-field>
                            </v-edit-dialog>
                            <v-tooltip right>
                              <v-btn v-if="props.item.Mi.pause === 'P'" fab
                                     style="height: 20px; width: 20px;" slot="activator"
                                     dark
                                     color="red">p
                              </v-btn>
                              <span>{{TRANS('Informacion de la pausa')}}</span>
                            </v-tooltip>
                          </td>

                          <td class="text-xs-left">
                            <v-edit-dialog
                              :return-value.sync="props.item.J.value"
                              lazy
                              style="width: 40%;"
                            > {{props.item.J.value}}
                              <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.J.value"
                                single-line
                                counter
                                :rules="[max25chars]"
                              ></v-text-field>
                            </v-edit-dialog>
                            <v-tooltip right>
                              <v-btn v-if="props.item.J.pause === 'P'" fab
                                     style="height: 20px; width: 20px;" slot="activator"
                                     dark
                                     color="red">p
                              </v-btn>
                              <span>{{TRANS('Informacion de la pausa')}}</span>
                            </v-tooltip>
                          </td>

                          <td class="text-xs-left">
                            <v-edit-dialog
                              :return-value.sync="props.item.V.value"
                              lazy
                              style="width: 40%;"
                            > {{props.item.V.value}}
                              <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.V.value"
                                single-line
                                counter
                                :rules="[max25chars]"
                              ></v-text-field>
                            </v-edit-dialog>
                            <v-tooltip right>
                              <v-btn v-if="props.item.V.pause === 'P'" fab
                                     style="height: 20px; width: 20px;" slot="activator"
                                     dark
                                     color="red">p
                              </v-btn>
                              <span>{{TRANS('Informacion de la pausa')}}</span>
                            </v-tooltip>
                          </td>

                          <td class="text-xs-left">
                            <v-edit-dialog
                              :return-value.sync="props.item.S.value"
                              lazy
                              style="width: 40%;"
                            > {{props.item.S.value}}
                              <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.S.value"
                                single-line
                                counter
                                :rules="[max25chars]"
                              ></v-text-field>
                            </v-edit-dialog>
                            <v-tooltip right>
                              <v-btn v-if="props.item.S.pause === 'P'" fab
                                     style="height: 20px; width: 20px;" slot="activator"
                                     dark
                                     color="red">p
                              </v-btn>
                              <span>{{TRANS('Informacion de la pausa')}}</span>
                            </v-tooltip>
                          </td>

                          <td class="text-xs-left">
                            <v-edit-dialog
                              :return-value.sync="props.item.D.value"
                              lazy
                              style="width: 40%;"
                            > {{props.item.D.value}}
                              <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.D.value"
                                single-line
                                counter
                                :rules="[max25chars]"
                              ></v-text-field>
                            </v-edit-dialog>
                            <v-tooltip right>
                              <v-btn v-if="props.item.D.pause === 'P'" fab
                                     style="height: 20px; width: 20px;" slot="activator"
                                     dark
                                     color="red">p
                              </v-btn>
                              <span>{{TRANS('Informacion de la pausa')}}</span>
                            </v-tooltip>
                          </td>
                        </tr>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
  import json from '../Json/EditCiclos7.json'

  export default {
    name: 'EditEmpleados9',
    data() {
      return {
        headers: [],
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        menu4: false,
        date4: null,
        formattedData: [],
        tableData: json.weeks,
        HTMLcontent: ``,
        date: null,
        modal: false,
        elegirItems: [
          {text: 'Elegir empleado', value: 'Elegir empleado'},
          {text: 'Elegir empleado1', value: 'Elegir empleado1'},
          {text: 'Elegir empleado2', value: 'Elegir empleado2'},
          {text: 'Elegir empleado3', value: 'Elegir empleado3'},
          {text: 'Elegir empleado4', value: 'Elegir empleado4'},
          {text: 'Elegir empleado5', value: 'Elegir empleado5'},
          {text: 'Elegir empleado6', value: 'Elegir empleado6'}
        ],
        categoriaItems: [
          {text: 'Categoria professional', value: 'Categoria professional'},
          {text: 'Categoria professional1', value: 'Categoria professional1'},
          {text: 'Categoria professional2', value: 'Categoria professional2'},
          {text: 'Categoria professional3', value: 'Categoria professional3'},
          {text: 'Categoria professional4', value: 'Categoria professional4'},
        ],
        centroItems: [
          {text: 'BCN', value: 'BCN'},
          {text: 'TGN', value: 'TGN'}
        ],
        cicloItems: [
          {text: 'Ciclo', value: 'Ciclo'},
          {text: 'Ciclo1', value: 'Ciclo1'}
        ],
        text: '',
        menu2: false,
        menu3: false,
        console: window.console,
        info: {
          paso1: {
            copiar: true,
            elegir: 'Elegir empleado',
            codigo: 'Codigo',
            dni: "DNI",
            nombre: 'Nombre y apellidos',
            categoria: 'Categoria professional'
          },
          paso2: {
            date2: null,
            date3: null,
            trabajo: false,
            centro: 'BCN'
          },
          paso3: {
            ciclo: 'Ciclo',
            inicio: 3
          }
        }
      }
    },
    mounted() {
      console.log('----- Edit Step 9 Mounted -----')
      this.headers = [
        {text: 'Fecha inicio', align: 'center', sortable: false, value: ''},
        {text: 'Semana', align: 'center', sortable: true, value: 'Semana'},
        {text: 'L', align: 'left', sortable: true, value: 'L'},
        {text: 'M', align: 'left', sortable: true, value: 'M'},
        {text: 'Mi', align: 'left', sortable: true, value: 'Mi'},
        {text: 'J', align: 'left', sortable: true, value: 'J'},
        {text: 'V', align: 'left', sortable: true, value: 'V'},
        {text: 'S', align: 'left', sortable: true, value: 'S'},
        {text: 'D', align: 'left', sortable: true, value: 'D'},
      ]
      this.tableData = json.weeks
      const that = this
      this.HTMLcontent = `<i class="fa fa-question-circle" slot="activator" style="font-size:15px;color:sandybrown;"></i>`
      this.tableData.map((item, i) => {
        let data = {}
        data.Semana = i + 1
        data.L = {'value': item[0].text, 'pause': item[0].pause, 'tag': that.HTMLcontent}
        data.M = {'value': item[1].text, 'pause': item[1].pause, 'tag': that.HTMLcontent}
        data.Mi = {'value': item[2].text, 'pause': item[2].pause, 'tag': that.HTMLcontent}
        data.J = {'value': item[3].text, 'pause': item[3].pause, 'tag': that.HTMLcontent}
        data.V = {'value': item[4].text, 'pause': item[4].pause, 'tag': that.HTMLcontent}
        data.S = {'value': item[5].text, 'pause': item[5].pause, 'tag': that.HTMLcontent}
        data.D = {'value': item[6].text, 'pause': item[6].pause, 'tag': that.HTMLcontent}
        data.cal = {'id': i, 'tdate': null, 'tmenu': false }
        that.formattedData.push(data)
      })
    },
    methods: {
      input: function(v) {
        console.log(v)
      }
    }
  }
</script>

<style scoped>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 380px) !important;
    overflow: auto;
  }
</style>
