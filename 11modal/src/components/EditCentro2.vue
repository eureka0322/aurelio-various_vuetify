<template>
  <main>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
      <v-flex xs12>
        <v-layout row wrap >
          <v-flex xs11>
            <span style="font-size: 35px; font-weight: 200; color: green;"><span
              style="font-size: 35px; font-weight: 600; color: green;">2. </span>{{TRANS('Editar / Anadir Centro')}}</span>
          </v-flex>
          <v-flex xs1 style="text-align: center; padding: 10px;">
            <v-icon color="green">edit</v-icon>
          </v-flex>
        </v-layout>
        <v-divider class="mt-3 mb-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap style="width: 70%; margin: 0 auto;">
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
                  box
                  :label="TRANS('Descripcion')"
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
    name: 'EditCentro2',
    data() {
      return {
        e1: true
      }
    },
    mounted() {
      console.log('----- Edit Step 2 Mounted -----')
    },
  }
</script>

<style scoped>

</style>
