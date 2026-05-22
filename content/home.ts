export const homeContent = {
  hero: {
    headline: 'Gestionamos el área tecnológica de tu institución',
    subheadline:
      'Currícula alineada al Diseño Curricular Provincial, formación docente continua, certificaciones oficiales y un coordinador pedagógico dedicado. Tu colegio cumple con los estándares. Vos no cargás solo con la tarea.',
    ctaPrimary: {
      label: 'Reservar videollamada',
      href: 'https://calendly.com/PLACEHOLDER', // TODO: URL real de Calendly de Nacho
    },
    ctaSecondary: {
      label: 'Ver paquetes',
      href: '/#paquetes',
    },
  },

  credibility: {
    label: 'Avalados por instituciones académicas y tecnológicas de referencia',
    items: [
      { name: 'UTN Regional La Plata', type: 'logo' as const }, // TODO: confirmar uso del logo con Nacho
      { name: 'Code.org', type: 'logo' as const },
      { name: 'Aval académico Educabot', type: 'text' as const },
      // { name: 'EDLP', type: 'logo' as const }, // Activar cuando se confirme el acuerdo
    ],
  },

  problem: {
    headline: 'Gestionar la tecnología educativa es cada vez más complejo',
    subheadline: 'Los directivos llevan ese peso solos.',
    items: [
      'Docentes sin actualización en herramientas digitales ni metodologías vigentes',
      'Equipamiento obsoleto o mal aprovechado',
      'Normativa educativa que cambia y exige cada vez más',
      'Familias que demandan más tecnología y pocas respuestas disponibles',
    ],
  },

  whatWeDo: {
    headline: 'Una gestión integral que cubre los tres frentes',
    cards: [
      {
        title: 'Gestión pedagógica y curricular',
        description:
          'Diseñamos y actualizamos la currícula anual de tu institución. Secuencias didácticas alineadas al Diseño Curricular PBA, ODS UNESCO 2030, UNICEF y OMS. La planificación del año, resuelta.',
      },
      {
        title: 'Acompañamiento institucional y docente',
        description:
          'Un coordinador pedagógico dedicado con visitas periódicas, informes de seguimiento y canal permanente de asesoría. Capacitación continua para docentes del área y de otras áreas.',
      },
      {
        title: 'Recursos tecnológicos y certificaciones',
        description:
          'Validación del equipamiento existente, kits de robótica en comodato, recursos a precio preferencial y certificaciones oficiales avaladas por UTN Regional La Plata, Educabot y Code.org.',
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
      photo: '/images/testimonials/manantiales.avif',
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
          'Videollamada de 30 minutos para entender tu institución: contexto, necesidades y posibilidades.',
      },
      {
        number: '02',
        title: 'Diagnóstico',
        description:
          'Relevamiento del área tecnológica: equipamiento, currícula actual, perfil docente. Entregamos un informe de situación.',
      },
      {
        number: '03',
        title: 'Propuesta y paquete',
        description:
          'Presentamos el plan anual adaptado a tu institución. Elegís el formato que mejor se ajusta al presupuesto y momento del colegio.',
      },
      {
        number: '04',
        title: 'Lanzamiento',
        description:
          'Kick-off con el equipo docente, puesta en marcha del plan pedagógico y coordinador asignado.',
      },
      {
        number: '05',
        title: 'Seguimiento continuo',
        description:
          'Visitas periódicas, informes de avance, ajustes en tiempo real. El coordinador está disponible durante todo el año.',
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
        id: 'extracurricular',
        name: 'EXTRACURRICULAR',
        tagline: 'La puerta de entrada más simple',
        description:
          'El colegio cede el espacio. Nosotros llevamos docentes, materiales y plan pedagógico. Las familias se inscriben directamente con La Bot.',
        recommended: false,
        cta: 'Reservar videollamada',
        ctaHref: 'https://calendly.com/PLACEHOLDER', // TODO
      },
      {
        id: 'base',
        name: 'BASE',
        tagline: 'La gestión esencial del área tecnológica',
        description:
          'Currícula anual, certificaciones, kits en comodato, capacitación docente y visita trimestral del coordinador.',
        recommended: false,
        cta: 'Reservar videollamada',
        ctaHref: 'https://calendly.com/PLACEHOLDER', // TODO
      },
      {
        id: 'full',
        name: 'FULL',
        tagline: 'Gestión completa con acompañamiento mensual',
        description:
          'Todo el BASE más formación transversal para docentes de otras áreas, muestra tecnológica anual, docente suplente incluido y visita mensual del coordinador.',
        recommended: true,
        cta: 'Reservar videollamada',
        ctaHref: 'https://calendly.com/PLACEHOLDER', // TODO
      },
    ],
    disclaimerText: '¿No sabés cuál elegir? En la videollamada lo vemos juntos.',
    oneshotText: '¿Buscás una actividad puntual?',
    oneshotLinkLabel: 'Ver menú de actividades',
    oneshotLinkHref: '/paquetes#oneshot',
  },

  caseStudy: {
    headline: 'Un caso real, documentado con honestidad',
    description:
      'Trabajamos con un colegio piloto en La Plata. Esto es lo que construimos juntos.',
    metrics: [
      // TODO: reemplazar con métricas reales del colegio (Nacho las provee)
      { value: 'PLACEHOLDER', label: 'PLACEHOLDER' },
      { value: 'PLACEHOLDER', label: 'PLACEHOLDER' },
      { value: 'PLACEHOLDER', label: 'PLACEHOLDER' },
    ],
    linkLabel: 'Leer el caso completo',
    linkHref: '/caso-de-estudio',
  },

  team: {
    headline: 'Las personas detrás de la propuesta',
    subheadline: 'Cuando reservás una videollamada, hablás con nosotros.',
    members: [
      {
        name: 'Ignacio Alonso',
        credential: 'Ingeniero Industrial, UNLP',
        bio: 'Fundador de La Bot. Diseñó la propuesta pedagógica de Experiencia Bot y coordina el vínculo con cada institución.',
        photo: '/images/team/nacho.jpg', // TODO: agregar foto real
      },
      {
        name: 'Paula PLACEHOLDER', // TODO: apellido real
        credential: 'PLACEHOLDER', // TODO: credencial real
        bio: 'PLACEHOLDER', // TODO: bio real
        photo: '/images/team/paula.jpg', // TODO: agregar foto real
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
          'Los precios varían según el paquete y la escala de la institución. En la primera videollamada presentamos un rango claro adaptado a tu contexto. Sin sorpresas en el proceso.',
      },
      {
        question: '¿Quién aporta los kits de robótica? ¿Quedan en el colegio?',
        answer:
          'Los kits Educabot se proveen en comodato durante todo el año lectivo, sin costo adicional de adquisición. Si la institución quiere incorporarlos a su patrimonio, gestionamos la compra a precio preferencial.',
      },
      {
        question: '¿Qué hace el coordinador pedagógico concretamente?',
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
          'En BASE y FULL trabajamos con los docentes del área tecnológica de la institución, a quienes capacitamos y acompañamos. En EXTRACURRICULAR, La Bot lleva sus propios docentes para las actividades.',
      },
      {
        question: '¿Las certificaciones tienen validez ante el Ministerio de Educación?',
        // TODO: confirmar alcance legal exacto con Nacho antes de publicar
        answer:
          'Las certificaciones son emitidas por UTN Regional La Plata, Educabot y Code.org. Acreditan formalmente los saberes tecnológicos de los alumnos ante familias y organismos educativos.',
      },
    ],
    linkLabel: 'Ver todas las preguntas',
    linkHref: '/faq',
  },

  finalCta: {
    headline: '¿Tu institución está lista para dar el siguiente paso?',
    description:
      'Reservá una videollamada de 30 minutos con Ignacio Alonso. Sin compromiso, sin formularios. Solo una conversación para entender si podemos ayudarte.',
    cta: {
      label: 'Reservar videollamada',
      href: 'https://calendly.com/PLACEHOLDER', // TODO: URL real de Calendly de Nacho
    },
    whatsapp: {
      label: 'Prefiero escribir por WhatsApp',
      href: 'https://wa.me/5492215053158',
    },
  },
} as const
