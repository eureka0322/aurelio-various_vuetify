<template>
    <main>
        <v-layout row>
            <v-flex xs6>
                <v-card-text>
                    <v-card>
                        <div style="position: relative; overflow: scroll;">
                            <v-toolbar
                                    absolute
                                    color="green"
                                    flat
                                    dark
                                    scroll-off-screen
                                    scroll-target="#scrolling-techniques"
                            >
                                <v-toolbar-title>{{TRANS(labourConditions.title)}}</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn v-if="this.noEditable" icon @click="editPanel()">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                                <v-btn v-if="!this.noEditable" icon @click="saveProfile()">
                                    <v-icon>save</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <div
                                    style="max-height: 320px; margin-top: 42px;"
                                    class="scroll-y"
                                    id="scrolling-techniques3"
                            >
                                <v-container style="height: 500px;">
                                    <v-list>
                                        <template v-for="item in labourConditionsProperties">
                                            <v-list-tile
                                                    avatar
                                                    ripple
                                                    :key="item.title">
                                                <v-list-tile-content
                                                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                                    <v-list-tile-sub-title class="sut_title">{{TRANS(item.title)}}:
                                                    </v-list-tile-sub-title>
                                                    <v-text-field
                                                            single-line
                                                            :disabled="noEditable"
                                                            v-model="item.default"
                                                            style="margin-top: -18px;"
                                                    ></v-text-field>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-divider></v-divider>
                                        </template>
                                    </v-list>
                                </v-container>
                            </div>
                        </div>
                    </v-card>
                </v-card-text>
                <v-card-text class="pt-0">
                    <v-card>
                        <div style="position: relative; overflow: scroll;">
                            <v-toolbar
                                    absolute
                                    color="green"
                                    flat
                                    dark
                                    scroll-off-screen
                                    scroll-target="#scrolling-techniques"
                            >
                                <v-toolbar-title>{{TRANS(contractPeriods.title)}}</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn v-if="this.noEditableDown" icon @click="editPanelDown()">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                                <v-btn v-if="!this.noEditableDown" icon @click="saveProfileDown()">
                                    <v-icon>save</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <div
                                    style="max-height: 140px; margin-top: 42px;"
                                    class="scroll-y"
                                    id="scrolling-techniques2"
                            >
                                <v-container style="height: 150px;">
                                    <v-list>
                                        <template v-for="item in contractPeriodsProperties">
                                            <v-list-tile
                                                    avatar
                                                    ripple
                                                    :key="item.title">
                                                <v-list-tile-content
                                                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                                    <v-list-tile-sub-title class="sut_title">{{TRANS(item.title)}}:
                                                    </v-list-tile-sub-title>
                                                    <v-text-field
                                                            single-line
                                                            :disabled="noEditableDown"
                                                            v-model="item.default"
                                                            style="margin-top: -18px;"
                                                    ></v-text-field>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-divider></v-divider>
                                        </template>
                                    </v-list>
                                </v-container>
                            </div>
                        </div>
                    </v-card>
                </v-card-text>
            </v-flex>
            <v-flex xs6>
                <v-card-text>
                    <v-card>
                        <div style="position: relative; overflow: scroll;">
                            <v-toolbar absolute scroll-off-screen color="green" flat dark
                                       scroll-target="#scrolling-techniques">
                                <v-toolbar-title>{{TRANS('Contadores anuales')}}</v-toolbar-title>
                            </v-toolbar>
                            <div
                                    style="max-height: 517px; margin-top: 42px;"
                                    class="scroll-y"
                                    id="scrolling-techniques4"
                            >
                                <v-container style="height: 517px;">
                                    <v-list>

                                        <v-list-group
                                                v-model="item.active"
                                                v-for="item in items"
                                                :key="item.title"
                                                no-action
                                                class="v-list-group-contadores"
                                                style=" margin-top: 15px;"
                                        >
                                            <v-list-tile slot="activator" style="padding-left: 36px;">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ item.groupName }}</v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-list-tile v-for="subItem in item.items" :key="subItem.name" @click="">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-tile-action class="pr-4" style="color: green;">
                                                    {{ subItem.value }}
                                                </v-list-tile-action>
                                            </v-list-tile>

                                        </v-list-group>
                                    </v-list>
                                    <v-list>

                                        <v-list-group
                                                v-model="item.active"
                                                v-for="item in vacacionesGroup"
                                                :key="item.title"
                                                no-action
                                                class="v-list-group-contadores"
                                        >
                                            <v-list-tile slot="activator" style="padding-left: 36px;">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ item.groupName }}</v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-list-tile v-for="subItem in item.vacacionesGroup" :key="subItem.name"
                                                         @click="">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-tile-action class="pr-4" style="color: green;">
                                                    {{ subItem.value }}
                                                </v-list-tile-action>
                                            </v-list-tile>

                                        </v-list-group>
                                    </v-list>
                                    <v-list>
                                        <v-list-group
                                                v-model="item.active"
                                                v-for="item in compensacionesGroup"
                                                :key="item.title"
                                                no-action
                                                class="v-list-group-contadores"
                                        >
                                            <v-list-tile slot="activator" style="padding-left: 36px;">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ item.groupName }}</v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-list-tile v-for="subItem in item.compensacionesGroup" :key="subItem.name"
                                                         @click="">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-tile-action class="pr-4" style="color: green;">
                                                    {{ subItem.value }}
                                                </v-list-tile-action>
                                            </v-list-tile>

                                        </v-list-group>
                                    </v-list>
                                </v-container>
                            </div>
                        </div>
                    </v-card>
                </v-card-text>
            </v-flex>
        </v-layout>
    </main>
