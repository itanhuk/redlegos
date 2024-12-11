<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Calidad y tratamiento de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.my-lg-0.my-3
        .bg4.p-4
          p.mb-0 La calidad y el tratamiento adecuado de los datos son pilares fundamentales para el éxito de cualquier proyecto de análisis o inteligencia artificial. En esta sección, se abordan las metodologías y técnicas necesarias para garantizar que los datos con los que trabajamos sean confiables, consistentes y útiles para los objetivos planteados. 

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')          

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Características de calidad de datos

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/31.svg', alt='')       
      .col.my-lg-0.my-3
        .bg6.p-3
          p.mb-0 La calidad de los datos es un aspecto fundamental en el desarrollo de modelos de inteligencia artificial. Así como un chef no puede preparar un platillo exquisito con ingredientes en mal estado, un modelo de IA no puede proporcionar resultados confiables si se alimenta con datos de baja calidad. La famosa frase "#[i #[b garbage in, garbage out]]" (entra basura, sale basura) resume perfectamente esta realidad en el campo del análisis de datos.   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.my-lg-0.my-3
        p La calidad de los datos se puede evaluar a través de múltiples dimensiones. La precisión es quizás la más evidente: los datos deben representar fielmente la realidad que intentan capturar. Por ejemplo, si estamos registrando la temperatura de un proceso industrial, necesitamos asegurarnos de que nuestros sensores estén correctamente calibrados y que las mediciones sean exactas.
        p La completitud es otra dimensión estratégica. Los datos incompletos pueden llevar a conclusiones sesgadas o incorrectas. Imaginemos un estudio de satisfacción del cliente donde solo tenemos respuestas de usuarios muy satisfechos o insatisfechos: esto nos daría una visión distorsionada de la realidad, pues faltaría la información de aquellos clientes con opiniones moderadas.
        .bg6.p-3
          p.mb-0 La consistencia de los datos implica que la información sea coherente a través de diferentes sistemas y registros. Por ejemplo, si un cliente aparece con diferentes direcciones en distintas bases de datos de la empresa, ¿cuál es la correcta? La falta de consistencia puede generar confusión y errores en el procesamiento de la información.  

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')   

    .row.justify-content-start.mb-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4.text-white
            h4.mb-0 Cinco recomendaciones para garantizar datos de calidad

    .row.justify-content-center.mb-4 
      .col-lg-3.my-3
        img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='')          
      .col-lg-9.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          .row.justify-content-center(titulo="Precisión en los datos")
            .col-lg-7.my-3
              p Los datos deben reflejar con exactitud la realidad. Es fundamental utilizar herramientas de calibración y validación para asegurar que las mediciones y registros sean correctos.
            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/35.png', alt='')   

          .row.justify-content-center(titulo="Completitud de los datos")
            .col-lg-7.my-3
              p Los datos incompletos pueden generar conclusiones sesgadas. Asegurarse de registrar toda la información necesaria previene la distorsión en los análisis. 
            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')  

          .row.justify-content-center(titulo="Consistencia entre sistemas")
            .col-lg-7.my-3
              p La coherencia de los datos debe ser garantizada entre diferentes sistemas y bases de datos. Es esencial realizar procesos de limpieza para evitar errores y discrepancias. 
            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')  
              
          .row.justify-content-center(titulo="Validación continua de datos")
            .col-lg-7.my-3
              p Implementar mecanismos automáticos de validación garantiza que los datos nuevos ingresados sigan los estándares de calidad definidos.
            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')  

          .row.justify-content-center(titulo="Contextualización de los datos")
            .col-lg-7.my-3
              p Los datos deben ser acompañados del contexto adecuado (fecha, ubicación, evento) para ser realmente útiles en el análisis y la toma de decisiones.
            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')  

          .row.justify-content-center(titulo="Resumen")
            .col-lg-7.my-3
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check-circle.color2
                  span Asegurar precisión en los datos.
                li 
                  i.fas.fa-check-circle.color2
                  span Garantizar la completitud de la información.
                li 
                  i.fas.fa-check-circle.color2
                  span Mantener consistencia entre sistemas.
                li 
                  i.fas.fa-check-circle.color2
                  span Validar los datos de forma continua.
                li 
                  i.fas.fa-check-circle.color2
                  span Proporcionar contexto para su correcta interpretación.            
              p La calidad de los datos garantiza el éxito de los modelos de inteligencia artificial y genera análisis rigurosos tanto para información simple como compleja. 
            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')            

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Técnicas de extracción y filtrado
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.my-lg-0.my-3
        .bg8.p-4
          p.mb-0 La extracción de datos es como la minería: debemos saber dónde buscar y qué herramientas utilizar para obtener la información valiosa. Este proceso involucra la identificación y recuperación de datos relevantes de diversas fuentes, que pueden incluir bases de datos relacionales, archivos de texto, hojas de cálculo, páginas web o incluso sensores IoT.      
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='')       

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')       
      .col-lg-7.my-lg-0.my-3
        .bg10.p-4
          p Una de las técnicas más comunes de extracción es el web scraping, que permite obtener información estructurada de páginas web. Sin embargo, esta técnica debe utilizarse con responsabilidad, respetando los términos de servicio de los sitios web y las políticas de privacidad aplicables.

          p.mb-0 El filtrado de datos es el proceso de eliminar o modificar datos que no cumplen con ciertos criterios de calidad o relevancia. Podemos clasificar las técnicas de filtrado en varias categorías según su propósito:   


    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de filtrado de datos, objetivos, técnicas comunes y consideraciones.

        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Tipo de Filtrado
                th Objetivo
                th Técnicas Comunes
                th Consideraciones

            tbody
              tr
                td Limpieza
                td Eliminar errores y anomalías
                td Detección de #[i outliers], corrección de formatos
                td Puede requerir validación manual
              tr
                td Reducción
                td Disminuir el volumen de datos
                td Muestreo, agregación
                td Riesgo de pérdida de información
              tr
                td Transformación
                td Convertir datos a formato útil
                td Normalización, codificación
                td Debe mantener la integridad de los datos
              tr
                td Enriquecimiento
                td Agregar información adicional
                td.fst-italic Joins, lookup tables
                td Puede aumentar la complejidad

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Transformación e integración de datos    
    .row.justify-content-center.mb-4
      .col.my-lg-0.my-3
        p La transformación de datos es como traducir un texto a diferentes idiomas: el significado debe mantenerse, aunque la forma cambie. Este proceso implica convertir los datos de su formato original a uno que sea más adecuado para el análisis o el modelado. Las transformaciones pueden ser tan simples como cambiar el formato de una fecha o tan complejas como aplicar cálculos matemáticos avanzados.

        p Una transformación común es la normalización, que ajusta los valores numéricos a una escala común. Por ejemplo, si tenemos datos de ventas en diferentes monedas, necesitaremos convertirlos todos a una moneda común para poder compararlos adecuadamente. Otro ejemplo sería la estandarización de textos, asegurando que todas las cadenas de caracteres sigan el mismo formato (mayúsculas/minúsculas, tratamiento de espacios, etc.).    
      .col-auto.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='')       

    .row.justify-content-center.mb-5
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')       
      .col-lg-7.my-lg-0.my-3
        p La integración de datos es el proceso de combinar datos de diferentes fuentes en una vista unificada y coherente. Este proceso puede ser particularmente desafiante cuando las fuentes tienen diferentes estructuras, formatos o niveles de calidad. Es como armar un rompecabezas donde las piezas provienen de diferentes cajas: necesitamos encontrar la forma de que encajen correctamente. 

        p La integración también debe considerar la temporalidad de los datos. Los datos históricos pueden ser valiosos para identificar tendencias y patrones, pero deben integrarse de manera que mantengan su contexto temporal. Por ejemplo, al analizar el rendimiento de ventas, necesitamos asegurarnos de que estamos comparando períodos equivalentes y considerando factores estacionales.


        p El éxito en la transformación e integración de datos requiere un equilibrio entre la automatización y el criterio humano. Si bien muchos procesos pueden automatizarse, el conocimiento del dominio y el juicio experto son fundamentales para garantizar que las transformaciones sean significativas y que la integración produzca resultados útiles para el análisis posterior.

    .row.justify-content-start.mb-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4.text-white
            h4.mb-0 Errores comunes y riesgos de datos contradictorios

    .row.justify-content-center.mb-4 
      .col-lg-6.my-3
        TimeLineRED.color-primario(data-aos="fade-right")
          p(numero="1" titulo="Confusión en la toma de decisiones") Los datos contradictorios pueden llevar a tomar decisiones erróneas, ya que diferentes fuentes de información proporcionan resultados opuestos. Esto afecta la confiabilidad de los análisis y puede generar estrategias mal orientadas.
          p(numero="2" titulo="Impacto en el análisis de tendencias") Cuando los datos contienen contradicciones, los modelos predictivos y el análisis de tendencias se ven gravemente afectados. Esto puede dar lugar a conclusiones erróneas sobre comportamientos futuros o el desempeño de una estrategia.
          p(numero="3" titulo="Problemas en la integración de datos") La combinación de datos provenientes de diferentes fuentes, sin un proceso de validación y reconciliación adecuado, puede generar incoherencias. Esto es especialmente crítico cuando se integran bases de datos de sistemas no compatibles o mal gestionados.
          p(numero="4" titulo="Desconfianza de los usuarios") La presencia de datos contradictorios puede minar la confianza de los usuarios o stakeholders en los resultados obtenidos. La falta de confianza afecta la aceptación y el uso de los sistemas de inteligencia empresarial o modelos de IA.
          p(numero="5" titulo="Dificultad en la escalabilidad") A medida que los volúmenes de datos crecen, las contradicciones en los datos se vuelven más difíciles de detectar. Esto complica la escalabilidad de los sistemas de análisis y puede generar errores en el procesamiento a gran escala.

      .col-lg-6.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='')  

    .row.justify-content-center.align-items-center.bg11.p-0
      .col-lg-5.my-lg-0.my-3.p-0
        img.img-mov(src='@/assets/curso/temas/47.png', alt='')         
      .col-lg-7.my-lg-0.my-3
        .p-4.j1
          h5.text-white.bg12.px-2 Cómo mitigar estos problemas
          p.mb-0 Para evitar que los datos contradictorios afecten el análisis y la toma de decisiones, es necesario implementar procesos robustos de validación, limpieza y unificación de datos. Asegurar la consistencia y la verificación continua es clave para obtener resultados precisos y confiables.                   
</template>

<script>
export default {
  name: 'Tema2',
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
