<template>
  <main>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs5>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">8. </span>{{TRANS('Reglas de convenio')}}</span>
          </v-flex>
          <v-flex xs5>
            <v-text-field
              v-model="search"
              box
              single-line
              append-icon="search"
              :placeholder="TRANS('Buscar...')"
              class="white--text"
              style="padding-top: 0px;"
              hide-details></v-text-field>
          </v-flex>
          <v-flex xs2 style="display: flex;align-items: center; padding-left: 20px;">
            <v-btn @click.native="addItem" dark color="green">{{TRANS('+ Anadir')}}</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-layout column class="pt-3 pb-3" style="width: 85%; margin: 0 auto;">
          <v-flex>
            <v-card-text
              v-text="lorem">
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-card-text>
        <v-flex xs12>
          <v-data-table
            v-bind:headers="headers"
            :items="tableData"
            v-bind:search="search"
            :pagination.sync="pagination"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <tr>
                <td class="text-xs-left handCell">
                  <v-menu bottom right>
                    <v-btn icon slot="activator" dark style="color:green;">
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list style="background-color: black;">
                      <v-list-tile @click="editItem(props.item)">
                        <v-icon color="green">edit</v-icon>
                        <v-list-tile-title style="color: white;">Editar</v-list-tile-title>
                      </v-list-tile>
                      <v-list-tile avatar @click="deleteItem(props.item)">
                        <v-icon color="green">delete</v-icon>
                        <v-list-tile-title>
                          <v-list-tile-sub-title style="color: white;">Eliminar</v-list-tile-sub-title>
                        </v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </td>
                <td class="text-xs-left">{{props.item.Convenio}}</td>
                <td class="text-xs-left">{{props.item.Horas_Anuales}}</td>
                <td class="text-xs-left">{{props.item.Vacaciones_Anuales}}</td>
                <td class="text-xs-left">{{props.item.Tipo_De_Vacaciones}}</td>
                <td class="text-xs-left">{{props.item.Franja_Nocturnidad}}</td>
                <td class="text-xs-left">{{props.item.Dias_Asuntos_Propios}}</td>
              </tr>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2 pb-2">
            <v-pagination color="green" v-model="pagination.page" :length="pages"></v-pagination>
          </div>
        </v-flex>
      </v-card-text>
    </v-layout>
  </main>
</template>

<script>
  import json from '../Json/Reglas8.json'
  export default {
    name: 'Reglas8',
    props: ['editItem','addItem'],
    data() {
      return {
        headers: [],
        tableData: json.reglas8_list,
        search: '',
        lorem: '',
        show: false,
        pagination: {},
        items: [
          {title: 'Click Me'},
          {title: 'Click Me'},
          {title: 'Click Me'},
          {title: 'Click Me 2'}
        ]
      }
    },
    mounted() {
      console.log('----- Step 8 Mounted -----')
      this.headers = [
        {text: '', align: 'left', sortable: false, value: ''},
        {text: 'Convenio', align: 'left', sortable: true, value: 'Convenio'},
        {text: 'Horas Anuales', align: 'left', sortable: true, value: 'Horas_Anuales'},
        {text: 'Vacaciones anuales', align: 'left', sortable: true, value: 'Vacaciones_Anuales'},
        {text: 'Tipo de vacaciones', align: 'left', sortable: true, value: 'Tipo_De_Vacaciones'},
        {text: 'Franja nocturnidad', align: 'left', sortable: true, value: 'Franja_Nocturnidad'},
        {text: 'Dias asuntos propios', align: 'left', sortable: true, value: 'Dias_Asuntos_Propios'}
      ]
      this.tableData = json.reglas8_list
      this.lorem = json.description
    },
    methods: {
      add: function () {
        console.log('New item')
      },
      clickRow: function () {
        console.log(item)
      },
      deleteItem: function () {
        console.log('item deleted')
      }
    },
    computed: {
      pages() {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }

  }
</script>

<style scoped>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 550px) !important;
    overflow: auto;
  }
</style>
