<template>
    <v-tabs centered grow dark slider-color="white" color="green" class="v-tabs">
        <v-tab
                v-for="tab in tabs"
                :key="tab"
                :href="`#` + tab"
        >
            {{tab}}
        </v-tab>
        <v-tab-item id="Datos personales">
            <DataPersonal></DataPersonal>
        </v-tab-item>
        <v-tab-item id="Datos contractuales">
            <ContractData></ContractData>
        </v-tab-item>
        <v-tab-item id="Historial de contratos">
            <HistorialDeContratos></HistorialDeContratos>
        </v-tab-item>
    </v-tabs>
</template>
<script>
    import HistorialDeContratos from './HistorialDeContratos.vue'
    import PersonalData from './PersonalData.vue'
    import ContractData from './ContractData.vue'
    import DataPersonal from './DataPersonal.vue'

    export default {
        name: 'employee',
        data() {
            return {
                tabs: ['Datos personales', 'Datos contractuales', 'Historial de contratos']
            }
        },
        components: {
            HistorialDeContratos, PersonalData, ContractData, DataPersonal
        }
    }
</script>
<style>
    .v-tabs {
        width: 100%
    }
    .tabs__container.tabs__container--centered.tabs__container--grow {
        transform: translateX(0) !important;
    }
</style>
