const CALENDLY_URL = 'https://calendly.com/experienciabot/30min'
const WHATSAPP_URL = 'https://wa.me/5492216082818'

export const homeContent = {
  hero: {
    headline: 'Que la tecnología en tu colegio tenga sentido.',
    subheadline:
      'Los dispositivos no alcanzan: hace falta un proyecto detrás, ese es nuestro trabajo.',
    description:
      'Tus estudiantes van a necesitar la tecnología como si fuera su idioma nativo. Nosotros construimos ese camino con tu institución, de nivel inicial a secundaria, con coherencia pedagógica en cada nivel, kit tecnológico propio, un/a coordinador/a pedagógico/a dedicado/a, currícula actualizada, docentes formados y familias informadas.',
    ctaPrimary: {
      label: 'Agendá tu llamada',
      href: CALENDLY_URL,
    },
    ctaSecondary: {
      label: 'Conocé la propuesta',
      href: '/#propuesta',
    },
    whatsapp: {
      label: 'Prefiero escribir por WhatsApp',
      href: WHATSAPP_URL,
    },
  },

  credibility: {
    label: 'Avalados por instituciones académicas y tecnológicas de referencia',
    items: [
      { name: 'Colegio Manantiales', src: '/images/testimonials/manantiales25.png' },
      { name: 'La Cueva de Osofete', src: '/images/testimonials/osofeteLogo.png' },
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
    headline: 'Una gestión integral que cubre tres pilares fundamentales',
    cards: [
      {
        title: 'Gestión pedagógica y curricular',
        items: [
          {
            lead: '',
            text: 'Diseñamos la currícula anual adaptada a las necesidades de tu institución. Secuencias didácticas por sala, grado y año, con proyectos y cápsulas pedagógicas integrales, alineadas a los NAP, al Diseño Curricular Jurisdiccional correspondiente y a directrices de ODS UNESCO 2030, UNICEF y OMS.',
          },
        ],
      },
      {
        title: 'Acompañamiento institucional y docente',
        items: [
          {
            lead: 'Capacitación docente.',
            text: 'Una capacitación intensiva a principio de año para que tus docentes trabajen con autonomía y confianza desde la primera clase.',
          },
          {
            lead: 'Acompañamiento todo el año.',
            text: 'Un/a coordinador/a pedagógico/a dedicado/a, canal de consulta, reuniones e informes para que el equipo directivo vea qué se implementó y qué aprendieron los/as estudiantes.',
          },
        ],
      },
      {
        title: 'Recursos tecnológicos',
        items: [
          {
            lead: 'Kit tecnológico a medida.',
            text: 'Nuestro kit propio, en comodato y con mantenimiento incluido. Se adapta a cada nivel y a la realidad de tu colegio.',
          },
        ],
      },
    ],
    closing:
      'La dirección no compra clases o kits sueltos: obtiene una solución para implementar, acompañar y evaluar la educación tecnológica de su institución durante todo el año.',
    cta: {
      label: 'Agendá tu llamada',
      href: CALENDLY_URL,
    },
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
          'Videollamada gratuita de 30 minutos para entender el contexto y las necesidades de tu institución.',
      },
      {
        number: '02',
        title: 'Diagnóstico gratuito',
        description:
          'Relevamos el área tecnológica (equipamiento, currícula actual y perfil docente), de forma presencial o virtual, y te entregamos un informe de situación.',
      },
      {
        number: '03',
        title: 'Propuesta integral a medida',
        description:
          'Te presentamos una propuesta única, armada a partir del diagnóstico y pensada para tu colegio.',
      },
      {
        number: '04',
        title: 'Inicio y capacitación',
        description:
          'Kick-off con el equipo docente, entrega del kit Bot Lab, asignación del/la coordinador/a y capacitación intensiva inicial.',
      },
      {
        number: '05',
        title: 'Seguimiento continuo',
        description:
          'Visitas, informes y disponibilidad del/la coordinador/a durante todo el año.',
      },
    ],
    linkLabel: 'Ver proceso completo',
    linkHref: '/como-trabajamos',
  },

  proposal: {
    headline: 'Una propuesta concreta y situada, pensada para tu colegio',
    subheadline:
      'Partimos del diagnóstico gratuito de tu institución y armamos una propuesta integral a medida, que se adapta al proyecto educativo institucional y a tu equipo docente. Con los recursos adecuados para cada caso.',
    label: 'Propuesta integral para tu colegio',
    pillarsLabel: 'Integra los tres ejes centrales',
    pillars: [
      'Gestión pedagógica y curricular',
      'Acompañamiento institucional y docente',
      'Recursos tecnológicos',
    ],
    cta: {
      label: 'Agendá tu llamada',
      href: CALENDLY_URL,
    },
    oneshot: {
      label: 'Actividades puntuales',
      headline: '¿Buscás una actividad puntual?',
      description:
        'Para instituciones, organizaciones o eventos que quieran sumar una experiencia tecnológica de una sola jornada o un taller corto.',
      items: [
        'Capacitación docente (2 a 4 h)',
        'Charla para familias sobre cuidados digitales',
        'Taller de IA (11 a 18 años)',
        'Robótica educativa (6 a 12 años)',
        'Taller Maker (6 a 14 años)',
        'Programación de videojuegos (9 a 16 años)',
      ],
      cta: {
        label: 'Consultá por WhatsApp',
        href: WHATSAPP_URL,
      },
    },
  },

  caseStudy: {
    headline: 'Organizaciones que nos eligen',
    cases: [
      {
        title: 'Colegio Manantiales',
        description:
          'Acompañamos a Colegio Manantiales en la integración de la robótica, la programación y la tecnología en Inicial y Primaria, con capacitación docente, currícula propia y seguimiento durante todo el ciclo lectivo.',
        logos: [{ src: '/images/testimonials/manantiales25.png', alt: 'Colegio Manantiales' }],
        topics: [] as string[],
      },
      {
        title: 'Estudiantes Innova 2026',
        description:
          'Junto a Estudiantes Innova, llevamos adelante un programa de talleres gratuitos abiertos a la comunidad.',
        logos: [
          { src: '/images/testimonials/estudiantesDeLaPlata.png', alt: 'Club Estudiantes de La Plata' },
          { src: '/images/testimonials/innovaEstudiantes.png', alt: 'Innova Estudiantes' },
        ],
        topics: ['Robótica Educativa', 'Programación de Videojuegos', 'Inteligencia Artificial', 'Talleres Maker'],
      },
    ],
  },

  team: {
    headline: 'Las personas detrás de la propuesta',
    subheadline: 'Cuando reservás una videollamada, hablás con nosotros.',
    members: [
      {
        name: 'Paula Olavarría',
        role: 'Directora General de Estrategia Comercial y Alianzas (contacto comercial)',
        credential: 'Ingeniera Industrial (UTN La Plata). Co-fundadora de La Bot y Experiencia Bot.',
        bio: 'Docente y coordinadora de instituciones. Coordina los vínculos institucionales y el desarrollo del proyecto.',
        photo: '/images/team/paula.PNG',
      },
      {
        name: 'Ignacio Alonso',
        role: 'Director General de Ingeniería, Producto e Innovación Tecnológica',
        credential: 'Ingeniero Industrial (UNLP). Co-fundador de La Bot y Experiencia Bot.',
        bio: 'Docente y coordinador de instituciones. Gestión e implementación del proyecto.',
        photo: '/images/team/ignacio.PNG',
      },
      {
        name: 'Sebastián Dillon',
        role: 'Director General de Pedagogía, Innovación Educativa y Contenidos Académicos',
        credential:
          'Prof. y Lic. en Diseño Multimedial (UNLP). Co-fundador de Experiencia Maker y Experiencia Bot, más de 20 años en educación.',
        bio: 'Docente de tecnología y coordinador de instituciones. Desarrolla e implementa la propuesta pedagógica.',
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
          'Depende de cada colegio. Después del diagnóstico gratuito armamos una propuesta a medida y la cotizamos en base a la matrícula y al alcance acordado.',
      },
      {
        question: '¿Quién aporta los kits de robótica? ¿Quedan en el colegio?',
        answer:
          'Los aportamos nosotros/as. El kit Bot Lab es propio de Experiencia Bot y se entrega en comodato: queda en el colegio durante todo el ciclo lectivo, y el mantenimiento y la reposición por uso habitual corren por nuestra cuenta.',
      },
      {
        question: '¿Qué hace el/la coordinador/a pedagógico/a concretamente?',
        answer:
          'Es tu referente en Experiencia Bot: lidera la capacitación inicial, acompaña a los/as docentes durante el año, responde consultas, hace el seguimiento del plan y entrega los informes al equipo directivo. La frecuencia de visitas y reuniones se acuerda con cada colegio.',
      },
      {
        question: '¿Se puede empezar a mitad de año?',
        answer:
          'Sí. Ajustamos el plan y la capacitación al momento del ciclo lectivo en que empiece tu colegio.',
      },
      {
        question: '¿Los docentes los aportan ustedes o los del colegio?',
        answer:
          'Son los/as docentes del colegio. Nuestro trabajo es habilitarlos/as: los/as capacitamos y acompañamos para que puedan dar las clases con autonomía.',
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
      href: CALENDLY_URL,
    },
    whatsapp: {
      label: 'Prefiero escribir por WhatsApp',
      href: WHATSAPP_URL,
    },
  },
} as const
