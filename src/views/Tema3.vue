<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de bases de datos

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/48.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión efectiva de bases de datos representa un componente central en la infraestructura de cualquier sistema de información moderno. En este capítulo, se explorarán los diferentes tipos de bases de datos, sus características distintivas y las mejores prácticas para su administración y optimización. 

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Bases de datos relacionales y no relacionales

    .row.justify-content-center.mb-5
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/59.png', alt='')       
      .col-lg-7.my-lg-0.my-3
        .bg4.p-4.h-100.j1
          p En el ecosistema moderno de gestión de datos, nos encontramos principalmente con dos grandes familias de bases de datos: las relacionales y las no relacionales (NoSQL). Cada una tiene sus propias fortalezas y casos de uso ideales, y comprender sus diferencias es fundamental para tomar decisiones acertadas en el diseño de sistemas de datos.

          p.mb-0 Para visualizar mejor las diferencias fundamentales entre estos dos tipos de bases de datos, observemos la siguiente representación gráfica. Como se ilustra en la infografía, mientras las bases de datos relacionales se caracterizan por su estructura rígida y garantías ACID, las bases de datos NoSQL destacan por su flexibilidad y escalabilidad. Esta distinción es muy importante al momento de seleccionar el tipo de base de datos más adecuado para nuestras necesidades específicas. Por ejemplo, si necesitamos mantener la integridad referencial en transacciones financieras, una base de datos relacional sería la elección óptima. En cambio, si estamos manejando datos de redes sociales con estructuras variables y alto volumen de escrituras, una base de datos NoSQL podría ser más apropiada.  

    .row.justify-content-center.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Tipos de bases de datos
        img.img-a.img-t.mb-2(src='@/assets/curso/temas/60.svg', alt='')       
        figcaption Fuente. OIT, 2024.

    .row.justify-content-center.mb-5.pb-3
      .col-lg-5.my-lg-0.my-3
        .p-3.h-100.j1 
          p.mb-0 Ahora bien, las bases de datos relacionales han sido el pilar de la gestión de datos durante décadas. Se basan en el modelo relacional, donde los datos se organizan en tablas con filas y columnas claramente definidas. La fortaleza de este modelo radica en su capacidad para mantener la integridad de los datos y establecer relaciones claras entre diferentes entidades. Cuando necesitamos garantizar la consistencia de las transacciones y mantener relaciones complejas entre datos, las bases de datos relacionales son la opción más segura.   
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/61.png', alt='')      
      .col-lg-4.my-lg-0.my-3
        .bg13.brad.p-2.px-3.h-100.j1 
          p.mb-0 Por otro lado, las bases de datos NoSQL surgieron como respuesta a las necesidades de la era del big data y la web moderna. Ofrecen mayor flexibilidad en cuanto a la estructura de los datos y mejor escalabilidad horizontal. No requieren un esquema fijo, lo que las hace ideales para datos semi-estructurados o cuando la estructura de los datos puede cambiar con frecuencia.        

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Operaciones CRUD y consultas básicas

    .row.justify-content-center.mb-5
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/62.png', alt='')       
      .col-lg-7.my-lg-0.my-3
        .bg4.p-4.h-100.j1
          p #[b Las operaciones CRUD (Create, Read, Update, Delete)] son de alta relevancia para interactuar con los datos almacenados en cualquier sistema de base de datos. La implementación de estas operaciones varía según el tipo de base de datos, pero los principios básicos permanecen constantes.

          p En el contexto de bases de datos relacionales, estas operaciones se realizan mediante SQL (Structured Query Language). Las consultas SELECT permiten recuperar datos específicos, mientras que INSERT, UPDATE y DELETE se utilizan para modificar los registros existentes. La potencia de SQL radica en su capacidad para realizar consultas complejas que combinan datos de múltiples tablas y aplican criterios de filtrado y agregación.

          p Para las bases de datos NoSQL, las operaciones CRUD se implementan de manera diferente según el tipo específico de base de datos. Por ejemplo, en una base de datos documental como MongoDB, se trabaja con documentos JSON que pueden tener estructura variable, y las operaciones se realizan mediante métodos específicos de la API de la base de datos. 

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Gestión y optimización de bases de datos

    .row.justify-content-center.mb-5
      .col-lg-7.my-lg-0.my-3
        .bg14.p-4.h-100.j1
          p La gestión efectiva de bases de datos va más allá de simplemente almacenar y recuperar información. Implica un conjunto de prácticas y técnicas para asegurar el rendimiento, la disponibilidad y la integridad de los datos. La optimización es un proceso continuo que debe adaptarse a las cambiantes necesidades del sistema.

          p Un aspecto esencial de la optimización es el diseño e implementación de índices. Los índices son estructuras de datos adicionales que mejoran la velocidad de las operaciones de búsqueda, pero tienen un costo en términos de espacio de almacenamiento y rendimiento de escritura. La decisión de qué campos indexar debe basarse en un análisis cuidadoso de los patrones de acceso a los datos.    
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/63.png', alt='')       

    .row.justify-content-center.mb-5
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/64.png', alt='')       
      .col-lg-7.my-lg-0.my-3
        p El monitoreo del rendimiento es una parte fundamental de la gestión de bases de datos. Es necesario prestar atención a métricas como el tiempo de respuesta de las consultas, el uso de recursos del sistema y los patrones de acceso a los datos. Las herramientas de monitoreo identifican cuellos de botella y oportunidades de optimización.

        p La seguridad es otro aspecto que no puede descuidarse. Esto incluye la gestión de usuarios y permisos, la encriptación de datos sensibles y la implementación de políticas de respaldo y recuperación. En el contexto de la inteligencia artificial, donde frecuentemente se trabaja con datos sensibles o personales, la seguridad adquiere una importancia aún mayor.

        p La escalabilidad es un factor clave en la gestión de grandes volúmenes de datos. Los sistemas de bases de datos deben ser diseñados para adaptarse al crecimiento futuro, ya sea a través de escalabilidad vertical (ampliando los recursos de un único servidor) o horizontal (distribuyendo la carga entre varios servidores). Las estrategias de particionamiento y replicación son fundamentales para manejar grandes cantidades de datos de forma eficiente. 

    .row.justify-content-center.mb-4
      .col-lg-6.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/65.png', alt='')      
      .col-lg-6.my-3
        TimeLineRED.color-primario(data-aos="fade-right")
          p(numero="1" titulo="Identificar los campos más consultados") Para crear índices efectivos, es necesario analizar las consultas frecuentes y determinar qué campos son utilizados con mayor regularidad en los filtros y las cláusulas JOIN. Esto permite enfocarse en las columnas que realmente mejorarán el rendimiento de las consultas.
          p(numero="2" titulo="Evaluar el costo de actualización") Aunque los índices aceleran las búsquedas, también pueden ralentizar las operaciones de inserción, actualización y eliminación. Es importante equilibrar el beneficio de la velocidad de lectura con el costo adicional en las operaciones de escritura, priorizando índices en columnas que se consultan más que las que se actualizan con frecuencia.
          p(numero="3" titulo="Seleccionar el tipo adecuado de índice") Dependiendo de las necesidades del sistema, se deben elegir entre diferentes tipos de índices, como los índices B-tree, hash, o índices compuestos. La elección debe basarse en la estructura de los datos y las operaciones de búsqueda que se realizarán con mayor frecuencia.
          p(numero="4" titulo="Monitorear el uso de índices") Es fundamental realizar un seguimiento del uso de los índices en las consultas. Algunos índices pueden volverse innecesarios con el tiempo, especialmente si las consultas o patrones de acceso cambian. Monitorear su rendimiento permite eliminar índices redundantes y mantener la base de datos optimizada.
          p(numero="5" titulo="Considerar la fragmentación de índices") A medida que se insertan, actualizan o eliminan datos, los índices pueden fragmentarse, lo que reduce su eficiencia. Se debe realizar un mantenimiento periódico para reorganizar o reconstruir los índices y asegurarse de que sigan funcionando de manera óptima.

    .row.justify-content-center
      .col-lg-10
        .bg2.p-4
          p.mb-0 Estas prácticas permiten crear índices bien diseñados que no solo optimizan las consultas, sino que también equilibran el uso de recursos y el rendimiento general de la base de datos.

</template>

<script>
export default {
  name: 'Tema3',
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
