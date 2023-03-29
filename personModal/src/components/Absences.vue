<template>
    <v-tabs
            centered
            color="green"
            slot="extension"
            slider-color="white"
            grow
            dark
            class="v-tabs"
    >
        <v-tab
                v-for="tab in tabs"
                :key="tab"
                :href="`#`+ tab"
        >
            {{ TRANS(tab)}}
        </v-tab>
        <v-tab-item id="Historial de ausencias">
            <Ausencias></Ausencias>
        </v-tab-item>
        <v-tab-item id="Historial de marcas">
            <v-card flat>
                <v-card-text>
                    {{text}}
                </v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs>
</template>
<script>
    import Ausencias from './HistorialDeAusencias.vue'

    export default {
        name: 'absences',
        data() {
            return {
                tabs: ['Historial de ausencias', 'Historial de marcas'],
                model: 'tab-2',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        components: {
            Ausencias
        }
    }
</script>
<style>
    .v-tabs {
        width: 100%
    }
</style>
