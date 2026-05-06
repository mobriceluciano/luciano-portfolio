document.addEventListener('DOMContentLoaded', () => {

  const ICONS = {
    zap: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    'credit-card': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    unlock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',
    'arrow-right-circle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
    'trending-up': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    clock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    eye: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    'layout-dashboard': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>',
    brain: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><line x1="9" y1="21" x2="15" y2="21"/></svg>'
  };

  const CATEGORY_LABELS = {
    ai: 'Inteligencia Artificial',
    automation: 'Automatización',
    strategy: 'Estrategia',
    analytics: 'Análisis'
  };

  const siteData = {
    skills: {
      business: [
        'Optimización de Procesos', 'Análisis y Estrategia Comercial',
        'Gestión de Producto', 'Análisis de Mercado'
      ],
      technical: [
        'SQL', 'Tableau', 'n8n', 'Visual Studio'
      ],
      ai_tools: [
        'Cursor (AI IDE)', 'Claude', 'n8n + IA', 'Agentes de IA'
      ],
      platforms: [
        'Datadog', 'Dynatrace', 'HubSpot', 'GitHub',
        'Zendesk', 'Paquete Office'
      ],
      languages: [
        'Español (nativo)', 'Portugués (intermedio)', 'Inglés (básico)'
      ],
      soft: [
        'Liderazgo', 'Resolución de Problemas', 'Comunicación',
        'Trabajo en Equipo', 'Adaptabilidad', 'Pensamiento Analítico',
        'Toma de Decisiones', 'Mentoría', 'Curiosidad'
      ]
    },
    projects: [
      {
        id: 'automations',
        title: 'Automatización de Controles Operativos',
        category: 'automation',
        tags: ['n8n', 'Databricks', 'SQL', 'Slack', 'Google Sheets', 'HubSpot'],
        description: 'Suite de flujos que detectan anomalías operativas diariamente y notifican de forma automática.',
        details: 'Diseñé e implementé una suite de flujos automatizados en n8n conectados con Databricks (SQL), Google Sheets, HubSpot y Slack. Los controles corren diariamente e incluyen: detección de pagos duplicados con notificación automática al merchant vía email transaccional, monitoreo de retiros demorados, y control de cuotas con interés. Cada flujo consulta la base de datos, transforma los resultados, registra el hallazgo y dispara alertas al equipo.',
        impact: 'Procesos que antes requerían revisión manual diaria de horas ahora corren sin intervención. El equipo pasó de reaccionar a problemas a anticiparlos.',
        icon: 'zap'
      },
      {
        id: 'cuota-simple',
        title: 'Cuota Simple',
        category: 'strategy',
        tags: ['Regulación', 'Implementación', 'Scripts', 'Control'],
        description: 'Lideré la implementación del programa gubernamental de financiación en cuotas para Pago Nube.',
        details: 'Cuota Simple era un programa del gobierno argentino que habilitaba a tiendas de ciertos rubros a ofrecer financiación en cuotas con tarifa especial. Coordiné con el equipo técnico la definición de criterios de elegibilidad y construí un sistema de control con scripts para validar que la implementación funcionara correctamente en producción.',
        impact: 'Merchants de Pago Nube accedieron a un beneficio que la competencia tardó más en implementar, fortaleciendo la propuesta de valor en un momento clave del mercado.',
        icon: 'credit-card'
      },
      {
        id: 'habilitacion-industrias',
        title: 'Habilitación de Industrias',
        category: 'strategy',
        tags: ['Business Case', 'Análisis de Datos', 'Adopción'],
        description: 'Business case que desbloqueó industrias restringidas y sumó +7% de adoption.',
        details: 'Construí un business case para dimensionar el volumen de negocios que operaban en industrias que Pago Nube no permitía (como sex shop y alcohol). El análisis incluyó estimación del mercado potencial, evaluación de riesgos regulatorios y proyección de impacto en adopción, lo que permitió tomar la decisión de habilitar estos segmentos con controles adecuados.',
        impact: '+7% de adoption rate tras la liberación. Se abrieron segmentos de mercado que antes se perdían frente a la competencia.',
        icon: 'unlock'
      },
      {
        id: 'migracion-mshops',
        title: 'Migración de Mercado Shops',
        category: 'strategy',
        tags: ['Análisis', 'Detección Automática', 'Retención'],
        description: 'Estrategia de captación proactiva de tiendas que migraban desde Mercado Shops.',
        details: 'Cuando MercadoLibre anunció la deprecación de Mercado Shops, desarrollé un análisis del flujo de tiendas migrantes y construí un control automático que detectaba nuevas tiendas que anteriormente habían operado en esa plataforma. Esto permitió contactarlas con una propuesta de Pago Nube con beneficios especiales antes de que eligieran quedarse solo con Mercado Pago.',
        impact: 'Captación oportuna de merchants en transición. Se convirtió en una ventana de oportunidad para ganar usuarios que ya conocían el e-commerce.',
        icon: 'arrow-right-circle'
      },
      {
        id: 'analisis-financiacion',
        title: 'Análisis de Financiación',
        category: 'analytics',
        tags: ['Competencia', 'Pricing', 'Análisis Mensual'],
        description: 'Monitoreo mensual de tarifas de la competencia para responder con propuestas competitivas.',
        details: 'Implementé un proceso de análisis mensual que identifica merchants a los que Mercado Pago les ofrece condiciones más favorables. El análisis cruza datos internos con inteligencia competitiva para evaluar si conviene igualar o mejorar la propuesta comercial, priorizando a los merchants con mayor potencial de churn.',
        impact: 'El equipo comercial ganó visibilidad sobre riesgos de pricing antes de que se conviertan en churn, permitiendo actuar de forma preventiva.',
        icon: 'trending-up'
      },
      {
        id: 'analisis-d1',
        title: 'Análisis D1',
        category: 'analytics',
        tags: ['Análisis Recurrente', 'Seguridad', 'Competencia', 'Adopción'],
        description: 'Análisis recurrente para habilitar retiro en 1 día a merchants con plazos de 7 o 14 días.',
        details: 'Proceso recurrente que evalúa tiendas con plazos de retiro de 7 o 14 días para determinar si pueden acceder a retiro en 1 día (D1). El análisis cruza lo que ofrece la competencia con criterios internos de seguridad y riesgo de fraude. Cada ciclo genera una lista de merchants elegibles para la habilitación.',
        impact: 'Crecimiento sostenido de la adopción de D1, cerrando la brecha con la competencia en una funcionalidad clave para los merchants.',
        icon: 'clock'
      },
      {
        id: 'trial-period',
        title: 'Trial Period',
        category: 'analytics',
        tags: ['KYC', 'Implementación', 'Medición de Impacto', 'Onboarding'],
        description: 'Implementación y medición del período de prueba de Pago Nube sin requerir KYC.',
        details: 'Los usuarios podían usar Pago Nube sin completar el KYC (Know Your Customer). Cuando se decidió implementar un bloqueo tras ciertos criterios de uso — el trial period —, coordiné la implementación con el equipo técnico y lideré la medición del impacto en conversión, adopción y completitud de KYC.',
        impact: 'Se logró un balance entre facilitar el onboarding y asegurar el cumplimiento regulatorio, mejorando la tasa de KYC completado sin frenar la adopción inicial.',
        icon: 'unlock'
      },
      {
        id: 'crystal-ball',
        title: 'Crystal Ball',
        category: 'ai',
        tags: ['IA', 'Detección Automática', 'Compliance', 'Prevención'],
        description: 'Sistema con IA que detecta tiendas con productos no permitidos antes de que generen problemas.',
        details: 'Crystal Ball usa inteligencia artificial para analizar el catálogo de tiendas y detectar aquellas que comercializan productos no permitidos en la plataforma. En lugar de actuar después de que un merchant genera fricción o reclamos, el sistema actúa de forma preventiva, identificando riesgos durante el onboarding.',
        impact: 'Reducción de fricciones post-activación y protección proactiva de la integridad de la plataforma. El equipo pasó de apagar incendios a prevenirlos.',
        icon: 'eye'
      },
      {
        id: 'ops-dashboard',
        title: 'Dashboard de Operaciones',
        category: 'automation',
        tags: ['Next.js', 'Databricks', 'SQL', 'Vercel', 'TypeScript'],
        description: 'Dashboard en tiempo real que centraliza todos los controles operativos de Pago Nube.',
        details: 'Construí un dashboard web con Next.js desplegado en Vercel, conectado directamente a Databricks. Visualiza en tiempo real los controles operativos del equipo: retiros demorados, cuotas con interés y métricas generales. Incluye tablas interactivas y KPIs que antes solo se consultaban corriendo queries manuales.',
        impact: 'Todo el estado operativo visible en un solo lugar. El equipo dejó de depender de queries ad-hoc y hojas de cálculo para entender qué estaba pasando.',
        icon: 'layout-dashboard'
      },
      {
        id: 'ai-workspace',
        title: 'Workspace de IA para Operaciones',
        category: 'ai',
        tags: ['Cursor', 'Claude', 'n8n', 'Databricks', 'Automatización'],
        description: 'Ecosistema de herramientas de IA que multiplica la productividad del equipo operativo.',
        details: 'Construí un workspace que integra Cursor (AI IDE) con contexto completo del negocio, Claude para análisis complejos, y n8n para automatizaciones. Incluye reglas de negocio documentadas, skills personalizados para el equipo y conexión directa a Databricks para consultas SQL asistidas por IA. Es la base desde la cual el equipo opera día a día.',
        impact: 'Tareas de análisis que llevaban horas se resuelven en minutos. El equipo adoptó IA como parte natural de su flujo de trabajo, no como un experimento.',
        icon: 'brain'
      }
    ]
  };

  renderProjects(siteData.projects);
  renderSkills(siteData.skills);
  initAnimations();

  function renderProjects(projects, filter) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const filtered = (!filter || filter === 'all')
      ? projects
      : projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(p => `
      <div class="project-card reveal visible" data-id="${p.id}" data-category="${p.category}">
        <div class="project-card-icon">${ICONS[p.icon] || ICONS.zap}</div>
        <div class="project-card-body">
          <h3>${p.title}</h3>
          <p class="project-card-summary">${p.description}</p>
        </div>
        <span class="project-card-cta">Ver más</span>
      </div>
    `).join('');

    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
    });
  }

  function renderSkills(skills) {
    const render = (containerId, list) => {
      const el = document.getElementById(containerId);
      if (el) {
        el.innerHTML = list.map(s => `<span class="skill-pill">${s}</span>`).join('');
      }
    };
    render('skillsBusiness', skills.business);
    render('skillsTechnical', skills.technical);
    render('skillsAI', skills.ai_tools);
    render('skillsPlatforms', skills.platforms);
    render('skillsLanguages', skills.languages);
    render('skillsSoft', skills.soft);
  }

  /* ─── Filters ──────────────────── */

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(siteData.projects, btn.dataset.filter);
    });
  });

  /* ─── Modal ────────────────────── */

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = '<div class="modal" id="projectModal"></div>';
  document.body.appendChild(overlay);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  function openModal(id) {
    const p = siteData.projects.find(pr => pr.id === id);
    if (!p) return;

    const modal = document.getElementById('projectModal');
    modal.innerHTML = `
      <button class="modal-close" aria-label="Cerrar">&times;</button>
      <h3>${p.title}</h3>
      <span class="modal-category" data-cat="${p.category}">${CATEGORY_LABELS[p.category] || p.category}</span>
      <p class="modal-details">${p.details}</p>
      <div class="modal-impact">
        <div class="modal-impact-label">Impacto</div>
        <p>${p.impact}</p>
      </div>
      <div class="modal-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
    `;

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* ─── Navbar ───────────────────── */

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ─── Stat counter ─────────────── */

  function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1500;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  /* ─── Scroll reveal ────────────── */

  function initAnimations() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.timeline-item, .skill-group, .ai-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    const heroObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        heroObserver.disconnect();
      }
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) heroObserver.observe(heroStats);
  }
});
