<template>
  <main>
    <v-layout row wrap style="width: 60%; margin: 0 auto;">
      <v-flex xs12>
        <span style="font-size: 35px; font-weight: 200; color: green;"><span
          style="font-size: 35px; font-weight: 600; color: green;">1. </span>{{TRANS(' Selecciona el tipo de integracion')}}</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap style="width: 70%; margin: 0 auto;" class="pt-4">
      <v-flex xs6>
        <v-layout row wrap>
          <v-radio-group v-model="column" column>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs11>
                  <v-radio
                    :label="TRANS('Sin integracion(se cargaran todos los datos manualmente)')"
                    color="success"
                    value="SinInte"
                  ></v-radio>
                </v-flex>
                <v-flex xs1>
                  <v-tooltip bottom style="margin-left: -45px;">
                    <i class="fa fa-question-circle" slot="activator"
                       style="font-size:25px;color:green;"></i>
                    <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-radio
                    :label="TRANS('Integrado en a3Nom')"
                    color="success"
                    value="InteEnA3"
                  ></v-radio>
                </v-flex>
                <v-flex xs1>
                  <v-tooltip bottom>
                    <i class="fa fa-question-circle" slot="activator"
                       style="font-size:25px;color:green;"></i>
                    <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs6 style="display: flex; align-items: center;">
                  <v-radio
                    :label="TRANS('Integrado en a3equipo.com')"
                    color="success"
                    value="InteEnA3Com"
                  ></v-radio>
                </v-flex>
                <v-flex xs5 class="pt-3">
                  <v-text-field
                    v-model="info.InteEnA3ComForm"
                    box
                    :label="TRANS('Codigo Cliente')"
                  ></v-text-field>
                </v-flex>
                <v-flex xs1 style="padding-top: 33px; padding-left: 10px;">
                  <v-tooltip bottom style="margin-left: -45px;">
                    <i class="fa fa-question-circle" slot="activator"
                       style="font-size:25px;color:green;"></i>
                    <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs8>
                  <v-radio
                    :label="TRANS('Integrado en un servidor de a3equipo local:')"
                    color="success"
                    value="InteServidor"
                  ></v-radio>
                </v-flex>
                <v-flex xs1>
                  <v-tooltip bottom>
                    <i class="fa fa-question-circle" slot="activator"
                       style="font-size:25px;color:green;"></i>
                    <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-radio
                :label="TRANS('jQuiero empezar ya!')"
                color="success"
                value="jQuiero"
              ></v-radio>
            </v-flex>

          </v-radio-group>

        </v-layout>

      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs12>
            <h2>{{TRANS('Explicacio de I`apartat')}}</h2>
          </v-flex>
          <v-flex xs12 class="mt-3">
            Lorem Lpsum es simplemente el texto de relleno de las Imprentas y archivos de texto.
            Lorem lpsum ha side dl texto de Relleno estandar de las industrias de ano 1500, cuando
            un impresor (N. del T. persona que se decica a la imprenta) desconocido use una galeria
            de textos y los meaclo de tal maner que logrohacer un libro de textos especimen, sdsdNo
            solo sobrevivio 500 anos, sino que tambien ingreso como texto de relleno en documentos
            electronicos, quedando esencialmente igual al original.
            <br>
            <br>
            Fue popularizado en los 60s con la creacion de las hojas "Letra-set", las cuales contenian
            pasajes de Lorem lpsum, y mas reci-entemente con software de autoedicion, como por ejemplo
            Aldus pageMaker. el cual incluye versiones de Lorem Ipsum.
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
    <div v-if="editModal">
      <v-layout>
        <v-dialog v-model="editModal" max-width="500px">
          <v-card>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-text class="py-0">
                  <v-text-field
                    box
                    :label="TRANS('Nombre de la empresa')"
                    v-model="info.jQuieroNombre"
                  ></v-text-field>
                </v-card-text>
              </v-flex>
              <v-flex xs4>
                <v-card-text class="py-0">
                  <v-text-field
                    box
                    :label="TRANS('N de centros')"
                    type="number"
                    v-model="info.jQuieroCentros"
                  ></v-text-field>
                </v-card-text>
              </v-flex>
              <v-flex xs4>
                <v-card-text class="py-0">
                  <v-text-field
                    box
                    :label="TRANS('N de empledos')"
                    type="number"
                    v-model="info.jQuieroEmpledos"
                  ></v-text-field>
                </v-card-text>
              </v-flex>
              <v-flex xs4>
                <v-card-text class="py-0">
                  <v-text-field
                    box
                    :label="TRANS('N de convenios')"
                    type="number"
                    v-model="info.jQuieroConvenios"
                  ></v-text-field>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-layout>
                <v-btn color="green" medium dark @click="closeModal">{{TRANS('Guardar')}}</v-btn>
                <v-btn color="green" outline medium dark @click="closeModal">{{TRANS('Cancel')}}</v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </main>
</template>

<script>
  import EditInitialConfig1 from "./EditInitialConfig1";

  export default {
    name: 'InitialConfig1',
    components: {
      EditInitialConfig1
    },
    data() {
      return {
        checkbox: false,
        editModal: false,
        jQuiero: '',
        dialog2: true,
        column: "InteEnA3",
        info: {
          "column": "SinInte",
          "InteEnA3ComForm": "",
          "jQuieroNombre": "",
          "jQuieroCentros": 1,
          "jQuieroEmpledos": 1,
          "jQuieroConvenios": 1
        }
      }
    },
    mounted() {
      console.log('----- Initial Configuration Page Mounted -----')
    },
    watch: {
      column: function (v) {
        if (v === 'jQuiero') {
          this.editModal = true
        } else {
          this.editModal = false
        }
      }
    },
    methods: {
      closeModal: function () {
        this.editModal = false
      }
    }
  }
</script>

<style scoped>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 390px) !important;
    overflow: auto;
  }
</style>
