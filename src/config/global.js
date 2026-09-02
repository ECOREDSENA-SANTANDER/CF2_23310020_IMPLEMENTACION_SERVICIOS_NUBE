export default {
  global: {
    Name: 'Redes seguras y servicios avanzados en la nube',
    Description:
      'El componente Redes seguras y servicios avanzados en la nube desarrolla habilidades para diseñar, configurar y proteger infraestructuras lógicas en entornos virtualizados desde una perspectiva estratégica y técnica. Promueve el análisis masivo de datos, la integración de servicios de inteligencia artificial y la construcción de soluciones escalables alineadas con los estrictos requerimientos de seguridad y los objetivos operativos de la organización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
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
        titulo:
          'Arquitecturas de computación en la nube: fundamentos de la red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Diferenciación estratégica: nube pública, privada e híbrida',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Impacto de la arquitectura en el diseño de redes seguras',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Construcción y gestión de redes seguras en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>Virtual Private Cloud</em> (VPC): el perímetro lógico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Arquitecturas multi-VPC y segmentación de entornos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Direccionamiento y conectividad: IP pública e IP interna',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas avanzadas de seguridad y enrutamiento perimetral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Reglas de <em>firewall</em> y grupos de seguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tablas de enrutamiento y control del flujo de tráfico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Balanceo de cargas y alta disponibilidad en servicios web',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Automatización y controles de acceso (IAM) en la red',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Fundamentos de <em>big data</em> en infraestructuras <em>cloud</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y evolución del procesamiento masivo de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Servicios administrados y almacenamiento escalable (<em>data warehouse</em>)',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ciclo de vida y procesamiento de datos masivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Extracción y carga de datos en repositorios centralizados',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Transformación y aseguramiento de la calidad de los datos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Aprendizaje automático e inteligencia artificial como servicios gestionados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Conceptos fundamentales: <em>machine learning</em> e IA en la nube',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Herramientas esenciales y selección de componentes',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Integración de APIs y modelos preentrenados en soluciones reales',
            hash: 't_6_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'API (interfaz de programación de aplicaciones)',
      significado:
        'conjunto de reglas y protocolos que permite a diferentes aplicaciones de <em>software</em> comunicarse entre sí. En el contexto de la nube, facilita el consumo rápido de servicios cognitivos avanzados sin necesidad de programar los algoritmos subyacentes.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'conjunto de datos de gran volumen, velocidad y variedad que supera las capacidades de captura, gestión y procesamiento de los sistemas de bases de datos tradicionales.',
    },
    {
      termino: '<em>Data lake</em> (lago de datos)',
      significado:
        'repositorio centralizado que permite almacenar grandes volúmenes de datos estructurados, semiestructurados y no estructurados en su formato nativo y crudo, generalmente alojado en servicios de almacenamiento de objetos.',
    },
    {
      termino: '<em>Data warehouse</em> (almacén de datos)',
      significado:
        'sistema centralizado diseñado para el análisis e informes, que almacena datos históricos estructurados, filtrados y altamente optimizados para ejecutar consultas analíticas rápidas y complejas.',
    },
    {
      termino: 'ELT (Extracción, Carga y Transformación)',
      significado:
        'proceso moderno de integración de datos donde la información se extrae de la fuente, se carga directamente en un <em>data lake</em> en la nube y, posteriormente, aprovecha el poder de cómputo gestionado para ser transformada.',
    },
    {
      termino: 'Grupo de seguridad',
      significado:
        '<em>firewall</em> virtual con estado que opera a nivel de instancia (máquina virtual) en la nube, controlando estrictamente el tráfico entrante y saliente mediante reglas de permisión explícita.',
    },
    {
      termino: 'IAM (Gestión de Identidades y Accesos)',
      significado:
        'marco de políticas y tecnologías que garantiza que los usuarios y sistemas autorizados tengan el acceso adecuado a los recursos tecnológicos correctos, basándose en el principio de menor privilegio.',
    },
    {
      termino: 'Inferencia',
      significado:
        'en el contexto de la inteligencia artificial, es la fase donde un modelo de <em>machine learning</em> ya entrenado recibe datos nuevos y desconocidos para realizar predicciones, clasificaciones o tomar decisiones en tiempo real.',
    },
    {
      termino: 'Internet Gateway (puerta de enlace a internet)',
      significado:
        'componente de red virtual que se conecta a una VPC para permitir la comunicación bidireccional entre las instancias ubicadas en subredes públicas y el internet exterior.',
    },
    {
      termino: 'Load Balancer (balanceador de cargas)',
      significado:
        'servicio de red que distribuye automáticamente el tráfico de aplicaciones entrante entre múltiples destinos o servidores, mejorando la disponibilidad y la tolerancia a fallos del sistema.',
    },
    {
      termino: '<em>Machine learning</em> (aprendizaje automático)',
      significado:
        'rama de la inteligencia artificial que se centra en el desarrollo de algoritmos estadísticos capaces de aprender patrones a partir de grandes volúmenes de datos empíricos sin ser explícitamente programados para cada eventualidad.',
    },
    {
      termino: 'Multi-VPC',
      significado:
        'arquitectura de red avanzada donde una organización despliega y gestiona múltiples nubes virtuales privadas independientes para aislar distintos entornos de trabajo, como desarrollo, pruebas y producción.',
    },
    {
      termino: 'NAT Gateway',
      significado:
        'servicio administrado que permite a las instancias situadas en una subred privada conectarse de forma unidireccional a internet (para descargar actualizaciones) impidiendo que los usuarios externos inicien una conexión hacia dichas instancias.',
    },
    {
      termino: 'Network ACL (lista de control de acceso a la red)',
      significado:
        'capa opcional de seguridad que actúa como un <em>firewall</em> sin estado a nivel de subred, controlando el tráfico que entra y sale de toda una zona de la VPC mediante reglas numeradas.',
    },
    {
      termino: 'NLP (procesamiento de lenguaje natural)',
      significado:
        'rama de la inteligencia artificial que ayuda a las computadoras a comprender, interpretar y manipular el lenguaje humano, utilizado ampliamente en chatbots y análisis de sentimiento.',
    },
    {
      termino: 'Subred privada',
      significado:
        'segmento lógico de una red virtual que no cuenta con una ruta directa hacia el internet público, diseñada para alojar recursos críticos e información confidencial, como servidores de bases de datos.',
    },
    {
      termino: 'Subred pública',
      significado:
        'segmento lógico de una red virtual cuya tabla de enrutamiento dirige el tráfico externo a través de un Internet Gateway, permitiendo alojar recursos que deben ser accesibles desde el exterior, como servidores web.',
    },
    {
      termino: 'VPC (<em>Virtual Private Cloud</em>)',
      significado:
        'entorno de red virtual lógicamente aislado y aprovisionado dentro de la infraestructura de una nube pública, que otorga al usuario control total sobre el direccionamiento IP y las políticas de seguridad de su topología.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon Web Services. (s. f.). Security best practices for your VPC. AWS Documentation.',
      link: '',
    },
    {
      referencia:
        'Google Cloud. (s. f.). AI and machine learning resources. Cloud Architecture Center.',
      link: '',
    },
    {
      referencia:
        'Joyanes Aguilar, L. (2022). Computación en la nube (2.ª ed.). Marcombo.',
      link: '',
    },
    {
      referencia:
        'López Fandiño, V. M. (2024). Arquitectura Big Data. Ra-Ma Editorial.',
      link: '',
    },
    {
      referencia:
        'Microsoft Azure. (2023). Implementación de seguridad de red en Azure. Microsoft Learn.',
      link: '',
    },
    {
      referencia:
        'Ortega Candel, J. M. (2023). Big data, machine learning y data science en Python. Ra-Ma Editorial.',
      link: '',
    },
    {
      referencia:
        'Wheeler, A. & Winburn, M. (2015). Cloud Storage Security: A Practical Guide. Elsevier.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