</template>
<script>

    import json1 from './JSON_schema_person_data.json'
    import json2 from './JSON_counters_example.json'

    export default {
        name: 'ContractData',
        data() {
            return {
                labourConditionsProperties: json1.properties.labourConditions.properties,
                labourConditions: json1.properties.labourConditions,
                contractPeriods: json1.properties.contractPeriods,
                contractPeriodsProperties: json1.properties.contractPeriods.properties,
                personInfo: json1,
                countersInfo: json2,
                selected: [2],
                noEditable: true,
                noEditableDown: true,
                items: [
                    {
                        groupName: 'Contadores anuales',
                        items: [
                            {name: 'List Item'}
                        ]
                    },

                ],

                vacacionesGroup: [
                    {
                        groupName: 'Vacaciones',
                        vacacionesGroup: [
                            {name: 'Vacaciones permitidias', value: '30'},
                            {name: 'Vacaciones disfrutadas', value: '18'},
                            {name: 'Vacaciones en tramite', value: '0'},
                            {name: 'Saldo de vacaciones', value: '12'}
                        ]
                    },
                ],

                compensacionesGroup: [
                    {
                        groupName: 'Compensaciones',
                        compensacionesGroup: [
                            {name: 'Horas contractuales', value: '2080'},
                            {name: 'Horas acumuladas', value: '-270'},
                            {name: 'Horas acumuladas disfrutadas', value: '11'},
                            {name: 'Saldo horas acumuladas', value: '-212'}
                        ]
                    }
                ]
            }
        },
        mounted() {
        },

        methods: {

            editPanel: function () {
                this.noEditable = false
            },
            saveProfile: function () {
                this.noEditable = true
            },
            editPanelDown: function () {
                this.noEditableDown = false
            },
            saveProfileDown: function () {
                this.noEditableDown = true
            }
        }
    }
</script>
<style>
    .sut_title {
        color: green !important;
        max-width: 50%;
    }

    .v-list-group-contadores .list__group__header {
        background-color: whitesmoke;
    }

    .v-list-group-contadores .list__group__header.list__group__header--active {
        border-left: 5px solid green;
    }

</style>
