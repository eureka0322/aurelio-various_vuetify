<template>
    <main>
        <v-layout row>
            <v-flex xs3>
                <v-card-title>
                    <img
                            style="width:200px; height:200px; background-color: white; padding: 5%;"
                            v-bind:src="info.PhotoURL">
                </v-card-title>
                <v-card-actions class="pa-2">
                    <v-btn
                            :loading="loading3"
                            @click.native="loader = 'loading3'"
                            color="green"
                            large
                            dark
                            class="pl-1 ml-2"
                    >
                        Subir fotografia
                    </v-btn>
                </v-card-actions>
                <v-card-title>
                <span>
                  Maximo tamarno: 1MB
                </span>
                </v-card-title>
            </v-flex>
            <v-flex xs9>
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
                                <v-toolbar-title>{{info.title}}</v-toolbar-title>
                                <v-spacer></v-spacer>

                                <v-btn v-if="this.noEditable" icon @click="editProfile()">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                                <v-btn v-if="!this.noEditable" icon @click="saveProfile()">
                                    <v-icon>save</v-icon>
                                </v-btn>

                            </v-toolbar>
                            <div
                                    style="max-height: 500px; margin-top: 60px;"
                                    class="scroll-y"
                                    id="scrolling-techniques"
                            >
                                <v-container style="height: 500px;">
                                    <v-list>
                                        <template v-for="item in detailInfo">
                                            <v-list-tile
                                                    avatar
                                                    ripple
                                                    :key="item.caption">
                                                <v-list-tile-content
                                                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                                    <v-list-tile-sub-title style="max-width: 30%;" class="sut_title">
                                                        {{item.caption}}:
                                                    </v-list-tile-sub-title>
                                                    <v-text-field
                                                            single-line
                                                            :disabled="noEditable"
                                                            v-model="item.value"
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
        </v-layout>
    </main>
</template>
<script>

    import json from './personalData.json'

    export default {
        name: 'DataPersonal',
        data() {
            return {
                loader: null,
                loading: false,
                loading3: false,
                info: json,
                detailInfo: [],
                noEditable: true
            }
        },
        mounted() {
            this.detailInfo = this.info.details
        },
        watch: {
            loader() {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            }
        },
        methods: {
            editProfile: function () {
                console.log('@@@ Edit Profile')
                this.noEditable = false
            },
            saveProfile: function () {
                this.noEditable = true
            }
        }
    }
</script>
<style>
    .sut_title {
        color: green !important;
    }

    .list-tile-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .list__tile__content .input-group.input-group--text-field.input-group--single-line.primary--text .input-group__details {
        display: none !important;
    }
</style>
