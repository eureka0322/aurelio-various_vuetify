<template>
  <main>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs11>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">5. </span>{{TRANS('Anadir / editar hora / incidencias')}}</span>
          </v-flex>
          <v-flex xs1 style="text-align: center; padding: 10px;">
            <v-icon color="green">edit</v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mt-3 mb-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout column>
          <v-flex>
            <v-card-text
              v-text="'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem lpsum ha sido el texto de rellenotexto de rellenotexto de relleno' +
               'de rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de relleno' +
                'de rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de relleno' +
                 'de rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de rellenode rellenotexto de relleno'">
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs10>
                <v-text-field
                  :label="TRANS('Nombre')"
                  box
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs10>
                <v-text-field
                  :label="TRANS('Descripcion')"
                  box
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs10>
            <v-select
              :items="items"
              v-model="e1"
              :label="TRANS('Tipo')"
              box
            ></v-select>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs6>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card-text>
                      <h3>Dias/Horas</h3>
                    </v-card-text>
                    <v-divider></v-divider>
                  </v-flex>
                  <v-flex xs12>
                    <v-radio-group v-model="radios" :mandatory="false">
                      <v-radio label="Dias" value="radio-1" color="green"></v-radio>
                      <v-radio label="Horas" value="radio-2" color="green"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card-text>
                      <h3>Cuenta(jornada anual)</h3>
                    </v-card-text>
                    <v-divider></v-divider>
                  </v-flex>
                  <v-flex xs12>
                    <v-radio-group v-model="radios" :mandatory="false">
                      <v-radio label="No" color="green" value="radio-1"></v-radio>
                      <v-radio label="Si" color="green" value="radio-2"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs11>
                    <v-card-text>
                      <h3>Carpeta</h3>
                    </v-card-text>
                  </v-flex>
                  <v-flex xs1>
                    <v-card-text>
                      <v-tooltip bottom>
                        <i class="fa fa-question-circle" slot="activator" style="font-size:25px;color:green;"></i>
                        <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                      </v-tooltip>
                    </v-card-text>
                  </v-flex>
                </v-layout>

                <v-divider></v-divider>
              </v-flex>
              <v-flex xs12>
                <v-radio-group v-model="radios" :mandatory="false">
                  <v-radio label="No" color="green" value="radio-1"></v-radio>
                  <v-radio label="Si" color="green" value="radio-2"></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
  export default {
    name: 'EditTipos5',
    data() {
      return {
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ],
        e1: '',
        checkbox: false,
        radios: 'radio-1'
      }
    },
    mounted() {
      console.log('----- Edit Step 5 Mounted -----')
    },
  }
</script>

<style scoped>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 500px) !important;
    overflow: auto;
  }
</style>
