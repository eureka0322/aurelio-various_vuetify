<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs3>
                <v-card-title>
                    <img
                            style="width:200px; height:200px; background-color: white; padding: 5%;"
                            src="https://randomuser.me/api/portraits/men/85.jpg">
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
                        <v-toolbar color="green" dark flat>
                            <v-toolbar-title>Datos generales</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>edit</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-list>
                            <template v-for="(item, index) in items">
                                <v-divider v-if="item.divider" :key="index"></v-divider>
                                <v-list-tile v-else :key="item.title" @click="click(item)">
                                    <v-list-tile-content>
                                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-card>
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        name: 'PersonalData',
        data() {
            return {
                loader: null,
                loading: false,
                loading2: false,
                loading3: false,
                loading4: false,
                items: [
                    {
                        title: 'Brunch this weekend?',
                        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {divider: true, inset: true},
                    {
                        atitle: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                    },
                    {divider: true, inset: true},
                    {
                        title: 'Oui osdf',
                        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                    },
                    {divider: true, inset: true},
                    {
                        title: 'Oui werwer',
                        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                    },
                    {divider: true, inset: true},
                    {
                        title: 'Ouiui',
                        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                    }
                ]
            }
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
            click: function (item) {
                console.log(item)
            }
        }
    }
</script>
<style>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
