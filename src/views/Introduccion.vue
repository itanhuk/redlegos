<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.my-lg-0.my-3
        .bg1.p-4.h-100
          p En la era de la inteligencia artificial, los datos se han convertido en uno de los recursos más valiosos para las organizaciones. Sin embargo, para que estos datos sean verdaderamente útiles, necesitan ser adecuadamente modelados, gestionados y procesados. La diferencia entre un proyecto de IA exitoso y uno fallido a menudo radica en la calidad y estructura de los datos que lo alimentan.

          p Este componente formativo aborda los principios esenciales del modelamiento y gestión de datos en el contexto de la inteligencia artificial. Comienza con los conceptos básicos de estructuras de datos, seguido por técnicas de calidad y tratamiento de datos. Se exploran los sistemas de gestión de bases de datos y, finalmente, se introduce la inteligencia artificial y sus requerimientos de datos.
              
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/1.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/2.png', alt='')    
      .col-lg-7.my-lg-0.my-3
        p A lo largo del componente, el aprendiz descubrirá cómo las diferentes piezas del rompecabezas de datos se unen para formar la base de sistemas de IA efectivos. Mediante referencias de estudio, se explorarán las mejores prácticas en el modelamiento y gestión de datos, así herramientas y tecnologías relevantes en el campo.

        p La comprensión profunda de estos fundamentos es muy importante para toda persona que aspire a trabajar en el campo de la IA. Como dice el refrán en ciencia de datos: "Los modelos son tan buenos como los datos que los alimentan".
            
        .bg2.p-2
          p.mb-0 ¡Bienvenida/o a este viaje por los fundamentos del modelamiento y gestión de datos para IA!               

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wG0fdlslv1I?si=0OxDo-LplwKhl-ZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
