export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de datos y estructuras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de datos y análisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de modelado de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructuras de datos fundamentales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad y tratamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características de calidad de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de extracción y filtrado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Transformación e integración de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de bases de datos	8',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bases de datos relacionales y no relacionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Operaciones CRUD y consultas básicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Gestión y optimización de bases de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Introducción a la Inteligencia Artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos fundamentales de IA',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicaciones y casos de uso',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas básicas para IA',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Conclusiones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Fundamentos de datos y estructuras',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, septiembre 5). <i>Ejemplo problemas en la recolección de la información</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LOlsg6ZkdcA ',
    },
    {
      tema: '2. Calidad y tratamiento de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 5). <i>Datos sucios</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qf6MR4o58cs ',
    },
    {
      tema: '2. Calidad y tratamiento de datos',
      referencia:
        '<i>Limpiar datos de Excel, CSV, PDF y Hojas de cálculo de Google con el intérprete de datos. (s. f.). Tableau.</i>',
      tipo: 'Portal <i>web</i>',
      link:
        'https://help.tableau.com/current/pro/desktop/es-es/data_interpreter.htm ',
    },
    {
      tema: '2. Calidad y tratamiento de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022a, agosto 31). <i>Procesos y procedimientos para la gestión de calidad de la información</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PeVlTP8qLhE ',
    },
    {
      tema: '2. Calidad y tratamiento de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, julio 25). <i>Procesamiento y análisis de datos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8OSIN2kdU5o ',
    },
    {
      tema: '3. Gestión de bases de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, octubre 11). <i>Conceptos y estructuras de las bases de datos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xUpr20u9dmc ',
    },
    {
      tema: '3. Gestión de bases de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 24). <i>Administración de bases de datos: Introducción</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GL7CHwwPlKM ',
    },
    {
      tema: '4. Introducción a la Inteligencia Artificial',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 24). <i>Inteligencia artificial en los datos.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-hYXrGAUYAE ',
    },
  ],
  glosario: [
    {
      termino: 'ACID',
      significado:
        'Acrónimo de Atomicidad, Consistencia, Aislamiento y Durabilidad; propiedades que garantizan que las transacciones en una base de datos sean fiables.',
    },
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto ordenado y finito de operaciones sistemáticas que permite hacer un cálculo y hallar la solución de un problema específico.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Sistema organizado para recopilar, almacenar y gestionar datos de manera estructurada y eficiente.',
    },
    {
      termino: 'CRUD',
      significado:
        '<i>Acrónimo de Create, Read, Update, Delete;</i> operaciones básicas que se pueden realizar sobre datos almacenados.',
    },
    {
      termino: '<i>Dataset</i>',
      significado:
        'Conjunto de datos organizados y formateados de manera específica para su uso en análisis o entrenamiento de modelos.',
    },
    {
      termino: 'Datos estructurados',
      significado:
        'Información que está organizada en un formato predefinido y fácilmente procesable por máquinas, típicamente en tablas con filas y columnas.',
    },
    {
      termino: 'ETL',
      significado:
        '<i>Extract, Transform, Load </i>(Extraer, Transformar, Cargar); proceso que permite a las organizaciones mover datos desde múltiples fuentes, reformatearlos y limpiarlos, y cargarlos en otra base de datos.',
    },
    {
      termino: 'Estructura de datos',
      significado:
        'Forma particular de organizar datos en una computadora para que puedan ser utilizados de manera eficiente.',
    },
    {
      termino: 'Indexación',
      significado:
        'Proceso de crear estructuras de datos adicionales que mejoran la velocidad de recuperación de información en una base de datos.',
    },
    {
      termino: 'Inteligencia Artificial',
      significado:
        'Campo de la informática que busca crear sistemas capaces de aprender y resolver problemas de manera similar a como lo haría un ser humano.',
    },
    {
      termino: 'JSON',
      significado:
        '<i>JavaScript Object Notation; </i>formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.',
    },
    {
      termino: '<i>Machine Learning</i>',
      significado:
        'Rama de la inteligencia artificial que se centra en el desarrollo de técnicas que permiten que las computadoras aprendan y mejoren a partir de la experiencia.',
    },
    {
      termino: 'Metadata',
      significado:
        'Datos que proporcionan información sobre otros datos, describiendo su contenido, calidad, condición y otras características.',
    },
    {
      termino: 'NoSQL',
      significado:
        'Tipo de base de datos que no utiliza el esquema tradicional de tablas relacionales, permitiendo mayor flexibilidad y escalabilidad.',
    },
    {
      termino: 'Normalización',
      significado:
        'Proceso de organizar los datos en una base de datos para reducir la redundancia y mejorar la integridad de los datos.',
    },
    {
      termino: 'Pipeline de datos',
      significado:
        'Conjunto de procesos y herramientas que permiten mover datos desde una fuente hacia un destino, realizando transformaciones en el camino.',
    },
    {
      termino: '<i>Query</i>',
      significado:
        'Consulta o petición específica para recuperar información de una base de datos.',
    },
    {
      termino: '<i>Schema</i>',
      significado:
        'Estructura que define cómo se organizan los datos en una base de datos, incluyendo tablas, campos y relaciones.',
    },
    {
      termino: 'SQL',
      significado:
        '<i>Structured Query Language; </i>lenguaje estándar para gestionar y manipular bases de datos relacionales.',
    },
    {
      termino: 'Validación de datos',
      significado:
        'Proceso de asegurar que los datos cumplan con ciertos criterios de calidad y formato antes de ser utilizados en análisis o procesamiento posterior.',
    },
  ],
  referencias: [
    {
      referencia:
        'Antonio, P. P. (2022). Gestión de bases de datos. Ediciones Paraninfo, S.A.',
    },
    {
      referencia:
        'Díaz, C. O., Soler, P., Pérez, M. & Mier, A. (2024). OMASHU: La ciencia detrás del éxito; Big Data e IA en los eSports. Revista SISTEMAS, 170, 61-79.',
    },
    {
      referencia:
        'Díez, R. P., Gómez, A. G., & De Abajo Martínez, N. (2001). Introducción a la inteligencia artificial: sistemas expertos, redes neuronales artificiales y computación evolutiva. Universidad de Oviedo.',
    },
    {
      referencia:
        'Guardelli, E. (2024). Minería de Procesos: Convertir Datos en Valor. MedTechBiz.',
    },
    {
      referencia:
        'Jones, H. (2018). Analítica de Datos: Una guía esencial para principiantes en minería de datos, recolección de datos, análisis de <i>Big Data</i> para negocios y conceptos de inteligencia empresarial. Independently Published.',
    },
    {
      referencia:
        'Leyva, D. S. (2024). Domina <i>Machine Learning</i>: Guía completa para principiantes. Independently Published.',
    },
    {
      referencia:
        'McKinsey, W. (2023). Python para análisis de datos. Anaya Multimedia.',
    },
    {
      referencia:
        'Orlandi, M. A. M. (2024). Tecnologías Big Data, Minería de Datos y Analítica aplicada a la gestión de Recursos Humanos: contiene: un caso de estudio. Editora Dialética.',
    },
    {
      referencia:
        'Peraza, E. A. C. (2012). Estructuras y Fundamentos de Datos. Guía de ejercicios prácticos. Lulu.com.',
    },
    {
      referencia:
        'Shovic, J. C. & Simpson, A. (2019). Python All-in-One For Dummies. John Wiley & Sons.',
    },
    {
      referencia:
        'Subirats Maté, L., Pérez Trenard, D. O., Calvo González, M. & Isabel Guitart Hormigo. (2019). Introducción a la limpieza y análisis de los datos. ',
      link:
        'https://openaccess.uoc.edu/bitstream/10609/148647/1/IntroduccionALaLimpiezaYAnalisisDeLosDatos.pdf',
    },
  ],
  global: {
    Name:
      'Modelamiento y gestión de datos para modelos de inteligencia artificial',
    Description:
      'Este componente ofrece una introducción comprehensiva al modelamiento y gestión de datos para sistemas de inteligencia artificial. Abarca los fundamentos de estructuras de datos, técnicas de calidad y tratamiento, sistemas de gestión de bases de datos y conceptos básicos de IA. Proporciona las bases teóricas necesarias para comprender cómo los datos se transforman en información valiosa para modelos de IA.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
