export default {
  global: {
    Name: 'Verificación, control y análisis de riesgos sanitarios',
    Description:
      'Este componente formativo aborda la verificación de programas de saneamiento como limpieza, desinfección y control de plagas. Además, orienta en la identificación de factores de contaminación y medidas preventivas en la cadena productiva de alimentos, basándose en la normativa sanitaria vigente para asegurar la inocuidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
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
          'Fundamentos de los programas de saneamiento en la industria alimentaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia de los programas de saneamiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Marco normativo colombiano aplicable a los programas de saneamiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Relación de los programas de saneamiento con las Buenas Prácticas de Manufactura (BPM)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructura documental de un programa de saneamiento',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Verificación de los programas que soportan las condiciones de saneamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Programa de limpieza y desinfección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Programa de control de plagas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Programa de manejo de residuos sólidos y líquidos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Programa de abastecimiento de agua potable',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Programa de mantenimiento de instalaciones y equipos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Programa de control de proveedores y materias primas',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Programa de capacitación del personal',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Verificación, registros y acciones correctivas',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Factores de contaminación de los alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Clasificación de los peligros: físicos, químicos y biológicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fuentes y rutas de contaminación en la cadena productiva',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Enfermedades Transmitidas por Alimentos (ETA): un enfoque en los peligros biológicos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Identificación de medidas preventivas basadas en el diagnóstico sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'El diagnóstico sanitario como herramienta de análisis',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Principios del Sistema HACCP (Análisis de Peligros y Puntos Críticos de Control)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Barreras primarias: control de materia prima, procesos y personal',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Acciones correctivas y preventivas ante hallazgos',
            hash: 't_4_4',
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
        download: 'downloads/92130093_CF02_DU.pdf',
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
      termino: 'Acción correctiva',
      significado:
        'Conjunto de acciones tomadas para eliminar la causa de una no conformidad detectada u otra situación no deseable, con el fin de evitar que vuelva a ocurrir.',
    },
    {
      termino: 'Alérgeno',
      significado:
        'Sustancia que desencadena una respuesta exagerada del sistema inmunológico (reacción alérgica) en personas susceptibles. En alimentos, incluye leche, huevo, maní, soya, gluten, entre otros.',
    },
    {
      termino: 'BPM (Buenas Prácticas de Manufactura)',
      significado:
        'Principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado y almacenamiento de alimentos para consumo humano.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de peligros (físicos, químicos o biológicos) de una superficie, alimento o persona a otro alimento que inicialmente estaba libre de ese peligro.',
    },
    {
      termino: 'Diagnóstico sanitario',
      significado:
        'Evaluación sistemática de las condiciones higiénicas y sanitarias de una empresa de alimentos, mediante inspección, revisión documental y análisis, para determinar su nivel de cumplimiento y áreas de mejora.',
    },
    {
      termino: 'ETA (Enfermedades Transmitidas por Alimentos)',
      significado:
        'Síndrome originado por la ingestión de alimentos o agua que contienen agentes biológicos o químicos en cantidades que afectan la salud del consumidor.',
    },
    {
      termino: 'HACCP (Análisis de Peligros y Puntos Críticos de Control)',
      significado:
        'Sistema preventivo de gestión de la inocuidad que identifica, evalúa y controla peligros significativos para la seguridad de los alimentos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Condición de los alimentos que garantiza que no causarán daño al consumidor cuando se preparen y/o consuman de acuerdo con el uso al que estén destinados.',
    },
    {
      termino: 'Límite crítico',
      significado:
        'Criterio que separa la aceptabilidad de la inaceptabilidad en un punto crítico de control (PCC). Es un valor medible (ej. tiempo, temperatura, pH).',
    },
    {
      termino: 'No conformidad',
      significado:
        'Incumplimiento de un requisito especificado en la normativa, un procedimiento o un estándar de calidad.',
    },
    {
      termino: 'PCC (Punto Crítico de Control)',
      significado:
        'Punto, paso o procedimiento en la elaboración de un alimento en el que se puede aplicar un control para prevenir, eliminar o reducir un peligro a un nivel aceptable.',
    },
    {
      termino: 'Peligro biológico',
      significado:
        'Organismos vivos, como bacterias, virus, parásitos y hongos, cuya presencia en los alimentos puede causar enfermedad al consumidor.',
    },
    {
      termino: 'Peligro físico',
      significado:
        'Objeto extraño presente en el alimento que puede causar lesiones físicas al consumidor (ej. metal, vidrio, plástico, hueso).',
    },
    {
      termino: 'Peligro químico',
      significado:
        'Sustancia química presente en el alimento de forma no intencional que puede causar intoxicaciones o daños a la salud (ej. residuos de limpieza, plaguicidas, toxinas).',
    },
    {
      termino: 'POES (Procedimientos Operativos Estandarizados de Saneamiento)',
      significado:
        'Descripción detallada de cómo, cuándo, dónde y con qué se deben llevar a cabo las tareas de limpieza y desinfección.',
    },
    {
      termino: 'Prerrequisito',
      significado:
        'Condiciones y prácticas básicas (como los programas de saneamiento y las BPM) necesarias para mantener un ambiente higiénico a lo largo de la cadena de producción y que son la base para implementar el sistema HACCP.',
    },
    {
      termino: 'Registro',
      significado:
        'Documento que presenta resultados obtenidos o proporciona evidencia de las actividades desempeñadas. En inocuidad, los registros son fundamentales para demostrar la trazabilidad y el control.',
    },
    {
      termino: 'Resolución 2674 de 2013',
      significado:
        'Norma sanitaria colombiana que establece los requisitos para las fábricas de alimentos y bebidas, incluyendo la obligatoriedad de implementar programas de saneamiento y BPM.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para seguir el rastro de un alimento a través de todas las etapas de producción, transformación y distribución, desde el origen (campo) hasta el consumidor final.',
    },
    {
      termino: 'Verificación',
      significado:
        'Aplicación de métodos, procedimientos, ensayos y otras evaluaciones, además del monitoreo, para constatar el cumplimiento del plan de control de inocuidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bureau Veritas Formación. (2024). <em>Publicada la versión en español de los principios generales de los alimentos del Codex</em>.',
      link: 'https://www.bureauveritasformacion.com/boletin/noticias_home/BVF-publicada-version-espanol-principios-generales-alimentos-codex.aspx',
    },
    {
      referencia:
        'Byruchko, R. T., & Tondo, E. C. (2023). <em>Atualizações dos princípios gerais de higiene de alimentos do Codex Alimentarius – Revisão 2020</em>. Universidade Federal do Rio Grande do Sul.',
      link: 'http://hdl.handle.net/10183/267364',
    },
    {
      referencia:
        'Codex Alimentarius. (2009). <em>Higiene de los alimentos: Textos básicos (4.ª ed.)</em>. Organización de las Naciones Unidas para la Agricultura y la Alimentación y Organización Mundial de la Salud.',
      link: 'https://www.fao.org/3/a1552s/a1552s00.htm',
    },
    {
      referencia:
        'Codex Alimentarius. (2020). <em>Principios generales de higiene de los alimentos (CXC 1-1969)</em>. Organización de las Naciones Unidas para la Agricultura y la Alimentación y Organización Mundial de la Salud.',
      link: 'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B1-1969%252FCXC_001s.pdf',
    },
    {
      referencia:
        'FAO/OMS. (2023). <em>Principios generales de higiene de los alimentos. Revisión 2020</em>. Codex Alimentarius.',
      link: 'https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/es/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2002). <em>Decreto 60 de 2002. Por el cual se promueve la aplicación del Sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP) en las fábricas de alimentos y se reglamenta el proceso de certificación</em>. Diario Oficial No. 44.698.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-0060-de-2002.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). <em>Resolución 2674 de 2013. Por la cual se reglamenta el artículo 126 del Decreto-Ley 019 de 2012 y se dictan otras disposiciones</em>. Diario Oficial No. 48.891.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Safe Quality Food Institute (SQFI). (2023). <em>Hojas guía: Plan de higiene personal</em>.',
      link: 'https://www.sqfi.com/es-mx/the-sqf-code/choose-your-code/library-of-codes/code-document/tip-sheet-22---personal-hygiene-plan',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. Sede Bogotá. Oficina de Gestión Ambiental. (s. f.). <em>Residuos peligrosos</em>.',
      link: 'https://ogabogota.unal.edu.co/componente-antropico/residuos/residuos-peligrosos/',
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
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Rosmery Conde',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
