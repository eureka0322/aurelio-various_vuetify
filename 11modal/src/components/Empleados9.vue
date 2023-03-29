<template>
  <main>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs5>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">9. </span>{{TRANS('Empleados')}}</span>
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
        <v-layout row wrap>
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
                  <td class="text-xs-left">{{props.item.Codigo}}</td>
                  <td class="text-xs-left">{{props.item.Nombre_De_Empleado}}</td>
                  <td class="text-xs-left">{{props.item.DNI}}</td>
                  <td class="text-xs-left">{{props.item.Fecha_De_Alta}}</td>
                  <td class="text-xs-left">{{props.item.Fecha_De_Baja}}</td>
                  <td class="text-xs-left">{{props.item.Num_Contratos}}</td>
                  <td class="text-xs-left">{{props.item.Centro}}</td>
                </tr>
              </template>
            </v-data-table>
            <div class="text-xs-center pt-2 pb-2">
              <v-pagination color="green" v-model="pagination.page" :length="pages"></v-pagination>
            </div>
          </v-flex>
        </v-layout>
    </v-layout>
  </main>
</template>

<script>
  import json from '../Json/Empleados9.json'
  export default {
    name: 'Empleados9',
    props: ['editItem', 'addItem'],
    data() {
      return {
        headers: [],
        tableData: json.empleados9_list,
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
      console.log('----- Step 9 Mounted -----')
      this.headers = [
        {text: '', align: 'left', sortable: false, value: ''},
        {text: 'Codigo', align: 'left', sortable: true, value: 'Codigo'},
        {text: 'Nombre de empleado', align: 'left', sortable: true, value: 'Nombre_De_Empleado'},
        {text: 'DNI', align: 'left', sortable: true, value: 'DNI'},
        {text: 'Fecha de alta', align: 'left', sortable: true, value: 'Fecha_De_Alta'},
        {text: 'Fecha de baja', align: 'left', sortable: true, value: 'Fecha_De_Baja'},
        {text: 'Num. Contratos', align: 'left', sortable: true, value: 'Num_Contratos'},
        {text: 'Centro', align: 'left', sortable: true, value: 'Centro'}
      ]
      this.tableData = json.empleados9_list
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
    max-height: calc(100vh - 590px) !important;
    overflow: auto;
  }
</style>
