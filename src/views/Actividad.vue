<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
        .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
          .tarjeta.h-100.d-flex.align-items-center.p-4
            figure
              img(src="@/assets/template/Seleccion_Multiple.svg", alt="Texto que describa la imagen")
        .col-12.col-md-8.col-lg-9
          .titulo-segundo
            h2 Prueba de conocimientos sobre modelamiento y gestión de datos para modelos de inteligencia artificial
          p.mb-4 Validar el conocimiento adquirido sobre modelamiento y gestión de datos para modelos de inteligencia artificial. Esto se trabaja a partir de un conjunto de preguntas con el propósito de buscar una dinámica de razonamiento ágil sobre opciones cerradas y reafirmar un conocimiento declarado dentro del componente.
          .tarjeta.actividad.p-3
            .row.justify-content-around.align-items-center            
              .col-sm.mb-3.mb-sm-0
                p.fw-bold.mb-0 Cuestionario
              .col-auto
                a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                  span Realizar
                  i.fas.fa-puzzle-piece</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
