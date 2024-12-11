<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El siguiente diagrama ilustra los cuatro pilares fundamentales que conforman este componente formativo. Partiendo del concepto central de modelamiento y gestión de datos para IA, se ramifica en áreas esenciales: fundamentos de datos, calidad de datos, bases de datos e inteligencia artificial. Cada una de estas áreas se desglosa en subtemas específicos que reflejan la progresión lógica del aprendizaje.
    p La estructura presentada permite visualizar cómo los conceptos básicos de datos y estructuras sirven como base para comprender los procesos más complejos de calidad y transformación. Estos, a su vez, se integran con los sistemas de gestión de bases de datos, culminando en las aplicaciones prácticas en inteligencia artificial. Esta organización jerárquica facilita la comprensión de cómo cada elemento contribuye al objetivo final de preparar y gestionar datos efectivamente para su uso en modelos de IA.
    p.mb-5 El diagrama sirve como una guía de referencia rápida para navegación y repaso, permitiendo al aprendiz visualizar la interconexión entre los diferentes conceptos y su progresión lógica. Se recomienda utilizarlo como un mapa conceptual complementario al contenido detallado del componente, facilitando la identificación de relaciones entre temas y la comprensión integral del material.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La sintesis organiza los temas clave relacionados con el modelamiento y la gestión de datos para inteligencia artificial. El eje de fundamentos incluye aspectos como los tipos de datos, estructuras de datos utilizadas y el ciclo de vida de los datos. En el área de calidad de datos, se abarcan elementos esenciales como las dimensiones que determinan su precisión, los métodos de extracción utilizados para obtener información relevante y las técnicas de transformación para adecuar los datos al formato requerido. Por su parte, en el componente de bases de datos se exploran tanto las bases relacionales como las NoSQL, junto con las operaciones CRUD (crear, leer, actualizar y eliminar), fundamentales para la manipulación de datos en sistemas complejos. Finalmente, en el apartado de inteligencia artificial, se incluyen conceptos fundamentales, aplicaciones prácticas en distintos sectores y herramientas que facilitan el desarrollo de modelos y soluciones basadas en IA.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
