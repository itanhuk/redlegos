<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Conclusiones

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/73.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El procesamiento de datos para modelos de inteligencia artificial requiere una comprensión profunda y holística que va desde los fundamentos más básicos hasta las aplicaciones más avanzadas. A lo largo de este componente formativo, se exploró cómo los datos, en su forma más elemental, se transforman en estructuras complejas que alimentan los sistemas de IA modernos.
          br
          br
          |  La gestión efectiva de estos datos, desde su recolección hasta su procesamiento final, resulta fundamental para el éxito de cualquier proyecto de inteligencia artificial.   

          br
          br
          | La convergencia entre las estructuras de datos tradicionales, los sistemas de gestión de bases de datos y las tecnologías emergentes de IA nos muestra un panorama en constante evolución. La calidad de los datos, su tratamiento adecuado y la selección de las herramientas apropiadas no son simplemente pasos en un proceso, sino elementos críticos que determinan la eficacia de los modelos de IA.                  

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
