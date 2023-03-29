<template>
  <main>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs11>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">7. </span>{{TRANS('Editar/Anadir Ciclos horarios')}}</span>
          </v-flex>
          <v-flex xs1 style="text-align: center; padding: 10px;">
            <v-icon color="green">edit</v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mt-3 mb-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout column>
          <v-flex>
            <v-card-text
              v-text="lorem">
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs11>
            <v-text-field
              box
              :label="TRANS('Codigo')"
            ></v-text-field>
          </v-flex>
          <v-flex xs1 style="padding-top: 33px; padding-left: 10px;">
            <v-tooltip bottom style="margin-left: -45px;">
              <i class="fa fa-question-circle" slot="activator" style="font-size:25px;color:green;"></i>
              <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs11>
            <v-text-field
              box
              :label="TRANS('Descripcion')"
            ></v-text-field>
          </v-flex>
          <v-flex xs1 style="padding-top: 33px; padding-left: 10px;">
            <v-tooltip bottom style="margin-left: -45px;">
              <i class="fa fa-question-circle" slot="activator" style="font-size:25px;color:green;"></i>
              <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-toolbar flat color="whitesmoke" height="110px">
          <v-toolbar-title>
            <v-card-text>
              <h5>{{TRANS('N Semanas')}}</h5>
            </v-card-text>
          </v-toolbar-title>
          <v-toolbar-items>
            <v-flex xs4 class="pt-4">
              <v-text-field
                box
                singleLine
                type="number"
                v-model="rowNum"
              ></v-text-field>
            </v-flex>
          </v-toolbar-items>
        </v-toolbar>
        <v-data-table
          v-bind:headers="headers"
          :items="formattedData"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <tr>
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
                  <v-btn v-if="props.item.L.pause === 'P'" fab style="height: 20px; width: 20px;" slot="activator"
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
                  <v-btn v-if="props.item.M.pause === 'P'" fab style="height: 20px; width: 20px;" slot="activator"
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
                  <v-btn v-if="props.item.Mi.pause === 'P'" fab style="height: 20px; width: 20px;" slot="activator"
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
                  <v-btn v-if="props.item.J.pause === 'P'" fab style="height: 20px; width: 20px;" slot="activator"
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
                  <v-btn v-if="props.item.V.pause === 'P'" fab style="height: 20px; width: 20px;" slot="activator"
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
                  <v-btn v-if="props.item.S.pause === 'P'" fab style="height: 20px; width: 20px;" slot="activator"
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
                  <v-btn v-if="props.item.D.pause === 'P'" fab style="height: 20px; width: 20px;" slot="activator"
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
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs11>
            <v-text-field
              box
              :label="TRANS('Definicion')"
            ></v-text-field>
          </v-flex>
          <v-flex xs1 style="padding-top: 33px; padding-left: 10px;">
            <v-tooltip bottom style="margin-left: -45px;">
              <i class="fa fa-question-circle" slot="activator" style="font-size:25px;color:green;"></i>
              <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
  import json from '../Json/EditCiclos7.json'
  export default {
    name: 'EditCiclos7',
    data() {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        headers: [],
        formattedData: [],
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ],
        e1: '',
        tableData: json.weeks,
        checkbox: false,
        radios: 'radio-1',
        HTMLcontent: ``,
        lorem: '',
        rowNum: '3'
      }
    },
    mounted() {
      console.log('----- Edit Step 7 Mounted -----')
      this.headers = [
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
        that.formattedData.push(data)
      })
      this.lorem = json.description
    },
  }
</script>

<style scoped>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 490px) !important;
    overflow: auto;
  }
</style>
