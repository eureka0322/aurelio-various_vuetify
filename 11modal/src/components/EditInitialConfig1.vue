<template>
    <main>
        <v-layout row wrap>
            <v-toolbar>
                <h1>1.Edit Initial configuration page</h1>
            </v-toolbar>
            <v-flex xs12>
                <v-text-field
                        box
                        label="Label Text"
                        append-icon="edit"
                ></v-text-field>
            </v-flex>
            <v-flex xs6>
                <v-text-field
                        box
                        label="Label Text"
                        append-icon="edit"
                ></v-text-field>
            </v-flex>
            <v-flex xs6>
                <v-text-field
                        box
                        label="Label Text"
                        append-icon="edit"
                ></v-text-field>
            </v-flex>
        </v-layout>
    </main>
</template>

<script>
    export default {
        name: 'EditInitialConfig1',
        data() {
            return {

            }
        },
        mounted() {
            console.log('----- Edit Initial Configuration Page Mounted -----')
        },
    }
</script>

<style scoped>

</style>
