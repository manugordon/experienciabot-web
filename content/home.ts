export const homeContent = {
  hero: {
    headline: 'Que la tecnología en tu colegio tenga sentido.',
    subheadline:
      'Los dispositivos no alcanzan. Hace falta un proyecto detrás, ese es nuestro trabajo.',
    description:
      'Tus estudiantes van a necesitar la tecnología como si fuera su idioma nativo. Nosotros construimos ese camino con tu institución, de nivel inicial a secundaria, con coherencia pedagógica en cada nivel y certificaciones que lo acreditan, un/a coordinador/a dedicado/a, currícula actualizada, docentes formados y familias informadas.',
    ctaPrimary: {
      label: 'Agendá tu llamada',
      href: 'https://calendly.com/PLACEHOLDER', // TODO: URL real de Calendly de Nacho
    },
    ctaSecondary: {
      label: 'Ver propuestas',
      href: '/#paquetes',
    },
    whatsapp: {
      label: 'Prefiero escribir por WhatsApp',
      href: 'https://wa.me/5492215479388',
    },
  },

  credibility: {
    label: 'Avalados por instituciones académicas y tecnológicas de referencia',
    items: [
      // { name: 'UTN Regional La Plata', type: 'logo' as const }, // pendiente de aval
      // { name: 'Code.org', type: 'logo' as const }, // pendiente de autorización
      { name: 'Educabot', type: 'logo' as const },
    ],
  },

  problem: {
    headline: 'Gestionar la tecnología educativa es cada vez más complejo',
    subheadline: 'Tener tecnología no es lo mismo que usarla bien.',
    items: [
      'Docentes con ganas de incorporar tecnología, pero sin la formación ni el tiempo para hacerlo bien en el aula.',
      'Tecnología que existe en la institución pero que sin proyecto pedagógico no genera aprendizaje real.',
      'Padres que piden más tecnología en el aula, y vos no tenés una respuesta concreta para darles.',
      'Normativa educativa que cambia y exige cada vez más.',
    ],
  },

  whatWeDo: {
    headline: 'Una gestión integral que cubre los tres frentes',
    cards: [
      {
        title: 'Gestión pedagógica y curricular',
        description:
          'Diseñamos la currícula anual adaptada a las necesidades de tu institución. Secuencias didácticas por sala, grado y año, con actividades alineadas al diseño curricular jurisdiccional y a directrices de ODS UNESCO 2030, UNICEF y OMS. La planificación del año, resuelta.',
      },
      {
        title: 'Acompañamiento institucional y docente',
        description:
          'Un/a coordinador/a pedagógico/a dedicado/a con visitas periódicas, informes de seguimiento y canal permanente de asesoría. Capacitación continua para docentes del área y de otras áreas.',
      },
      {
        title: 'Recursos tecnológicos y certificaciones',
        description:
          'Validación del equipamiento existente, kits de robótica en comodato, recursos a precio preferencial y certificaciones oficiales avaladas.',
      },
    ],
    linkLabel: 'Ver metodología completa',
    linkHref: '/como-trabajamos',
  },

  testimonial: {
    sectionHeadline: 'Lo que cambia cuando una institución trabaja con nosotros',
    fallback: {
      quote:
        'Antes de trabajar con Experiencia Bot, el área tecnológica era mi mayor dolor de cabeza. Hoy tengo docentes que saben lo que hacen, alumnos que se certifican y yo puedo ocuparme del resto de la dirección.',
      author: 'Graciela Rodríguez',
      role: 'Directora General',
      school: 'Colegio Manantiales, La Plata',
      photo: '/images/testimonials/manantiales25.png',
    },
    // videoUrl: 'https://www.youtube.com/embed/PLACEHOLDER', // Descomentar cuando el video esté listo
  },

  howWeWork: {
    headline: 'La experiencia, paso a paso',
    subheadline:
      'Comprometerse con un proveedor nuevo genera preguntas. Por eso el proceso es transparente desde el primer contacto.',
    steps: [
      {
        number: '01',
        title: 'Nos conocemos',
        description:
          'Videollamada de 30 minutos para entendernos: nos das contexto, haces consultas y entendemos las necesidades y posibilidades de tu institución, gratis, sin compromiso de nada.',
      },
      {
        number: '02',
        title: 'Diagnóstico gratuito',
        description:
          'Visitamos tu institución y realizamos un relevamiento total del área tecnológica: equipamiento, currícula actual, perfil docente. Entregamos un informe de situación.',
      },
      {
        number: '03',
        title: 'Propuesta y paquete',
        description:
          'Presentamos el plan anual adaptado a tu institución. Elegís el formato que mejor se ajusta al presupuesto y momento del colegio.',
      },
      {
        number: '04',
        title: 'Inicio y capacitación',
        description:
          'Kick-off con el equipo docente, puesta en marcha del plan pedagógico y coordinador/a asignado/a con capacitaciones a todos los docentes.',
      },
      {
        number: '05',
        title: 'Seguimiento continuo',
        description:
          'Visitas periódicas, informes de avance, ajustes en tiempo real. El/La coordinador/a está disponible durante todo el año.',
      },
    ],
    linkLabel: 'Ver proceso completo',
    linkHref: '/como-trabajamos',
  },

  packages: {
    headline: 'Tres formatos para cada momento del colegio',
    subheadline:
      'No todos los colegios necesitan lo mismo ni están en el mismo punto. Los tres paquetes cubren distintos niveles de compromiso y presupuesto.',
    items: [
      {
        id: 'starters',
        name: 'STARTERS',
        tagline: 'La puerta de entrada',
        description:
          'Talleres extracurriculares con currícula, materiales y soporte incluidos. La forma perfecta de incorporar tecnología sin presiones y conocer cómo trabajamos.',
        recommended: false,
        cta: 'Agendá tu llamada',
        ctaHref: 'https://calendly.com/PLACEHOLDER', // TODO
      },
      {
        id: 'base',
        name: 'BASE',
        tagline: 'Primer paso sólido',
        description:
          'Respaldo pedagógico y curricular completo, con implementación gradual. El primer paso sólido hacia la integración tecnológica real en tu institución.',
        recommended: false,
        cta: 'Agendá tu llamada',
        ctaHref: 'https://calendly.com/PLACEHOLDER', // TODO
      },
      {
        id: 'full',
        name: 'FULL',
        tagline: 'El programa completo',
        description:
          'Gestión integral del área tecnológica: currícula, capacitación docente y coordinador/a dedicado que visita tu institución todos los meses.',
        recommended: true,
        cta: 'Agendá tu llamada',
        ctaHref: 'https://calendly.com/PLACEHOLDER', // TODO
      },
    ],
    disclaimerText: '¿No sabés cuál elegir? En la videollamada lo vemos juntos.',
    disclaimerWsp: {
      label: 'o escribinos por WhatsApp',
      href: 'https://wa.me/5492215479388',
    },
    oneshotText: '¿Buscás una actividad puntual?',
    oneshotLinkLabel: 'Ver menú de actividades',
    oneshotLinkHref: '/paquetes#oneshot',
  },

  caseStudy: {
    headline: 'Organizaciones que nos eligen',
    description:
      'Junto al Club Estudiantes de La Plata, llevamos adelante Estudiantes Innova 2026: un programa integral de talleres gratuitos abiertos a toda la comunidad. Como socios pedagógicos y directores del proyecto, nuestro objetivo es convertir al club en un referente nacional de innovación educativa.',
    metrics: [
      { value: 'Robótica Educativa', label: '' },
      { value: 'Programación de Videojuegos', label: '' },
      { value: 'Inteligencia Artificial', label: '' },
      { value: 'Talleres Maker', label: '' },
    ],
    linkLabel: 'Conocer el proyecto',
    linkHref: '/caso-de-estudio',
  },

  team: {
    headline: 'Las personas detrás de la propuesta',
    subheadline: 'Cuando reservás una videollamada, hablás con nosotros.',
    members: [
      {
        name: 'Ignacio Alonso',
        credential: 'Ingeniero Industrial (UNLP)',
        bio: 'Co-Fundador de La Bot y Experiencia Bot. Docente y coordinador de instituciones. Gestión e implementación del proyecto.',
        photo: '/images/team/ignacio.PNG',
      },
      {
        name: 'Paula Olavarría',
        credential: 'Ingeniera Industrial (UTN La Plata)',
        bio: 'Co-Fundadora de La Bot y Experiencia Bot. Docente y coordinadora de instituciones. Coordina los vínculos institucionales y el desarrollo del proyecto.',
        photo: '/images/team/paula.PNG',
      },
      {
        name: 'Sebastián Dillon',
        credential: 'Prof. y Lic. en Diseño Multimedial (UNLP)',
        bio: 'Co-Fundador de Experiencia Maker y Experiencia Bot. Docente de tecnología con más de 20 años en educación. Coordinador de instituciones. Desarrolla e implementa la propuesta pedagógica.',
        photo: '/images/team/sebastian.png',
      },
    ],
    linkLabel: 'Conocernos mejor',
    linkHref: '/quienes-somos',
  },

  safety: {
    headline: 'El cuidado de tus alumnos, garantizado',
    description:
      'Todos los docentes que trabajan en instituciones cuentan con Registro Nacional de Reincidencia y certificado de aptitud psicofísica vigentes. El cuidado de los alumnos no es un requisito adicional: es el punto de partida.',
  },

  faq: {
    headline: 'Preguntas frecuentes de directivos',
    items: [
      {
        question: '¿Cuánto cuesta el servicio?',
        answer:
          'Iniciando en 4000 pesos por alumno por mes, los precios varían según el paquete y la escala de la institución. En la primera videollamada presentamos un rango claro adaptado a tu contexto y necesidades. Sin sorpresas en el proceso.',
      },
      {
        question: '¿Quién aporta los kits de robótica? ¿Quedan en el colegio?',
        answer:
          'En caso de ya tener kits adaptamos la propuesta para implementarlos. En caso de necesitar nuevos, nuestro aliado Educabot provee excelentes opciones en comodato durante todo el ciclo lectivo, a precio preferencial por trabajar con nosotros. Si la institución quiere incorporarlos a su patrimonio, puede realizar la compra.',
      },
      {
        question: '¿Qué hace el/la coordinador/a pedagógico/a concretamente?',
        answer:
          'Visita la institución periódicamente, acompaña a los docentes en la implementación del plan, genera informes de avance y está disponible por canal permanente para consultas pedagógicas y técnicas.',
      },
      {
        question: '¿Se puede empezar a mitad de año?',
        answer:
          'Sí. El diagnóstico inicial permite adaptar el plan al momento del ciclo lectivo en el que ingresa la institución. No hay una única ventana de entrada.',
      },
      {
        question: '¿Los docentes los aportan ustedes o los del colegio?',
        answer:
          'Los docentes del área tecnológica de la institución no serán reemplazados, acompañamos y capacitamos para que puedan adaptarse a la nueva propuesta y crecer junto con la institución. Pero si no tuviesen o necesitaran sumar personal, los ayudamos en la búsqueda y selección del mismo.',
      },
    ],
    linkLabel: 'Ver todas las preguntas',
    linkHref: '/faq',
  },

  finalCta: {
    headline: '¿Tu institución está lista para dar el siguiente paso?',
    description:
      'Reservá una videollamada de 30 minutos con alguien de nuestro equipo. Sin compromiso, sin formularios. Solo una conversación para entender si podemos ayudarte.',
    cta: {
      label: 'Agendá tu llamada',
      href: 'https://calendly.com/PLACEHOLDER', // TODO: URL real de Calendly de Nacho
    },
    whatsapp: {
      label: 'Prefiero escribir por WhatsApp',
      href: 'https://wa.me/5492215479388',
    },
  },
} as const
