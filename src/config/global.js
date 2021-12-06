export default {
  global: {
    componenteFormativo: 'Manejo de la comunicación en un equipo de trabajo',
    descripcionCurso:
      'Este componente formativo se propone para que las organizaciones promuevan en sus equipos de trabajo líderes recursivos, comprometidos y con objetivos claros en beneficio de la organización.',
    fondoBannerPrincipal: require('@/assets/curso/bg.jpg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Barreras de la comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de barreras en la comunicación',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cómo detectar barreras de comunicación en la empresa',
            hash: 't1-2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Asertividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas de comunicación asertiva',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medios para trabajar la asertividad',
            hash: 't2-2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Canales de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de canales en la comunicación',
            hash: 't3-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Importancia de los canales de comunicación',
            hash: 't3-2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolos de atención',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Proceso comunicativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Elementos del proceso comunicativo',
            hash: 't5-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Conflictos en la comunicación y sus soluciones',
            hash: 't5-2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Pensamiento creativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Habilidades del pensamiento creativo',
            hash: 't6-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo:
              'Importancia del pensamiento creativo en un equipo de trabajo',
            hash: 't6-2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Castanyer, O. (2010). La asertividad: expresión de una sana autoestima. Editorial Desclée de Brouwer S.A. ',
    },
    {
      referencia:
        'Editorial Etecé. (2021). Comunicación interna. Enciclopedia Concepto.',
      link: 'https://concepto.de/comunicacion-interna/',
    },
    {
      referencia:
        'García, C. (2017). La importancia de la comunicación en el conflicto. Kunay Consultores.',
      link:
        'https://kunay.pe/2017/10/03/comunicacion-en-conflicto-importancia/',
    },
    {
      referencia:
        'Munévar, L. (2019). Principales habilidades del pensamiento creativo. LinkedIn.',
      link:
        'https://www.linkedin.com/pulse/principales-habilidades-de-pensamiento-creativo-mun%C3%A9var-tinoco/?originalSubdomain=es',
    },
    {
      referencia: 'Peiró, R. (2021). Canal de comunicación. Economipedia.',
      link: 'https://economipedia.com/definiciones/canal-de-comunicacion.html',
    },
    {
      referencia:
        'Ramos, W., Paredes, M., Terán, P. y Lema, L. (2017). Comunicación Organizacional. Ediciones Grupo Compás.',
      link:
        'http://142.93.18.15:8080/jspui/bitstream/123456789/501/3/comunicaci%C3%B3n%20organizacional.pdf',
    },
    {
      referencia:
        'Robbins, S. y Judge, T. (2009). Comportamiento organizacional. Pearson Educación.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15550/mod_resource/content/0/ROBBINS%20comportamiento-organizacional-13a-ed-_nodrm.pdf',
    },
    {
      referencia:
        'Semczuk, N. (2021). Las 10 técnicas de solución de conflictos en el trabajo. The Digital Project Manager.',
      link:
        'https://thedigitalprojectmanager.com/es/10-estrategias-efectivas-resolucion-conflictos/',
    },
    {
      referencia:
        'Todo sobre Comunicación. (2020). Tipos de comunicación. Comunicación asertiva y trabajo en equipo.',
      link:
        'https://todosobrecomunicacion.com/comunicacion-asertiva-y-trabajo-en-equipo/',
    },
    {
      referencia:
        'Universidad Internacional de La Rioja [UNIR]. (2021). ¿Qué son las barreras de comunicación y cuáles son los tipos que existen?',
      link: 'https://ecuador.unir.net/actualidad-unir/barreras-comunicacion/',
    },
    {
      referencia:
        'Zambrano, X. (2015). Comunicación Organizacional: Plan de comunicación global para Aseguradora del Sur. Universidad San Francisco de Quito.',
      link: 'https://repositorio.usfq.edu.ec/handle/23000/5575',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'es un pilar esencial en las organizaciones, ya que contribuye a mantener relaciones pacíficas que ayudan a la paz y el diálogo.',
    },
    {
      termino: 'Barreras físicas',
      significado:
        'todo obstáculo que hace que la comunicación no sea óptima debido al entorno en que se encuentran las personas.',
    },
    {
      termino: '<em>Newsletters</em>',
      significado: 'boletín informativo.',
    },
    {
      termino: '<em>Onboarding</em>',
      significado:
        'es la práctica de acelerar la incorporación del capital humano a la organización. Se centra en la orientación de los nuevos trabajadores, a fin de ayudarlos en su adaptación a la cultura organizacional.',
    },
  ],
  complementario: [
    {
      texto:
        'CRS Académico. (2020). Barreras de la Comunicación. ¿Qué son barreras en la comunicación? Tipos de barreras [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0VA1LgYoQCg',
    },
    {
      texto:
        'Amaya, M. (2020). 8 técnicas avanzadas de comunicación asertiva [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6B2UR4WYs0c',
    },
    {
      texto:
        'Vela, A. (2016). 9 consejos para crear una comunicación asertiva #infografía #Infographic. TICs y Formación.',
      tipo: 'Blog post',
      link:
        'https://ticsyformacion.com/2016/06/05/9-consejos-para-crear-una-comunicacion-asertiva-infografia-infographic/',
    },
    {
      texto:
        'Hammond, M. (2021). Cómo diseñar un protocolo de atención al cliente (con ejemplos). HubSpot.',
      tipo: 'Blog post',
      link: 'https://blog.hubspot.es/service/protocolo-servicio-cliente',
    },
    {
      texto:
        'Cevallos, D. (s. f.). Importancia del pensamiento creativo. Universidad Nacional de Educación [UNAE].',
      tipo: 'Artículo',
      link:
        'http://repositorio.unae.edu.ec/bitstream/56000/333/1/ILLARI%20ENERO%20JUNIO%20N7%2045-47.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Neira Patricia Gamboa Suarez',
        cargo: 'Experto temático',
        centro:
          'Centro de servicios empresariales y turísticos Regional Santander',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Marcela Gonzalez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
