<template>
    <v-container fluid>
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

        <v-btn color="white" slot="activator">Buscar
            <v-icon>search</v-icon>
        </v-btn>
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

                    <td><span><i v-if="props.item.subTree" class="material-icons" style="width: 20%;">subdirectory_arrow_right</i><span>{{ props.item.name }}</span></span></td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="justify-center layout px-0">
                        <v-btn icon class="mx-0" @click="editItem(props.item)">
                            <v-icon color="teal">edit</v-icon>
                        </v-btn>
                        <!--<v-btn icon class="mx-0" @click="deleteItem(props.item)">-->
                            <!--<v-icon color="pink">delete</v-icon>-->
                        <!--</v-btn>-->
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
        name: 'HistorialDeCOntratos',
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
                {text: 'Protein (g)', value: 'protein'},
                {text: 'Actions', value: 'name', sortable: false}
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
                        protein: 4.0
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        subTree: true,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        subTree: true,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9
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
