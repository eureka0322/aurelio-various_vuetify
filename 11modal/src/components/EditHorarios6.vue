<template>
  <main>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs11>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">6. </span>{{TRANS('Anadir Horarios / turnos')}}</span>
          </v-flex>
          <v-flex xs1 style="text-align: center; padding: 10px;">
            <v-icon color="green">edit</v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mt-4 mb-4"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs5>
            <v-layout row wrap>
              <v-flex xs5 style="display: flex; align-items: center;">
                <h3>Hora de inicio</h3>
              </v-flex>
              <v-flex xs5>
                <v-text-field
                  single-line
                  box
                  v-model="text"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs5>
            <v-layout row wrap>
              <v-flex xs6 style="display: flex; align-items: center;">
                <h3>Hora de fin horas</h3>
              </v-flex>
              <v-flex xs5>
                <v-text-field
                  single-line
                  box
                  v-model="text"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs10>
                <v-text-field
                  box
                  :label="TRANS('Definicion')"
                ></v-text-field>
              </v-flex>
              <v-flex xs2 style="padding-top: 33px; padding-left: 10px;">
                <v-tooltip bottom style="margin-left: -45px;">
                  <i class="fa fa-question-circle" slot="activator" style="font-size:25px;color:green;"></i>
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
                <v-layout row wrap>
                  <v-flex xs8>
                    <v-text-field
                      :label="TRANS('Tipo')"
                      type="number"
                      box
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2 style="padding-top: 33px; padding-left: 10px;">
                    <v-tooltip bottom>
                      <i class="fa fa-question-circle" slot="activator" style="font-size:25px;color:green;"></i>
                      <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-layout row wrap>
                  <v-flex xs7>
                    <v-text-field
                      :label="TRANS('Pausa no retribuida')"
                      type="number"
                      box
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2 style="padding-top: 33px; padding-left: 10px;">
                    <v-tooltip bottom>
                      <i class="fa fa-question-circle" slot="activator" style="font-size:25px;color:green;"></i>
                      <span> Lorem Lpsum es simplemente el texto de relleno de las<br>
                        Imprentas y archivos de texto. Lorem lpsum ha side dl texto de<br>
                        Relleno estandar de las industrias de ano 1500. cuando<br>
                        un impresor (N. del T. persona que se decica a la imprenta)<br>
                        desconocido use una galeria de textos y los meaclo de tal<br></span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
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
  </main>
</template>

<script>
  export default {
    name: 'EditHorarios6',
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
        text: '00:00',
        checkbox: false,
        radios: 'radio-1'
      }
    },
    mounted() {
      console.log('----- Edit Step 6 Mounted -----')
    },
  }
</script>

<style scoped>
  .table-scroll-enabled-1 {
    max-height: calc(100vh - 500px) !important;
    overflow: auto;
  }
</style>
