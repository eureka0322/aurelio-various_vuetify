<template>
    <v-dialog v-model="dialog" scrollable max-width="1200px">
        <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
        <v-card>
            <v-layout row wrap>
                <v-flex xs3>
                    <v-card height="700px">
                        <v-navigation-drawer permanent absolute v-model="drawer">
                            <v-toolbar class="transparent" color="green" dark flat height="98px">
                                <v-list class="pa-0">
                                    <v-list-tile avatar>
                                        <v-list-tile-avatar>
                                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                                        </v-list-tile-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{TRANS('John Leider')}}</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-toolbar>
                            <v-list class="pt-0" dense>
                                <v-divider></v-divider>
                                <v-list-tile v-for="item in items" :key="item.title" @click="click(item)">
                                    <v-list-tile-action>
                                        <v-icon>{{item.icon}}</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{TRANS(item.title)}}</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-navigation-drawer>
                    </v-card>
                </v-flex>
                <v-flex xs9>
                    <v-card height="700px" style="background-color: whitesmoke;">
                        <v-toolbar color="green" flat height="50px" dark tabs>
                            <v-spacer></v-spacer>
                            <v-icon style="cursor: pointer;" @click="close">close</v-icon>
                        </v-toolbar>
                        <Employee v-if="this.selectedTab === 'employee'"></Employee>
                        <Absences v-if="this.selectedTab === 'absences'"></Absences>
                        <Calendar v-if="this.selectedTab === 'calendar'"></Calendar>
                        <Counters v-if="this.selectedTab === 'counters'"></Counters>
                        <Reports v-if="this.selectedTab === 'reports'"></Reports>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
    import Absences from './Absences.vue'
    import Calendar from './Calendar.vue'
    import Counters from './Counters.vue'
    import Reports from './Reports.vue'
    import Employee from './Employee.vue'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                drawer: true,
                items: [
                    {title: 'Employee data', icon: 'dashboard', id: 'employee'},
                    {title: 'Absences and marks', icon: 'account_box', id: 'absences'},
                    {title: 'Calendar', icon: 'event', id: 'calendar'},
                    {title: 'Counters', icon: 'folder_open', id: 'counters'},
                    {title: 'Reports(Informes)', icon: 'info', id: 'reports'}
                ],
                right: null,
                selectedTab: 'employee',
                dialog: false,
                a: 'aaaaaaa'
            }
        },
        components: {
            Absences, Counters, Calendar, Reports, Employee
        },
        mounted() {
            console.log('@@ Main Dialog Page')
        },
        methods: {
            click: function (item) {
                this.selectedTab = item.id
            },
            close: function() {
                this.dialog = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
