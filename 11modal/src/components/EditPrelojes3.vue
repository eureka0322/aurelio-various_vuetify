<template>
  <main>
    <v-layout row wrap class="layout-position">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs11>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">3. </span>{{TRANS('Anadir / Editar reloj')}}</span>
          </v-flex>
          <v-flex xs1 style="text-align: center; padding: 10px;">
            <v-icon color="green">edit</v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mt-3 mb-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="layout-position">
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs10>
                <v-text-field
                  :label="TRANS('Nombre')"
                  box
                  v-model="rowInfo.Nombre"
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
                  v-model="rowInfo.Descripcion"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs10>
                <v-text-field
                  box
                  :label="TRANS('Tipo de reloj')"
                  v-model="rowInfo.tipo"
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
          <v-flex xs10>
            <v-select
              :items="items"
              v-model="rowInfo.Centro"
              :label="TRANS('Centro')"
              single-line
              item-text="text"
              item-value="value"
              box
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs10>
                <v-text-field
                  box
                  :label="TRANS('Carpeta')"
                  v-model="rowInfo.Carpeta"
                ></v-text-field>
              </v-flex>
              <v-flex xs2 style="padding-top: 33px; padding-left: 10px;">
                <v-tooltip right style="margin-left: -45px;">
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
        name: 'EditPrelojes3',
        props: ['rowInfo'],
        data() {
            return {
              e1: true,
              items: [
                { text: 'BCN', value: 'BCN' },
                { text: 'TGN', value: 'TGN' },
                { text: 'FGT', value: 'FGT' }
              ]
            }
        },
        mounted() {
            console.log('----- Edit Step 3 Mounted -----')
        },
    }
</script>

<style scoped>
  .layout-position {
    width: 70%; margin: 0 auto;
  }
</style>
