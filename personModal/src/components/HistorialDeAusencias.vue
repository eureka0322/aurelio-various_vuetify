<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn color="green" dark slot="activator">+ Anadir</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Dessert name" v-model="editedItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Calories" v-model="editedItem.calories"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Fat (g)" v-model="editedItem.fat"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Carbs (g)" v-model="editedItem.carbs"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Protein (g)" v-model="editedItem.protein"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-menu color="white" slot="activator">
      <v-btn color="white" slot="activator">Ordenar por
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu color="white" slot="activator">
      <v-btn color="white" slot="activator">Ano: 2016
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu color="white" slot="activator">
      <v-btn color="white" slot="activator">Resultados: 50
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        :search="search"
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.calories }}</td>
          <td class="text-xs-center">{{ props.item.fat }}</td>
          <td class="text-xs-center">{{ props.item.carbs }}</td>
          <td class="text-xs-left"><span
            style="display: flex; justify-content: space-around; align-items: center"><span>{{props.item.estado}}</span><i
            class="material-icons"
            v-if="props.item.estado === 'Pendiente'"
            style="font-size: small; color: red;">brightness_1</i>
                        <i class="material-icons" v-else-if="props.item.estado === 'Por revisar'"
                           style="font-size: small; color: yellow;">brightness_1</i>
                    <i class="material-icons" v-else style="font-size: small; color: green;">brightness_1</i></span>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-card-text>
  </v-container>
</template>
<script>
  export default {
    name: 'Ausencias',
    data: () => ({
      dialog: false,
      search: '',
      pagination: {},
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {text: 'Calories', value: 'calories'},
        {text: 'Fat (g)', value: 'fat'},
        {text: 'Carbs (g)', value: 'carbs'},
        {text: 'Estado', value: 'estado'},
      ],
      menuItems: [
        {title: 'Click2 Me'},
        {title: 'Click 3Me'},
        {title: 'Click4 Me'},
        {title: 'Click Me 2'}
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      pages() {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },

    watch: {
      dialog(val) {
        val || this.close()
      }
    },

    created() {
      this.initialize()
    },

    methods: {
      initialize() {
        this.items = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            estado: 'Pendiente'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            estado: 'Pendiente'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            estado: 'Por revisar'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            estado: 'Resuelta'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            estado: 'Resuelta'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            estado: 'Resuelta'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            estado: 'Resuelta'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            estado: 'Resuelta'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            estado: 'Resuelta'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            estado: 'Resuelta'
          }
        ]
      },

      editItem(item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save() {
        // if (this.editedIndex > -1) {
        //     Object.assign(this.items[this.editedIndex], this.editedItem)
        // } else {
        //     this.items.push(this.editedItem)
        // }
        this.close()
      }
    }
  }
</script>
<style>

</style>
