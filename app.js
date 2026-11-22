/**
 * War Planner · MCOC Tactical Suite v5
 * Features:
 * - Standard (50 nodes) / Big Thing (10 individual node plans, 2 slots, 10 summoners)
 * - Manual fight assignment per node with fight-only removal (without clearing team slots)
 * - Enter key selects first champion in all search inputs
 * - Prefight champion tracking and display (from CereBro TD6)
 * - Class advantage indicators removed as requested
 * - Base64 image export fixing black images
 * - Full English / Spanish i18n
 */

// ─── I18N DICTIONARY ───
const LANG = {
  es: {
    warPlanner: 'War Planner',
    heroEyebrow: 'MCOC · GUERRA DE ALIANZAS · SUITE TÁCTICA',
    subtitle: 'Planifica los caminos, optimiza los slots de atacantes MCOC, asigna invocadores y coordina la ofensiva.',
    loadExample: '⚡ Cargar ejemplo',
    exportReport: '📋 Exportar reporte',
    exportImage: '🖼️ Exportar imagen',
    profiles: '💾 Guerras Guardadas',
    clearMap: '🗑️ Limpiar mapa',
    coverage: 'COBERTURA TOTAL',
    riskNodes: 'NODOS DE RIESGO',
    topAttacker: 'TOP ATACANTE DEL BG',
    planTab: 'Plan de Guerra',
    mapTab: 'Defensores del Mapa',
    tacticalPlan: 'Plan de Guerra MCOC',
    tacticalPlanSub: 'Haz clic en cualquier slot para modificarlo. Haz clic en el atacante de cada pelea para asignarlo manualmente o en ✕ para desasignar solo la pelea.',
    assignedTotal: 'defensores asignados.',
    fightsCovered: 'peleas cubiertas',
    resetSuggested: '↺ Restablecer sugeridos',
    chooseDefender: 'Elegir defensor',
    orType: 'o escribe para autocompletar...',
    noteCTA: '📝 Nota / boost táctico...',
    noDefendersYet: 'Sin defensores aún',
    allFightsCovered: 'Todas las peleas tienen counter asignado',
    noCounterNodes: 'Nodos sin counter:',
    assignBossFirst: 'Asigna defensores para ver al MVP',
    fightsResolved: 'pelea',
    fightsResolvedPl: 'peleas',
    slotAdd: 'Añadir',
    slotEdit: '✎',
    assignedFights: 'Peleas Asignadas',
    defVsAtt: 'Defensor ➔ Atacante',
    assignDefender: '+ Asignar defensor',
    noCounterWarn: '⚠️ Sin atacante asignado',
    variationLabel: 'Var',
    customized: 'Personalizado',
    mapLabel: 'Mapa:',
    mapModeTitle: 'Variante del mapa:',
    standard: 'Estándar (50 nodos)',
    bigThing: 'Big Thing (10 nodos)',
    helperBanner: '💡 <strong>Cómo agregar defensores:</strong> Haz clic en <strong>"➕ Elegir defensor"</strong> de cualquier nodo, o escribe en el buscador. Presiona <strong>Enter</strong> para seleccionar el primer campeón.',
    mainRoutes: 'Caminos principales (1–9)',
    mainRoutesBt: 'Nodos de Guerra (1–10)',
    miniBossIsles: 'Islas de mini-jefes (A, B, C)',
    bossIsle: 'Isla del jefe final',
    searchMap: '🔍 Buscar nodo o campeón...',
    selectDefender: 'Seleccionar Defensor',
    currentDef: 'Actual:',
    popularDefs: 'Defensores Populares en Guerra:',
    allChamps: 'Todos los campeones',
    removeClass: 'Quitar defensor',
    cancel: 'Cancelar',
    modifyAttacker: 'Modificar Atacante',
    recommendedCounters: 'Counters recomendados',
    coversNodes: 'Cubre nodos:',
    emptySlot: 'Vaciar este slot',
    exportReport2: 'Reporte Táctico',
    exportSub: 'Copia este reporte para Discord, WhatsApp o Line:',
    copyClipboard: '📋 Copiar al portapapeles',
    copied: '¡Copiado! ✓',
    close: 'Cerrar',
    profilesEyebrow: 'PLANTILLAS Y GUERRAS',
    profilesTitle: 'Guardar / Cargar Planes de Guerra',
    saveCurrentPlan: 'Guardar plan de guerra actual',
    profileNamePlaceholder: 'Ej: Plantilla BG1, vs Alianza X...',
    save: 'Guardar',
    savedProfiles: 'Planes de guerra guardados',
    noProfiles: 'Aún no hay planes de guerra guardados.',
    load: 'Cargar',
    delete: '🗑️',
    loading: '⏳ Cargando...',
    loading2: 'Consultando CereBro…',
    loadingFightsCerebro: 'Consultando CereBro...',
    queryingCounters: 'Buscando counters...',
    noCounterDirectWarn: '⚠️ Sin counter directo',
    attackerCandidates: 'Atacantes disponibles en el equipo que son counter para estos nodos:',
    generatedBy: '🎯 Generado con War Planner MCOC',
    confirmClear: '¿Deseas reiniciar todos los defensores del mapa?',
    nodeLabel: 'NODO',
    routeLabel: 'Camino',
    invocadorLabel: '@Invocador',
    miniBossesA: 'Mini-jefes A',
    miniBossesB: 'Mini-jefes B',
    miniBossesC: 'Mini-jefes C',
    bossLeft: 'Camino Izquierdo',
    bossRight: 'Camino Derecho',
    bossFinal: 'Jefe Final',
    cerebro: 'Los atacantes se calculan desde CereBro.',
    noResults: 'No hay resultados registrados en CereBro.',
    analyzed: 'Analizado',
    noServer: 'Servidor requerido',
    noServerHint: 'Inicia server.py para consultar CereBro.',
    cebroBadge: 'en CereBro',
    noCereBroNote: 'Asignado manualmente',
    bigThingNote: 'Big Thing: 10 planes individuales, 1 pelea por jugador, 2 slots de atacante',
    standardNote: 'Estándar: 9 caminos de 4 peleas, 3 slots de atacante por camino',
    allClass: 'Todos',
    cosClass: 'Cósmico',
    techClass: 'Tecnológico',
    mutClass: 'Mutante',
    skiClass: 'Habilidad',
    sciClass: 'Científico',
    mysClass: 'Místico',
    clickToAssign: 'Clic para asignar atacante',
    removeFight: 'Quitar asignación de pelea',
    prefightLabel: 'Prelucha:',
    prefightTag: 'PRELUCHA',
    prefightNoSlot: 'Prelucha requerida sin slot disponible:',
    assignAttackerTitle: 'Asignar Atacante a la Pelea',
    teamAttackerHeading: 'Atacantes de tus slots:',
    viewInCerebro: 'Ver pelea en CereBro',
    searchInCerebro: 'Buscar en CereBro',
    networkShare: '📶 Red local',
    networkTitleEyebrow: 'DESPLIEGUE REMOTO Y LOCAL',
    networkTitle: 'Acceso en Celular y Cloudflare',
    networkCfTitle: '☁️ ENLACE SEGURO CLOUDFLARE (HTTPS / INTERNET):',
    networkCfDesc: 'Funciona desde cualquier parte del mundo (datos móviles o Wi-Fi) sin configurar router.',
    networkLanTitle: '📶 ENLACE RED LOCAL (MISMO WI-FI):',
    copy: 'Copiar',
    generatingQr: 'Generando QR...',
    authReqTitle: '🔑 Código de acceso requerido:',
    networkHint: 'Cualquier dispositivo conectado a tu mismo Wi-Fi o red local puede abrir el War Planner con este enlace:',
    networkInstructions: '💡 <strong>Instrucciones:</strong> Conecta tu celular a la misma red Wi-Fi y escanea el código QR o ingresa la dirección en tu navegador móvil.',
    requiredPrefights: 'PRELUCHAS REQUERIDAS',
    tacticalStrategy: 'ASIGNACIÓN Y ESTRATEGIA TÁCTICA',
    onlyUncovered: '⚠️ Solo sin atacante',
    emptyPlanPlaceholder: 'El plan aparecerá aquí al asignar defensores o pulsar "⚡ Cargar ejemplo".',
    paneRecommendedHint: 'Atacantes con victorias registradas en CereBro. <strong>Si tu atacante no tiene video, búscalo en la pestaña "Todos" para asignarlo manualmente.</strong>',
    paneAllHint: 'Asigna cualquier campeón aunque no tenga video. Presiona <strong>Enter</strong> para seleccionar el primero.',
    searchAttackerPlaceholder: '🔍 Buscar por nombre... (Enter para elegir el 1°)',
    authEyebrow: 'MCOC TACTICAL SUITE',
    authTitle: 'Acceso con Código',
    authSubtitle: 'Ingresa el código de acceso para desbloquear el planificador de guerra.',
    authCodeLabel: '🔑 Código de Acceso',
    authEnterBtn: '🔓 Entrar al Planificador',
    authFooter: '⚔️ War Planner · Acceso protegido por código de alianza',
    lockSession: 'Bloquear / Salir',
    section1: 'Sección 1',
    section2: 'Sección 2',
    section1Label: 'SECCIÓN 1',
    section2Label: 'SECCIÓN 2',
    assignmentModeLabel: 'Asignación:',
    modeFixed: '📌 Modo Fijo',
    modeFlexible: '🔀 Modo Flexible',
    optimizeFlexible: '⚡ Auto-optimizar Secciones',
    reservePlayer: 'Reserva (Jugador 10)',
    reserveSub: '10° Invocador · Apoyo y Contingencias',
    reserveAllCovered: 'Todos los caminos están cubiertos. Reserva disponible para contingencias o islas.',
    reserveCovering: 'Cubriendo peleas pendientes del equipo',
    viewCerebroCounters: '💡 Ver sugerencias de CereBro',
    hideCerebroCounters: '▴ Ocultar sugerencias',
    noTeamCounter: 'Sin counter en el equipo',
    cerebroSuggestionsNote: 'Sugerencias de CereBro (ningún invocador lo tiene asignado):',
    assignedTo: 'Asignado a',
    islandFightLimitNote: 'Máx. 1 pelea en islas por invocador',
    bossPathTaken: 'Camino del Jefe',
    selectSection1: 'Sección 1:',
    selectSection2: 'Sección 2:',
    sectionsOptimized: '⚡ Secciones optimizadas: Se combinaron tramos S1 y S2 para maximizar sinergias y cobertura.',
    uncoveredFightsTitle: 'Peleas sin atacante',
    teamFullNoSlots: 'El equipo ya está completo y no hay ningún slot vacío. Libera o edita un slot para agregar a este atacante.',
    attackerAutoAdded: 'añadido automáticamente al Slot',
    assignBossTitle: 'Asignar Invocador y Atacante',
    bossModalInstruction: 'Elige el aspirante y el campeón de su equipo que cubrirá esta pelea:',
    resetToAuto: '🤖 Recomendación Auto',
    unassignBoss: '❌ Dejar Sin Asignar',
    clickToReassignBoss: 'Click para reasignar a otro jugador',
    manualTag: 'Manual',
    miniBossSectionExport: 'MINI-JEFES & ISLAS',
    bossSectionExport: 'SUB-JEFES & JEFE FINAL',
    noChampionsInTeam: 'Sin campeones en slots',
    exportTitle: 'PLAN DE GUERRA MCOC',
    exportMapStd: 'ESTÁNDAR',
    exportMapBt: 'BIG THING',
    exportNodes: 'nodos',
    exportModeFlex: 'Modo Flexible',
    exportModeFixed: 'Caminos Fijos',
    exportTeam: 'Equipo',
    exportNoTeam: 'Sin equipo',
    exportSections: 'Tramos',
    exportNoAttacker: 'Sin atacante',
    exportUnassigned: 'Sin asignar',
    exportReserveSupport: 'Apoyo cubierto',
    exportNoIslandDefs: 'Sin defensores en islas',
    exportNoBossDefs: 'Sin defensores en jefes',
    exportBossLeftShort: 'Izq',
    exportBossRightShort: 'Der',
    exportSubBoss1: 'Sub-jefe 1',
    exportSubBoss2: 'Sub-jefe 2',
    exportFinalBoss: 'Jefe Final',
    discordSingleMsg: 'Cabe en 1 mensaje de Discord',
    discordSplitInfo: 'Dividido automáticamente para Discord (máx. 2,000 car. por mensaje):',
    discordPart: 'Parte',
    discordViewAll: 'Ver todo',
    copyAllBtn: '📋 Copiar todo',
    islandBossAssignedHeader: 'Islas / Jefes asignados',
    islandTag: 'Isla',
    bossTag: 'Jefe',
    uncoveredIslandsHeading: 'Counters para Islas / Jefes sin cubrir'
  },
  en: {
    warPlanner: 'War Planner',
    heroEyebrow: 'MCOC · ALLIANCE WAR · TACTICAL SUITE',
    subtitle: 'Plan paths, optimize MCOC attacker slots, assign summoners and coordinate the offensive.',
    loadExample: '⚡ Load Example',
    exportReport: '📋 Export Report',
    exportImage: '🖼️ Export Image',
    profiles: '💾 Saved Wars',
    clearMap: '🗑️ Clear Map',
    coverage: 'TOTAL COVERAGE',
    riskNodes: 'RISK NODES',
    topAttacker: 'BG TOP ATTACKER',
    planTab: 'War Plan',
    mapTab: 'Map Defenders',
    tacticalPlan: 'MCOC War Plan',
    tacticalPlanSub: 'Click any slot to customize it. Click the attacker on each fight to manually assign, or ✕ to unassign just that fight.',
    assignedTotal: 'defenders assigned.',
    fightsCovered: 'fights covered',
    resetSuggested: '↺ Reset Suggested',
    chooseDefender: 'Choose Defender',
    orType: 'or type to autocomplete...',
    noteCTA: '📝 Note / tactical boost...',
    noDefendersYet: 'No defenders yet',
    allFightsCovered: 'All fights have a counter assigned',
    noCounterNodes: 'Nodes without counter:',
    assignBossFirst: 'Assign defenders to see MVP',
    fightsResolved: 'fight',
    fightsResolvedPl: 'fights',
    slotAdd: 'Add',
    slotEdit: '✎',
    assignedFights: 'Assigned Fights',
    defVsAtt: 'Defender ➔ Attacker',
    assignDefender: '+ Assign defender',
    noCounterWarn: '⚠️ No attacker assigned',
    variationLabel: 'Var',
    customized: 'Custom',
    mapLabel: 'Map:',
    mapModeTitle: 'Map variant:',
    standard: 'Standard (50 nodes)',
    bigThing: 'Big Thing (10 nodes)',
    helperBanner: '💡 <strong>How to add defenders:</strong> Click <strong>"➕ Choose Defender"</strong> on any node, or type in the search box. Press <strong>Enter</strong> to select the first champion.',
    mainRoutes: 'Main Paths (1–9)',
    mainRoutesBt: 'War Nodes (1–10)',
    miniBossIsles: 'Mini-Boss Islands (A, B, C)',
    bossIsle: 'Final Boss Island',
    searchMap: '🔍 Search node or champion...',
    selectDefender: 'Select Defender',
    currentDef: 'Current:',
    popularDefs: 'Popular War Defenders:',
    allChamps: 'All champions',
    removeClass: 'Remove defender',
    cancel: 'Cancel',
    modifyAttacker: 'Modify Attacker',
    recommendedCounters: 'Recommended Counters',
    coversNodes: 'Covers nodes:',
    emptySlot: 'Empty this slot',
    exportReport2: 'Tactical Report',
    exportSub: 'Copy this report to Discord, WhatsApp or Line:',
    copyClipboard: '📋 Copy to clipboard',
    copied: 'Copied! ✓',
    close: 'Close',
    profilesEyebrow: 'WAR SNAPSHOTS & TEMPLATES',
    profilesTitle: 'Save / Load War Plans',
    saveCurrentPlan: 'Save current war plan',
    profileNamePlaceholder: 'e.g. BG1 Template, vs Alliance X...',
    save: 'Save',
    savedProfiles: 'Saved war plans',
    noProfiles: 'No saved war plans yet.',
    load: 'Load',
    delete: '🗑️',
    loading: '⏳ Loading...',
    loading2: 'Querying CereBro…',
    loadingFightsCerebro: 'Querying CereBro...',
    queryingCounters: 'Finding counters...',
    noCounterDirectWarn: '⚠️ No direct counter',
    attackerCandidates: 'Available team attackers who counter these nodes:',
    generatedBy: '🎯 Generated with MCOC War Planner',
    confirmClear: 'Reset all map defenders?',
    nodeLabel: 'NODE',
    routeLabel: 'Path',
    invocadorLabel: '@Summoner',
    miniBossesA: 'Mini-Bosses A',
    miniBossesB: 'Mini-Bosses B',
    miniBossesC: 'Mini-Bosses C',
    bossLeft: 'Left Path',
    bossRight: 'Right Path',
    bossFinal: 'Final Boss',
    cerebro: 'Attackers are calculated from CereBro.',
    noResults: 'No recorded fights on CereBro.',
    analyzed: 'Analyzed',
    noServer: 'Server required',
    noServerHint: 'Start server.py to query CereBro.',
    cebroBadge: 'on CereBro',
    noCereBroNote: 'Manually assigned',
    bigThingNote: 'Big Thing: 10 individual plans, 1 fight per summoner, 2 attacker slots',
    standardNote: 'Standard: 9 paths of 4 fights, 3 attacker slots per path',
    allClass: 'All',
    cosClass: 'Cosmic',
    techClass: 'Tech',
    mutClass: 'Mutant',
    skiClass: 'Skill',
    sciClass: 'Science',
    mysClass: 'Mystic',
    clickToAssign: 'Click to assign attacker',
    removeFight: 'Remove fight assignment',
    prefightLabel: 'Prefight:',
    prefightTag: 'PREFIGHT',
    prefightNoSlot: 'Required prefight has no available slot:',
    assignAttackerTitle: 'Assign Attacker to Fight',
    teamAttackerHeading: 'Attackers in your team slots:',
    viewInCerebro: 'Watch fight on CereBro',
    searchInCerebro: 'Search on CereBro',
    networkShare: '📶 Local Network',
    networkTitleEyebrow: 'REMOTE & LOCAL DEPLOYMENT',
    networkTitle: 'Mobile & Cloudflare Access',
    networkCfTitle: '☁️ SECURE CLOUDFLARE LINK (HTTPS / INTERNET):',
    networkCfDesc: 'Works worldwide (mobile data or Wi-Fi) with no router configuration.',
    networkLanTitle: '📶 LOCAL NETWORK LINK (SAME WI-FI):',
    copy: 'Copy',
    generatingQr: 'Generating QR...',
    authReqTitle: '🔑 Required access code:',
    networkHint: 'Any device connected to your same Wi-Fi or local network can open War Planner with this link:',
    networkInstructions: '💡 <strong>Instructions:</strong> Connect your phone to the same Wi-Fi and scan the QR code or enter the URL in your mobile browser.',
    requiredPrefights: 'REQUIRED PREFIGHTS',
    tacticalStrategy: 'ASSIGNMENT & TACTICAL STRATEGY',
    onlyUncovered: '⚠️ Only uncovered',
    emptyPlanPlaceholder: 'The war plan will appear here after assigning defenders or clicking "⚡ Load example".',
    paneRecommendedHint: 'Attackers with recorded wins on CereBro. <strong>If your attacker has no video, search in the "All" tab to assign manually.</strong>',
    paneAllHint: 'Assign any champion even without recorded video. Press <strong>Enter</strong> to select the first one.',
    searchAttackerPlaceholder: '🔍 Search by name... (Enter to select 1st)',
    authEyebrow: 'MCOC TACTICAL SUITE',
    authTitle: 'Access Code Required',
    authSubtitle: 'Enter the access code to unlock the war planner.',
    authCodeLabel: '🔑 Access Code',
    authEnterBtn: '🔓 Enter War Planner',
    authFooter: '⚔️ War Planner · Protected by alliance access code',
    lockSession: 'Lock / Exit',
    section1: 'Section 1',
    section2: 'Section 2',
    section1Label: 'SECTION 1',
    section2Label: 'SECTION 2',
    assignmentModeLabel: 'Assignment:',
    modeFixed: '📌 Fixed Mode',
    modeFlexible: '🔀 Flexible Mode',
    optimizeFlexible: '⚡ Auto-optimize Sections',
    reservePlayer: 'Backup (Player 10)',
    reserveSub: '10th Summoner · Support & Contingencies',
    reserveAllCovered: 'All paths covered. Backup ready for support or islands.',
    reserveCovering: 'Covering pending team fights',
    viewCerebroCounters: '💡 View CereBro suggestions',
    hideCerebroCounters: '▴ Hide suggestions',
    noTeamCounter: 'No counter in team',
    cerebroSuggestionsNote: 'CereBro suggestions (not assigned to any summoner):',
    assignedTo: 'Assigned to',
    islandFightLimitNote: 'Max 1 island fight per summoner',
    bossPathTaken: 'Boss Path',
    selectSection1: 'Section 1:',
    selectSection2: 'Section 2:',
    sectionsOptimized: '⚡ Sections optimized! Section 1 and Section 2 paths combined to maximize attacker synergies and coverage.',
    uncoveredFightsTitle: 'Uncovered fights',
    teamFullNoSlots: 'Team already has 3 full slots and no empty space. Clear or edit a slot to add this attacker.',
    attackerAutoAdded: 'auto-added to Slot',
    assignBossTitle: 'Assign Summoner & Attacker',
    bossModalInstruction: 'Choose the summoner and their team champion to take this fight:',
    resetToAuto: '🤖 Auto Recommendation',
    unassignBoss: '❌ Leave Unassigned',
    clickToReassignBoss: 'Click to reassign to another player',
    manualTag: 'Manual',
    miniBossSectionExport: 'MINI-BOSSES & ISLANDS',
    bossSectionExport: 'SUB-BOSSES & FINAL BOSS',
    noChampionsInTeam: 'No champions in slots',
    exportTitle: 'MCOC WAR PLAN',
    exportMapStd: 'STANDARD',
    exportMapBt: 'BIG THING',
    exportNodes: 'nodes',
    exportModeFlex: 'Flexible Mode',
    exportModeFixed: 'Fixed Paths',
    exportTeam: 'Team',
    exportNoTeam: 'No team',
    exportSections: 'Sections',
    exportNoAttacker: 'No attacker',
    exportUnassigned: 'Unassigned',
    exportReserveSupport: 'Support covered',
    exportNoIslandDefs: 'No defenders on islands',
    exportNoBossDefs: 'No defenders on bosses',
    exportBossLeftShort: 'Left',
    exportBossRightShort: 'Right',
    exportSubBoss1: 'Sub-Boss 1',
    exportSubBoss2: 'Sub-Boss 2',
    exportFinalBoss: 'Final Boss',
    discordSingleMsg: 'Fits in 1 Discord message',
    discordSplitInfo: 'Auto-split for Discord (max 2,000 chars per message):',
    discordPart: 'Part',
    discordViewAll: 'View all',
    copyAllBtn: '📋 Copy all',
    islandBossAssignedHeader: 'Assigned Islands / Bosses',
    islandTag: 'Island',
    bossTag: 'Boss',
    uncoveredIslandsHeading: 'Counters for uncovered Islands / Bosses'
  }
};

const FLAG_UK_SVG = `<svg class="flag-svg" viewBox="0 0 60 30" width="18" height="12"><clipPath id="uk-c"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="uk-diag"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#uk-c)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-diag)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`;

const FLAG_ES_SVG = `<svg class="flag-svg" viewBox="0 0 30 20" width="18" height="12"><rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/></svg>`;

function renderLangButton() {
  const btn = document.querySelector('#langToggleBtn');
  if (!btn) return;
  if (currentLang === 'es') {
    btn.innerHTML = `${FLAG_UK_SVG} <span style="font-weight:700;margin-left:4px;">EN</span>`;
    btn.title = "Switch to English";
  } else {
    btn.innerHTML = `${FLAG_ES_SVG} <span style="font-weight:700;margin-left:4px;">ES</span>`;
    btn.title = "Cambiar a Español";
  }
}

let currentLang = localStorage.getItem('war-planner-lang') || 'en';
function t(k) { return LANG[currentLang]?.[k] || LANG.en[k] || LANG.es[k] || k; }

function applyLang() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.innerHTML = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  document.querySelectorAll('[data-i18n-title]').forEach(el => el.title = t(el.dataset.i18nTitle));
  renderLangButton();
  document.querySelector('#mapVariantNote').textContent = currentMap === 'BIG_THING' ? t('bigThingNote') : t('standardNote');
  updateToolbarTabsForMap();
  updateAssignmentModeUI();
  renderBoard();
  plan();
  updateDashboard();
}

function showToast(msg) {
  let toast = document.querySelector('#appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('visible');
  if (window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3400);
}

// ─── CHAMPION CLASSES & POPULAR LIST ───
const CLASS_NAMES = () => ({
  COSMIC: t('cosClass'), TECH: t('techClass'), MUTANT: t('mutClass'),
  SKILL: t('skiClass'), SCIENCE: t('sciClass'), MYSTIC: t('mysClass'),
  SUPERIOR: 'Superior'
});

const CLASS_EMOJIS = {
  COSMIC: '🪐', TECH: '🦾', MUTANT: '🧬',
  SKILL: '🎯', SCIENCE: '🧪', MYSTIC: '🔮', SUPERIOR: '⭐'
};

const POPULAR_DEFENDERS = [
  'Mojo', 'Mister Sinister', 'Domino', 'The Serpent', 'Maestro',
  'Enchantress', 'Red Skull', 'Dust', 'Bullseye', 'Photon',
  'Knull', 'Onslaught', 'Nick Fury', 'Absorbing Man', 'Baron Zemo'
];

// ─── MAP STRUCTURE ───
let currentMap = localStorage.getItem('war-planner-map') || 'STANDARD';

const STANDARD_AREAS = {
  routes: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: () => `${t('routeLabel')} ${i + 1}`,
    nodes: Array.from({ length: 4 }, (_, r) => i + 1 + r * 9),
    type: 'main'
  })),
  islands: [
    { id: 'miniA', name: () => t('miniBossesA'), nodes: [37, 38, 39], type: 'mini' },
    { id: 'miniB', name: () => t('miniBossesB'), nodes: [40, 41, 42], type: 'mini' },
    { id: 'miniC', name: () => t('miniBossesC'), nodes: [43, 44, 45], type: 'mini' }
  ],
  boss: [
    { id: 'bossLeft', name: () => t('bossLeft'), nodes: [46, 48], type: 'boss' },
    { id: 'bossRight', name: () => t('bossRight'), nodes: [47, 49], type: 'boss' },
    { id: 'bossFinal', name: () => t('bossFinal'), nodes: [50], type: 'boss' }
  ]
};

// Big Thing: 10 individual nodes (1 fight per player, no routes, no islands, no boss island)
const BIG_THING_AREAS = {
  routes: Array.from({ length: 10 }, (_, i) => ({
    id: `bt${i + 1}`,
    name: () => `${t('nodeLabel')} ${i + 1}`,
    nodes: [i + 1],
    type: 'main'
  })),
  islands: [],
  boss: []
};

function getAreas() { return currentMap === 'BIG_THING' ? BIG_THING_AREAS : STANDARD_AREAS; }
function getSlotCount() { return currentMap === 'BIG_THING' ? 2 : 3; }
function getAllMapNodes() { return currentMap === 'BIG_THING' ? Array.from({ length: 10 }, (_, i) => i + 1) : Array.from({ length: 50 }, (_, i) => i + 1); }

function updateToolbarTabsForMap() {
  const routesBtn = document.querySelector('#tabRoutesBtn');
  const islandsBtn = document.querySelector('#tabIslandsBtn');
  const bossBtn = document.querySelector('#tabBossBtn');
  if (currentMap === 'BIG_THING') {
    if (routesBtn) routesBtn.textContent = t('mainRoutesBt');
    if (islandsBtn) islandsBtn.style.display = 'none';
    if (bossBtn) bossBtn.style.display = 'none';
  } else {
    if (routesBtn) routesBtn.textContent = t('mainRoutes');
    if (islandsBtn) islandsBtn.style.display = '';
    if (bossBtn) bossBtn.style.display = '';
  }
}

// ─── STATE & PERSISTENCE ───
let champions = [];

function dataKey() { return `war-planner-data-${currentMap}`; }
function customKey() { return `war-planner-custom-${currentMap}`; }

function loadData() {
  const raw = JSON.parse(localStorage.getItem(dataKey()) || '{}');
  const out = {};
  getAllMapNodes().forEach(i => {
    const it = raw[i] || {};
    let counters = it.counters || [];
    if (counters.length && typeof counters[0] === 'string') counters = counters.map(n => ({ name: n, fights: 1 }));
    out[i] = { defender: it.defender || '', counters, note: it.note || '' };
  });
  return out;
}

function loadCustomState() {
  const cs = JSON.parse(localStorage.getItem(customKey()) || '{}');
  return {
    playerNames: cs.playerNames || {},
    selectedVariations: cs.selectedVariations || {},
    customTeams: cs.customTeams || {},
    fightOverrides: cs.fightOverrides || {},
    assignmentMode: cs.assignmentMode || 'fixed',
    pathSections: cs.pathSections || {},
    islandOverrides: cs.islandOverrides || {}
  };
}

let data = loadData();
let customState = loadCustomState();

function saveState() {
  localStorage.setItem(dataKey(), JSON.stringify(data));
  localStorage.setItem(customKey(), JSON.stringify(customState));
}

function updateAssignmentModeUI() {
  const group = document.querySelector('#assignmentModeGroup');
  const optBtn = document.querySelector('#optimizeFlexibleBtn');
  if (!group || !optBtn) return;
  if (currentMap !== 'STANDARD') {
    group.style.display = 'none';
    optBtn.style.display = 'none';
    return;
  }
  group.style.display = 'inline-flex';
  const isFlex = customState.assignmentMode === 'flexible';
  const fixedBtn = document.querySelector('#modeFixedBtn');
  const flexBtn = document.querySelector('#modeFlexibleBtn');
  if (fixedBtn) fixedBtn.classList.toggle('active', !isFlex);
  if (flexBtn) flexBtn.classList.toggle('active', isFlex);
  optBtn.style.display = isFlex ? 'inline-block' : 'none';
}

function switchMap(mt) {
  currentMap = mt;
  localStorage.setItem('war-planner-map', mt);
  data = loadData();
  customState = loadCustomState();
  document.querySelector('#mapVariantNote').textContent = currentMap === 'BIG_THING' ? t('bigThingNote') : t('standardNote');
  updateToolbarTabsForMap();
  updateAssignmentModeUI();
  renderBoard();
  plan();
  updateDashboard();
}

function findChampion(name) {
  if (!name) return null;
  const l = name.trim().toLowerCase();
  return champions.find(c => c.name.toLowerCase() === l) || null;
}

function getFightData(n) {
  return {
    node: n,
    defender: data[n]?.defender || '',
    champ: findChampion(data[n]?.defender),
    counters: data[n]?.counters || [],
    note: data[n]?.note || ''
  };
}

function getPlayerName(rId) {
  if (customState.playerNames[rId]) return customState.playerNames[rId];
  if (rId === 'reserve') return t('reservePlayer');
  if (typeof rId === 'string' && rId.startsWith('bt')) {
    const num = rId.replace('bt', '');
    return `${t('invocadorLabel')} ${num}`;
  }
  return `${t('invocadorLabel')} ${rId}`;
}

// ─── SECTION HELPERS (STANDARD MAP) ───
function getSectionNodes(pathId, sectionNumber) {
  const p = typeof pathId === 'number' ? pathId : parseInt(pathId, 10);
  if (isNaN(p) || p < 1 || p > 9) return [];
  return sectionNumber === 1 ? [p, p + 9] : [p + 18, p + 27];
}

function getPlayerSections(pId) {
  const p = typeof pId === 'number' ? pId : parseInt(pId, 10);
  if (currentMap !== 'STANDARD' || isNaN(p) || p < 1 || p > 9) {
    return { s1: p, s2: p };
  }
  const mode = customState.assignmentMode || 'fixed';
  if (mode === 'fixed') {
    return { s1: p, s2: p };
  }
  const saved = customState.pathSections?.[p];
  return {
    s1: p,
    s2: (saved && saved.s2) ? parseInt(saved.s2, 10) : p
  };
}

function getPlayerNodes(pId) {
  const p = typeof pId === 'number' ? pId : parseInt(pId, 10);
  if (currentMap !== 'STANDARD' || isNaN(p) || p < 1 || p > 9) {
    const rObj = getAreas().routes.find(r => r.id == pId);
    return rObj ? rObj.nodes : [];
  }
  const secs = getPlayerSections(p);
  const s1Nodes = getSectionNodes(secs.s1, 1);
  const s2Nodes = getSectionNodes(secs.s2, 2);
  return [...s1Nodes, ...s2Nodes];
}

function getUncoveredPathNodes() {
  if (currentMap !== 'STANDARD') return [];
  const coveredNodes = new Set();
  for (let p = 1; p <= 9; p++) {
    const nodes = getPlayerNodes(p);
    const vs = generateVariations(nodes);
    const team = getActiveTeam(p, vs);
    const assigned = assignFights(nodes, team);
    assigned.forEach(a => {
      if (a.covered && a.attacker) {
        coveredNodes.add(a.node);
      }
    });
  }
  const uncovered = [];
  for (let n = 1; n <= 36; n++) {
    if (data[n]?.defender && !coveredNodes.has(n)) {
      uncovered.push(n);
    }
  }
  return uncovered;
}

function optimizeFlexibleSections() {
  if (currentMap !== 'STANDARD') return;

  const s1Tramos = {};
  const s2Tramos = {};
  for (let p = 1; p <= 9; p++) {
    s1Tramos[p] = getSectionNodes(p, 1);
    s2Tramos[p] = getSectionNodes(p, 2);
  }

  // Synergy scoring between S1 tramo i and S2 tramo j
  function computePairSynergy(i, j, playerCustomTeam = null) {
    const nodes = [...s1Tramos[i], ...s2Tramos[j]];

    // If player has a custom roster, score against their team
    if (playerCustomTeam && playerCustomTeam.length) {
      let wins = 0;
      nodes.forEach(n => {
        const f = getFightData(n);
        if (f.defender) {
          const hasWin = playerCustomTeam.some(att =>
            f.counters.some(c => c.name.toLowerCase() === att.toLowerCase())
          );
          if (hasWin) wins++;
        }
      });
      return wins * 25;
    }

    const nodeCountersMap = nodes.map(n => getFightData(n).counters || []);

    const s1Counters = new Set();
    [...nodeCountersMap[0], ...nodeCountersMap[1]].forEach(c => s1Counters.add(c.name.toLowerCase()));
    const s2Counters = new Set();
    [...nodeCountersMap[2], ...nodeCountersMap[3]].forEach(c => s2Counters.add(c.name.toLowerCase()));

    // Shared counters bridging S1 and S2 (high tactical value)
    let sharedCount = 0;
    s1Counters.forEach(cName => {
      if (s2Counters.has(cName)) sharedCount++;
    });

    // Best 3 attackers coverage
    const allCounters = new Map();
    nodeCountersMap.forEach((cList, nodeIdx) => {
      cList.forEach(c => {
        const key = c.name.toLowerCase();
        if (!allCounters.has(key)) allCounters.set(key, { name: c.name, wins: new Set(), fights: 0 });
        allCounters.get(key).wins.add(nodeIdx);
        allCounters.get(key).fights += (c.fights || 1);
      });
    });

    const chosenTeam = [];
    const coveredNodes = new Set();
    const sortedCandidates = Array.from(allCounters.values()).sort((a, b) => {
      if (b.wins.size !== a.wins.size) return b.wins.size - a.wins.size;
      return b.fights - a.fights;
    });

    for (const cand of sortedCandidates) {
      if (chosenTeam.length >= 3) break;
      let newCovers = 0;
      cand.wins.forEach(nIdx => { if (!coveredNodes.has(nIdx)) newCovers++; });
      if (newCovers > 0 || chosenTeam.length < 3) {
        chosenTeam.push(cand.name);
        cand.wins.forEach(nIdx => coveredNodes.add(nIdx));
      }
    }

    const coverageScore = coveredNodes.size * 18;
    const sharedBonus = sharedCount * 8;
    return coverageScore + sharedBonus;
  }

  const customTeamP = {};
  let anyCustom = false;
  for (let p = 1; p <= 9; p++) {
    const ct = (customState.customTeams[p] || []).filter(Boolean);
    if (ct.length) {
      customTeamP[p] = ct;
      anyCustom = true;
    }
  }

  // Each summoner p keeps Section 1 (s1 = p). Match each player to the optimal Section 2 (s2 = j).
  const candidateAssignments = [];
  for (let p = 1; p <= 9; p++) {
    for (let j = 1; j <= 9; j++) {
      const sc = computePairSynergy(p, j, customTeamP[p]);
      candidateAssignments.push({ player: p, s2: j, score: sc });
    }
  }
  candidateAssignments.sort((a, b) => b.score - a.score);

  const matchedS2 = {};
  const usedS2 = new Set();
  const usedPlayers = new Set();

  for (const item of candidateAssignments) {
    if (!usedPlayers.has(item.player) && !usedS2.has(item.s2)) {
      usedPlayers.add(item.player);
      usedS2.add(item.s2);
      matchedS2[item.player] = item.s2;
    }
  }

  // Fill any remainder
  for (let p = 1; p <= 9; p++) {
    if (!matchedS2[p]) {
      for (let j = 1; j <= 9; j++) {
        if (!usedS2.has(j)) {
          usedS2.add(j);
          matchedS2[p] = j;
          break;
        }
      }
    }
  }

  customState.assignmentMode = 'flexible';
  if (!customState.pathSections) customState.pathSections = {};
  for (let p = 1; p <= 9; p++) {
    customState.pathSections[p] = {
      s1: p,
      s2: matchedS2[p] || p
    };
  }

  saveState();
  updateAssignmentModeUI();
  plan();
  updateDashboard();

  if (typeof showToast === 'function') {
    showToast(t('sectionsOptimized'));
  }
}

// ─── CEREBRO LINK HELPER ───
function encodeDiscordUrlParam(str) {
  return encodeURIComponent(str)
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/'/g, '%27');
}

function getCerebroUrl(node, defender, attacker) {
  if (!defender) return 'https://cerebro-bot.com/war-videos';
  let url = `https://cerebro-bot.com/war-videos?map=${currentMap}&node=${node}&defender=${encodeDiscordUrlParam(defender)}&outcome=solo`;
  if (attacker) {
    url += `&attacker=${encodeDiscordUrlParam(attacker)}`;
  }
  return url;
}

// ─── CEREBRO API FETCH & CLIENT CACHE ───
const loadingNodes = new Set();
const COUNTERS_CACHE_KEY = 'war-planner-counters-cache-v1';
const COUNTERS_CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12h
let _countersMemCache = null;

function _loadCountersCache() {
  if (_countersMemCache) return _countersMemCache;
  try {
    _countersMemCache = JSON.parse(localStorage.getItem(COUNTERS_CACHE_KEY) || '{}') || {};
  } catch {
    _countersMemCache = {};
  }
  return _countersMemCache;
}

function getCachedCounters(mapType, node, defender) {
  if (!defender) return null;
  const cache = _loadCountersCache();
  const k = `${mapType}:${node}:${defender.toLowerCase()}`;
  const entry = cache[k];
  if (entry && Array.isArray(entry.d) && (Date.now() - entry.t) < COUNTERS_CACHE_TTL_MS) {
    return entry.d;
  }
  return null;
}

function setCachedCounters(mapType, node, defender, list) {
  if (!defender || !Array.isArray(list)) return;
  const cache = _loadCountersCache();
  const k = `${mapType}:${node}:${defender.toLowerCase()}`;
  cache[k] = { t: Date.now(), d: list };
  const keys = Object.keys(cache);
  if (keys.length > 400) {
    keys.sort((a, b) => (cache[a].t || 0) - (cache[b].t || 0));
    keys.slice(0, keys.length - 350).forEach(old => { delete cache[old]; });
  }
  try {
    localStorage.setItem(COUNTERS_CACHE_KEY, JSON.stringify(cache));
  } catch {}
}

async function fetchCounters(node, statusEl, noteEl) {
  const def = data[node]?.defender;
  if (!def) return;

  const cached = getCachedCounters(currentMap, node, def);
  if (cached) {
    data[node].counters = cached;
    saveState();
    if (statusEl) {
      statusEl.textContent = cached.length ? t('analyzed') : t('noResults');
      statusEl.className = 'fight-status ready';
    }
    if (noteEl) {
      const u = getCerebroUrl(node, def);
      noteEl.innerHTML = cached.length
        ? `<a class="counter-note-link" href="${u}" target="_blank" rel="noopener noreferrer">🎥 ${cached.length} ${t('cebroBadge')} ↗</a>`
        : `<a class="counter-note-link" href="${u}" target="_blank" rel="noopener noreferrer">🔍 ${t('searchInCerebro')}</a>`;
    }
    plan();
    updateDashboard();
    return;
  }

  loadingNodes.add(node);
  if (statusEl) { statusEl.textContent = t('loading2'); statusEl.className = 'fight-status loading'; }
  plan();
  try {
    const res = await fetch(`/api/counters?node=${node}&defender=${encodeURIComponent(def)}&map=${currentMap}`, { credentials: 'omit' });
    const json = await res.json();
    if (json.error) throw new Error(json.error);
    data[node].counters = json;
    setCachedCounters(currentMap, node, def, json);
    saveState();
    if (statusEl) {
      statusEl.textContent = json.length ? t('analyzed') : t('noResults');
      statusEl.className = 'fight-status ready';
    }
    if (noteEl) {
      const u = getCerebroUrl(node, def);
      if (json.length) {
        noteEl.innerHTML = `<a class="counter-note-link" href="${u}" target="_blank" rel="noopener noreferrer">🎥 ${json.length} ${t('cebroBadge')} ↗</a>`;
      } else {
        noteEl.innerHTML = `<a class="counter-note-link" href="${u}" target="_blank" rel="noopener noreferrer">🔍 ${t('searchInCerebro')}</a>`;
      }
    }
  } catch {
    if (statusEl) { statusEl.textContent = t('noServer'); statusEl.className = 'fight-status empty'; }
    if (noteEl) noteEl.textContent = t('noServerHint');
  } finally {
    loadingNodes.delete(node);
    plan();
    updateDashboard();
  }
}

// ─── NAVIGATION (PLAN vs MAP) ───
function switchMainTab(mode) {
  document.querySelector('#tabModePlan').classList.toggle('active', mode === 'plan');
  document.querySelector('#tabModeMap').classList.toggle('active', mode === 'map');
  document.querySelector('#planViewSection').style.display = mode === 'plan' ? 'block' : 'none';
  document.querySelector('#mapViewSection').style.display = mode === 'map' ? 'block' : 'none';
  if (mode === 'plan') plan(); else renderBoard();
}

document.querySelector('#tabModePlan').onclick = () => switchMainTab('plan');
document.querySelector('#tabModeMap').onclick = () => switchMainTab('map');

document.querySelector('#mapStandardBtn').onclick = () => {
  document.querySelector('#mapStandardBtn').classList.add('active');
  document.querySelector('#mapBigThingBtn').classList.remove('active');
  switchMap('STANDARD');
};
document.querySelector('#mapBigThingBtn').onclick = () => {
  document.querySelector('#mapBigThingBtn').classList.add('active');
  document.querySelector('#mapStandardBtn').classList.remove('active');
  switchMap('BIG_THING');
};

document.querySelector('#langToggleBtn').onclick = () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('war-planner-lang', currentLang);
  applyLang();
};

// ─── AUTOCOMPLETE WITH ENTER KEY AUTO-SELECT ───
function setupAutocomplete(input, dropdown, cardEl, onSelect) {
  let idx = -1, matches = [];

  function filterMatches(term) {
    const q = term.trim().toLowerCase();
    if (!q) return champions.slice(0, 25);
    const s = [], inc = [];
    for (const c of champions) {
      const n = c.name.toLowerCase();
      if (n.startsWith(q)) s.push(c);
      else if (n.includes(q)) inc.push(c);
    }
    return [...s, ...inc];
  }

  function render(items) {
    matches = items;
    idx = -1;
    const cn = CLASS_NAMES();
    dropdown.innerHTML = items.slice(0, 30).map((c, i) => {
      const cls = (c.class || 'COSMIC').toLowerCase();
      return `
        <div class="dropdown-item" data-index="${i}">
          <img class="dropdown-avatar" src="${c.image}" alt="" onerror="this.style.display='none'"/>
          <div class="dropdown-meta">
            <span class="dropdown-name">${c.name}</span>
            <span class="dropdown-class-badge class-tag ${cls}">${cn[c.class] || ''}</span>
          </div>
        </div>`;
    }).join('') || '<div class="dropdown-item" style="color:var(--muted);">—</div>';
    dropdown.style.display = 'block';
    cardEl.classList.add('active-dropdown');

    dropdown.querySelectorAll('.dropdown-item[data-index]').forEach(el => {
      el.onclick = e => {
        e.stopPropagation();
        if (matches[+el.dataset.index]) {
          onSelect(matches[+el.dataset.index]);
          close();
        }
      };
    });
  }

  function close() {
    dropdown.style.display = 'none';
    cardEl.classList.remove('active-dropdown');
    idx = -1;
  }

  input.addEventListener('input', () => render(filterMatches(input.value)));
  input.addEventListener('focus', () => render(filterMatches(input.value)));

  input.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.dropdown-item[data-index]');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (items.length) {
        idx = (idx + 1) % items.length;
        hl(items);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (items.length) {
        idx = (idx - 1 + items.length) % items.length;
        hl(items);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      // Auto-select first champion in list if none highlighted
      const currentList = matches.length ? matches : filterMatches(input.value);
      const selIdx = idx >= 0 ? idx : 0;
      if (currentList[selIdx]) {
        onSelect(currentList[selIdx]);
        close();
      }
    } else if (e.key === 'Escape') {
      close();
    }
  });

  function hl(items) {
    items.forEach((it, i) => {
      it.classList.toggle('highlighted', i === idx);
      if (i === idx) it.scrollIntoView({ block: 'nearest' });
    });
  }

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) close();
  });
}

// ─── NODE CARD (MAP DEFENDERS) ───
const tpl = document.querySelector('#nodeTemplate');

function createNodeCard(node) {
  const el = tpl.content.firstElementChild.cloneNode(true);
  el.dataset.node = node;

  const nodeNum = el.querySelector('.node-number');
  const classPill = el.querySelector('.class-badge-pill');
  const fs = el.querySelector('.fight-status');
  const emptyBox = el.querySelector('.defender-empty-box');
  const selBox = el.querySelector('.selected-champion');
  const avFrame = el.querySelector('.champ-avatar-frame');
  const img = el.querySelector('.defender-image');
  const nameEl = el.querySelector('.defender-name');
  const classEl = el.querySelector('.defender-class');
  const changeBtn = el.querySelector('.change-def-btn');
  const removeBtn = el.querySelector('.remove-def-btn');
  const input = el.querySelector('.defender-input');
  const dropdown = el.querySelector('.autocomplete-dropdown');
  const noteInput = el.querySelector('.node-tactical-note');
  const counterNote = el.querySelector('.counter-note');

  el.querySelector('.add-def-text').textContent = t('chooseDefender');
  input.placeholder = t('orType');
  noteInput.placeholder = t('noteCTA');
  nodeNum.textContent = `${t('nodeLabel')} ${node}`;
  noteInput.value = data[node]?.note || '';
  const cn = CLASS_NAMES();

  function upd(champ) {
    if (champ) {
      emptyBox.style.display = 'none';
      selBox.style.display = 'flex';
      img.src = champ.image;
      img.style.display = 'block';
      nameEl.textContent = champ.name;
      const cls = champ.class || '';
      classEl.textContent = cn[cls] || cls;
      classEl.className = `defender-class class-tag ${cls.toLowerCase()}`;
      avFrame.className = `champ-avatar-frame ${cls.toLowerCase()}`;
      classPill.style.display = 'none'; // Class advantage badges hidden per user request
    } else {
      emptyBox.style.display = 'flex';
      selBox.style.display = 'none';
      img.style.display = 'none';
      nameEl.textContent = '';
      classEl.textContent = '';
      classPill.style.display = 'none';
    }
  }

  upd(findChampion(data[node]?.defender));

  if (data[node]?.counters?.length) {
    fs.textContent = t('analyzed');
    fs.className = 'fight-status ready';
    const u = getCerebroUrl(node, data[node].defender);
    counterNote.innerHTML = `<a class="counter-note-link" href="${u}" target="_blank" rel="noopener noreferrer">🎥 ${data[node].counters.length} ${t('cebroBadge')} ↗</a>`;
  } else if (data[node]?.defender) {
    const u = getCerebroUrl(node, data[node].defender);
    counterNote.innerHTML = `<a class="counter-note-link" href="${u}" target="_blank" rel="noopener noreferrer">🔍 ${t('searchInCerebro')}</a>`;
  } else {
    counterNote.textContent = t('cerebro');
  }

  emptyBox.onclick = () => openDefenderPickerModal(node);
  changeBtn.onclick = e => { e.stopPropagation(); openDefenderPickerModal(node); };
  removeBtn.onclick = e => {
    e.stopPropagation();
    data[node] = { defender: '', counters: [], note: data[node].note || '' };
    saveState();
    upd(null);
    fs.textContent = '';
    fs.className = 'fight-status';
    counterNote.textContent = t('cerebro');
    plan();
    updateDashboard();
  };

  setupAutocomplete(input, dropdown, el, sel => {
    data[node].defender = sel.name;
    data[node].counters = [];
    saveState();
    upd(sel);
    fetchCounters(node, fs, counterNote);
  });

  noteInput.onchange = () => {
    data[node].note = noteInput.value.trim();
    saveState();
    plan();
  };

  return el;
}

// ─── BOARD RENDER (MAP VIEW) ───
function renderBoard() {
  const areas = getAreas();
  for (const [vk, groups] of Object.entries(areas)) {
    const host = document.querySelector('#' + vk);
    if (!host) continue;
    host.innerHTML = '';
    groups.forEach(g => {
      const sec = document.createElement('section');
      sec.className = `${g.type}-group`;
      const pName = getPlayerName(g.id);
      const ph = g.type === 'main' ? `
        <div class="route-player-box">
          <input class="player-input" data-route="${g.id}" type="text" placeholder="${t('invocadorLabel')}" value="${pName}"/>
        </div>` : '';
      const gn = typeof g.name === 'function' ? g.name() : g.name;
      sec.innerHTML = `
        <div class="group-heading route-heading-bar">
          <div><h3>${gn}</h3><span>${t('nodeLabel')}s ${g.nodes.join(' · ')}</span></div>
          ${ph}
        </div>
        <div class="node-list"></div>`;
      const nodeList = sec.querySelector('.node-list');
      if (currentMap === 'STANDARD' && g.type === 'main' && g.nodes.length === 4) {
        const s1Div = document.createElement('div');
        s1Div.className = 'section-divider s1-header';
        s1Div.innerHTML = `<span class="section-badge s1">S1</span> <span>${t('section1Label')} (N${g.nodes[0]}, N${g.nodes[1]})</span>`;
        nodeList.append(s1Div);
        nodeList.append(createNodeCard(g.nodes[0]));
        nodeList.append(createNodeCard(g.nodes[1]));

        const s2Div = document.createElement('div');
        s2Div.className = 'section-divider s2-header';
        s2Div.innerHTML = `<span class="section-badge s2">S2</span> <span>${t('section2Label')} (N${g.nodes[2]}, N${g.nodes[3]})</span>`;
        nodeList.append(s2Div);
        nodeList.append(createNodeCard(g.nodes[2]));
        nodeList.append(createNodeCard(g.nodes[3]));
      } else {
        g.nodes.forEach(n => nodeList.append(createNodeCard(n)));
      }
      host.append(sec);
    });
  }

  document.querySelectorAll('.player-input').forEach(inp => {
    inp.oninput = () => {
      customState.playerNames[inp.dataset.route] = inp.value.trim();
      saveState();
      plan();
    };
  });
}

// ─── DEFENDER PICKER MODAL ───
let modalActiveNode = 1, currentDefClassFilter = 'ALL';

function openDefenderPickerModal(node) {
  modalActiveNode = node;
  document.querySelector('#defModalSubtitle').textContent = `${t('nodeLabel')} ${node}`;
  document.querySelector('#defModalTitle').textContent = `${t('selectDefender')} (${t('currentDef')} ${data[node]?.defender || '—'})`;

  const pop = document.querySelector('#popularDefChips');
  pop.innerHTML = POPULAR_DEFENDERS.map(n => {
    const c = findChampion(n);
    return `
      <button class="pop-chip" data-champ="${n}">
        <img class="pop-chip-img" src="${c?.image || ''}" alt=""/>
        <span>${n}</span>
      </button>`;
  }).join('');
  pop.querySelectorAll('.pop-chip').forEach(btn => {
    btn.onclick = () => assignDefenderToNode(modalActiveNode, btn.dataset.champ);
  });

  const searchInp = document.querySelector('#defSearchInput');
  searchInp.value = '';
  currentDefClassFilter = 'ALL';
  document.querySelectorAll('#defClassChips .chip').forEach(c => c.classList.toggle('active', c.dataset.defClass === 'ALL'));
  renderDefGrid('ALL', '');
  document.querySelector('#defenderPickerModal').style.display = 'flex';
  setTimeout(() => searchInp.focus(), 50);
}

function getFilteredDefenders(cls, q) {
  q = (q || '').trim().toLowerCase();
  let f = champions;
  if (cls !== 'ALL') f = f.filter(c => (c.class || '').toUpperCase() === cls);
  if (q) f = f.filter(c => c.name.toLowerCase().includes(q));
  return f;
}

function renderDefGrid(cls, q) {
  const grid = document.querySelector('#allDefendersGrid');
  const f = getFilteredDefenders(cls, q);
  const cn = CLASS_NAMES();
  grid.innerHTML = f.slice(0, 100).map(c => {
    const cl = (c.class || 'COSMIC').toLowerCase();
    return `
      <div class="champ-grid-card" data-champ="${c.name}">
        <img class="champ-grid-avatar" src="${c.image}" alt=""/>
        <div>
          <span class="champ-grid-name">${c.name}</span>
          <span class="class-tag ${cl}" style="font-size:8px;padding:1px 4px;">${cn[c.class] || ''}</span>
        </div>
      </div>`;
  }).join('') || '<p class="stat-detail" style="grid-column:1/-1;padding:12px;">—</p>';

  grid.querySelectorAll('.champ-grid-card').forEach(card => {
    card.onclick = () => assignDefenderToNode(modalActiveNode, card.dataset.champ);
  });
}

function assignDefenderToNode(node, name) {
  data[node].defender = name || '';
  data[node].counters = [];
  saveState();
  document.querySelector('#defenderPickerModal').style.display = 'none';
  renderBoard();
  if (name) {
    const ce = document.querySelector(`.node-card[data-node="${node}"]`);
    fetchCounters(node, ce?.querySelector('.fight-status'), ce?.querySelector('.counter-note'));
  } else {
    plan();
    updateDashboard();
  }
}

document.querySelector('#closeDefModalBtn').onclick =
document.querySelector('#cancelDefModalBtn').onclick = () => {
  document.querySelector('#defenderPickerModal').style.display = 'none';
};
document.querySelector('#clearNodeDefBtn').onclick = () => assignDefenderToNode(modalActiveNode, '');

document.querySelectorAll('#defClassChips .chip').forEach(chip => {
  chip.onclick = () => {
    document.querySelectorAll('#defClassChips .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentDefClassFilter = chip.dataset.defClass;
    renderDefGrid(currentDefClassFilter, document.querySelector('#defSearchInput').value);
  };
});

document.querySelector('#defSearchInput').oninput = e => renderDefGrid(currentDefClassFilter, e.target.value);

// Enter key selects first champion in defender picker modal
document.querySelector('#defSearchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const first = getFilteredDefenders(currentDefClassFilter, e.target.value)[0];
    if (first) assignDefenderToNode(modalActiveNode, first.name);
  }
});

// ─── TACTICAL VARIATIONS (GREEDY COVER) ───
function generateVariations(nodes) {
  const fights = nodes.map(getFightData).filter(f => f.defender);
  if (!fights.length) return [{ name: `${t('variationLabel')} 1`, team: [] }];

  const cMap = new Map();
  fights.forEach(f => {
    f.counters.forEach(c => {
      if (!cMap.has(c.name)) {
        cMap.set(c.name, { name: c.name, nodesCovered: new Set(), totalFights: 0, prefights: c.prefights || [] });
      }
      const it = cMap.get(c.name);
      it.nodesCovered.add(f.node);
      it.totalFights += c.fights || 1;
      if (c.prefights?.length && !it.prefights.length) it.prefights = c.prefights;
    });
  });

  const all = Array.from(cMap.values());
  const sc = getSlotCount();

  function solve(ex1, ex2) {
    let unc = new Set(fights.map(f => f.node));
    const team = [];
    while (unc.size > 0 && team.length < sc) {
      let pool = all.filter(c => !team.includes(c.name));
      if (team.length === 0 && ex1) pool = pool.filter(c => c.name !== ex1);
      if (team.length === 1 && ex2) pool = pool.filter(c => c.name !== ex2);
      if (!pool.length) break;
      pool.sort((a, b) => {
        let an = 0, bn = 0;
        a.nodesCovered.forEach(n => { if (unc.has(n)) an++; });
        b.nodesCovered.forEach(n => { if (unc.has(n)) bn++; });
        return (bn - an) || (b.totalFights - a.totalFights);
      });
      let coversCount = 0;
      pool[0].nodesCovered.forEach(n => { if (unc.has(n)) coversCount++; });
      if (coversCount === 0) break;
      pool[0].nodesCovered.forEach(n => unc.delete(n));
      team.push(pool[0].name);
    }
    return team;
  }

  const v1 = solve();
  const v2 = all.length > sc ? solve(v1[0]) : null;
  const v3 = (sc === 3 && all.length > sc + 1) ? solve(null, v1[1]) : null;

  const vars = [{ name: `${t('variationLabel')} 1 ⭐`, team: v1 }];
  if (v2?.length && JSON.stringify(v2) !== JSON.stringify(v1)) vars.push({ name: `${t('variationLabel')} 2`, team: v2 });
  if (v3?.length && JSON.stringify(v3) !== JSON.stringify(v1) && (!v2 || JSON.stringify(v3) !== JSON.stringify(v2))) vars.push({ name: `${t('variationLabel')} 3`, team: v3 });
  return vars;
}

// ─── FIGHT ASSIGNMENT WITH MANUAL OVERRIDE & INDEPENDENT REMOVAL ───
function assignFights(nodes, team) {
  return nodes.map(node => {
    const f = getFightData(node);
    if (!f.defender) {
      return { node, defender: '', defenderChamp: null, attacker: null, attackerChamp: null, fights: 0, covered: false, manual: false, note: f.note, prefights: [] };
    }

    // 1. Check for manual fight override
    const override = customState.fightOverrides?.[node];
    if (override === '__none__') {
      return { node, defender: f.defender, defenderChamp: f.champ, attacker: null, attackerChamp: null, fights: 0, covered: false, manual: false, note: f.note, prefights: [] };
    }
    if (override) {
      const oc = findChampion(override);
      const counterItem = f.counters.find(c => c.name.toLowerCase() === override.toLowerCase());
      return {
        node,
        defender: f.defender,
        defenderChamp: f.champ,
        attacker: override,
        attackerChamp: oc,
        fights: counterItem?.fights || 0,
        covered: true,
        manual: !counterItem,
        note: f.note,
        prefights: counterItem?.prefights || []
      };
    }

    // 2. Auto-assign from team slot champions (only if CereBro has fight data)
    let bestAtt = null, bestScore = -1, bestFights = 0, bestPF = [];
    team.filter(Boolean).forEach(attName => {
      const counterItem = f.counters.find(c => c.name.toLowerCase() === attName.toLowerCase());
      if (counterItem) {
        const score = 1000 + (counterItem.fights || 1) * 10;
        if (score > bestScore) {
          bestScore = score;
          bestAtt = attName;
          bestFights = counterItem.fights || 1;
          bestPF = counterItem.prefights || [];
        }
      }
    });

    if (bestAtt) {
      return {
        node,
        defender: f.defender,
        defenderChamp: f.champ,
        attacker: bestAtt,
        attackerChamp: findChampion(bestAtt),
        fights: bestFights,
        covered: true,
        manual: false,
        note: f.note,
        prefights: bestPF
      };
    }

    // 3. Unassigned when no CereBro video matches available slots
    return { node, defender: f.defender, defenderChamp: f.champ, attacker: null, attackerChamp: null, fights: 0, covered: false, manual: false, note: f.note, prefights: [] };
  });
}

function getActiveTeam(rId, variations) {
  const c = customState.customTeams[rId];
  if (c?.length) return c;
  const idx = customState.selectedVariations[rId] || 0;
  return (variations[idx] || variations[0])?.team || [];
}

// ─── FIGHT ASSIGNMENT MODAL (ASSIGN ATTACKER SPECIFIC TO 1 FIGHT) ───
let fightPickerNode = null, fightPickerRouteId = null;

function openFightAssignmentModal(node, routeId) {
  fightPickerNode = node;
  fightPickerRouteId = routeId;
  const modal = document.querySelector('#slotPickerModal');
  const f = getFightData(node);
  document.querySelector('#slotModalSubtitle').textContent = `${t('nodeLabel')} ${node} · ${f.defender}`;
  document.querySelector('#slotModalTitle').textContent = t('assignAttackerTitle');

  // 1. Recommended tab: team slots + CereBro counters
  const recList = document.querySelector('#recommendedCountersList');
  const nodes = routeId === 'reserve' ? getUncoveredPathNodes() : getPlayerNodes(routeId);
  const vars = generateVariations(nodes);
  const currentTeam = getActiveTeam(routeId, vars).filter(Boolean);

  let teamCardsHtml = '';
  if (currentTeam.length) {
    teamCardsHtml = `
      <div style="margin-bottom:12px;">
        <span class="stat-detail" style="font-weight:700; color:var(--accent); text-transform:uppercase;">${t('teamAttackerHeading')}</span>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:6px;">
          ${currentTeam.map(att => {
            const ch = findChampion(att);
            const counterMatch = f.counters.find(c => c.name.toLowerCase() === att.toLowerCase());
            const pf = counterMatch?.prefights?.length ? `<span class="prefight-indicator">🔄 ${t('prefightLabel')} ${counterMatch.prefights.map(p=>p.name).join(', ')}</span>` : '';
            const cUrl = getCerebroUrl(node, f.defender, att);
            return `
              <div class="counter-option-card" style="flex:1; min-width:140px;" data-champ="${att}">
                <div class="counter-opt-left">
                  <img class="counter-opt-avatar" src="${ch?.image || ''}" alt=""/>
                  <div class="counter-opt-meta">
                    <strong>${att}</strong>
                    <span>${counterMatch ? `${counterMatch.fights} ${t('cebroBadge')}` : t('noCereBroNote')}</span>
                    ${pf}
                  </div>
                </div>
                <div class="counter-opt-actions">
                  <a class="counter-cerebro-btn" href="${cUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('viewInCerebro')}">🎥 ${counterMatch ? counterMatch.fights : ''} ↗</a>
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>
      <hr class="modal-divider" style="margin:10px 0;"/>`;
  }

  let cerebroCardsHtml = '';
  if (f.counters.length) {
    cerebroCardsHtml = f.counters.map(c => {
      const ch = findChampion(c.name);
      const pfHtml = c.prefights?.length ? `<div class="prefight-indicator">🔄 ${t('prefightLabel')} ${c.prefights.map(p=>p.name).join(', ')}</div>` : '';
      const cUrl = getCerebroUrl(node, f.defender, c.name);
      return `
        <div class="counter-option-card" data-champ="${c.name}">
          <div class="counter-opt-left">
            <img class="counter-opt-avatar" src="${ch?.image || ''}" alt=""/>
            <div class="counter-opt-meta">
              <strong>${c.name}</strong>
              <span>${c.fights} ${c.fights === 1 ? t('fightsResolved') : t('fightsResolvedPl')} ${t('cebroBadge')}</span>
              ${pfHtml}
            </div>
          </div>
          <div class="counter-opt-actions">
            <a class="counter-cerebro-btn" href="${cUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('viewInCerebro')}">🎥 ${c.fights} ↗</a>
          </div>
        </div>`;
    }).join('');
  } else {
    cerebroCardsHtml = `<p class="stat-detail" style="padding:10px 0;">${t('noResults')} — busca en la pestaña "Todos".</p>`;
  }

  recList.innerHTML = teamCardsHtml + cerebroCardsHtml;
  recList.querySelectorAll('.counter-option-card').forEach(card => {
    card.onclick = () => assignFightToNode(node, card.dataset.champ);
  });

  renderAllChampionsInSlotModal('ALL', '');
  document.querySelector('#emptySlotBtn').textContent = t('removeFight');
  modal.style.display = 'flex';
}

function assignFightToNode(node, champName) {
  if (!champName) {
    customState.fightOverrides[node] = '__none__';
    saveState();
    document.querySelector('#slotPickerModal').style.display = 'none';
    plan();
    updateDashboard();
    return;
  }

  // Determine route / player for this fight
  let rId = fightPickerRouteId;
  if (!rId && currentMap === 'STANDARD') {
    for (let p = 1; p <= 9; p++) {
      if (getPlayerNodes(p).includes(node)) {
        rId = p;
        break;
      }
    }
  }

  if (rId) {
    const sc = getSlotCount();
    let curTeam;
    if (rId === 'reserve') {
      curTeam = [...(customState.customTeams['reserve'] || [])];
    } else {
      const nodes = getPlayerNodes(rId);
      const vars = generateVariations(nodes);
      curTeam = [...getActiveTeam(rId, vars)];
    }
    while (curTeam.length < sc) curTeam.push(null);

    const isAlreadyInTeam = curTeam.some(att => att && att.toLowerCase() === champName.toLowerCase());

    if (!isAlreadyInTeam) {
      const emptyIdx = curTeam.findIndex(att => !att);
      if (emptyIdx === -1) {
        showToast(`⚠️ ${t('teamFullNoSlots')}`);
        return;
      }
      curTeam[emptyIdx] = champName;
      customState.customTeams[rId] = curTeam;
      showToast(`⚡ ${champName} ${t('attackerAutoAdded')} ${emptyIdx + 1}`);
    }
  }

  customState.fightOverrides[node] = champName;
  saveState();
  document.querySelector('#slotPickerModal').style.display = 'none';
  plan();
  updateDashboard();
}

// ─── SLOT PICKER (FOR MODIFYING TEAM ATTACKER SLOTS) ───
let modalActiveRoute = null, modalActiveSlot = 0;

function openSlotPickerModal(routeId, slotIndex) {
  fightPickerNode = null;
  modalActiveRoute = routeId;
  modalActiveSlot = slotIndex;
  const modal = document.querySelector('#slotPickerModal');
  const pName = getPlayerName(routeId);
  document.querySelector('#slotModalSubtitle').textContent = `${typeof routeId === 'number' ? `${t('routeLabel')} ${routeId}` : (routeId === 'reserve' ? t('reservePlayer') : routeId)} (${pName}) · SLOT ${slotIndex + 1}`;
  document.querySelector('#slotModalTitle').textContent = t('modifyAttacker');

  const nodes = routeId === 'reserve' ? getUncoveredPathNodes() : getPlayerNodes(routeId);
  const fights = nodes.map(getFightData).filter(f => f.defender);
  const cAgg = new Map();

  fights.forEach(f => {
    f.counters.forEach(c => {
      if (!cAgg.has(c.name)) {
        cAgg.set(c.name, { name: c.name, nodes: new Set(), fights: 0, champ: findChampion(c.name), prefights: [] });
      }
      const it = cAgg.get(c.name);
      it.nodes.add(f.node);
      it.fights += c.fights || 1;
      if (c.prefights?.length && !it.prefights.length) it.prefights = c.prefights;
    });
  });

  const recList = document.querySelector('#recommendedCountersList');
  let recHtml = '';

  if (cAgg.size) {
    const sorted = Array.from(cAgg.values()).sort((a, b) => b.nodes.size - a.nodes.size || b.fights - a.fights);
    recHtml += sorted.map(c => {
      const pfHtml = c.prefights?.length ? `<div class="prefight-indicator">🔄 ${t('prefightLabel')} ${c.prefights.map(p=>p.name).join(', ')}</div>` : '';
      const firstNode = Array.from(c.nodes)[0];
      const targetFight = fights.find(f => f.node === firstNode);
      const cUrl = getCerebroUrl(firstNode, targetFight?.defender, c.name);
      return `
        <div class="counter-option-card" data-champ="${c.name}">
          <div class="counter-opt-left">
            <img class="counter-opt-avatar" src="${c.champ?.image || ''}" alt=""/>
            <div class="counter-opt-meta">
              <strong>${c.name}</strong>
              <span>${t('coversNodes')} ${Array.from(c.nodes).map(n => 'N' + n).join(', ')}</span>
              ${pfHtml}
            </div>
          </div>
          <div class="counter-opt-actions">
            <a class="counter-cerebro-btn" href="${cUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('viewInCerebro')}">🎥 ${c.fights} ↗</a>
          </div>
        </div>`;
    }).join('');
  }

  // Also suggest counters for uncovered Mini-Boss Islands (37..45) & Bosses (46..50)
  if (currentMap === 'STANDARD') {
    const { islandAssignments, bossAssignments } = computeBossAssignments();
    const islandBossAgg = new Map();
    const specialNodes = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    specialNodes.forEach(sn => {
      const f = getFightData(sn);
      if (!f.defender) return;
      const isIsland = sn <= 45;
      const alreadyCovered = isIsland ? islandAssignments.has(sn) : bossAssignments.has(sn);
      if (alreadyCovered) return;
      (f.counters || []).forEach(c => {
        if (!islandBossAgg.has(c.name)) {
          islandBossAgg.set(c.name, { name: c.name, nodes: new Set(), fights: 0, champ: findChampion(c.name), sampleNode: sn, sampleDef: f.defender });
        }
        const it = islandBossAgg.get(c.name);
        it.nodes.add(sn);
        it.fights += c.fights || 1;
      });
    });

    if (islandBossAgg.size) {
      const sortedIB = Array.from(islandBossAgg.values()).sort((a, b) => b.nodes.size - a.nodes.size || b.fights - a.fights).slice(0, 12);
      recHtml += `
        <div style="margin-top:${recHtml ? '12px' : '0'};margin-bottom:6px;">
          <span class="stat-detail" style="font-weight:700;color:#fbbf24;text-transform:uppercase;">⚡ ${t('uncoveredIslandsHeading')}</span>
        </div>` + sortedIB.map(c => {
        const cUrl = getCerebroUrl(c.sampleNode, c.sampleDef, c.name);
        return `
          <div class="counter-option-card" data-champ="${c.name}">
            <div class="counter-opt-left">
              <img class="counter-opt-avatar" src="${c.champ?.image || ''}" alt=""/>
              <div class="counter-opt-meta">
                <strong>${c.name}</strong>
                <span>⚡ ${t('coversNodes')} ${Array.from(c.nodes).map(n => 'N' + n).join(', ')}</span>
              </div>
            </div>
            <div class="counter-opt-actions">
              <a class="counter-cerebro-btn" href="${cUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('viewInCerebro')}">🎥 ${c.fights} ↗</a>
            </div>
          </div>`;
      }).join('');
    }
  }

  if (!recHtml) {
    recList.innerHTML = `<p class="stat-detail" style="padding:14px 0;">${t('noResults')}</p>`;
  } else {
    recList.innerHTML = recHtml;
    recList.querySelectorAll('.counter-option-card').forEach(card => {
      card.onclick = () => selectChampionForSlot(card.dataset.champ);
    });
  }

  renderAllChampionsInSlotModal('ALL', '');
  document.querySelector('#emptySlotBtn').textContent = t('emptySlot');
  modal.style.display = 'flex';
}

let currentModalClass = 'ALL';

function getFilteredSlotChampions(cls, q) {
  q = (q || '').trim().toLowerCase();
  let f = champions;
  if (cls !== 'ALL') f = f.filter(c => (c.class || '').toUpperCase() === cls);
  if (q) f = f.filter(c => c.name.toLowerCase().includes(q));
  return f;
}

function renderAllChampionsInSlotModal(cls, q) {
  const grid = document.querySelector('#allChampionsGrid');
  const f = getFilteredSlotChampions(cls, q);
  grid.innerHTML = f.slice(0, 100).map(c => `
    <div class="champ-grid-card" data-champ="${c.name}">
      <img class="champ-grid-avatar" src="${c.image}" alt=""/>
      <span class="champ-grid-name">${c.name}</span>
    </div>`).join('') || '<p class="stat-detail" style="grid-column:1/-1;padding:12px;">—</p>';

  grid.querySelectorAll('.champ-grid-card').forEach(card => {
    card.onclick = () => {
      if (fightPickerNode !== null) assignFightToNode(fightPickerNode, card.dataset.champ);
      else selectChampionForSlot(card.dataset.champ);
    };
  });
}

function selectChampionForSlot(champName) {
  const rId = modalActiveRoute, sIdx = modalActiveSlot;
  const sc = getSlotCount();
  let cur;
  if (rId === 'reserve') {
    cur = [...(customState.customTeams['reserve'] || [])];
  } else {
    const nodes = getPlayerNodes(rId);
    const vars = generateVariations(nodes);
    cur = [...getActiveTeam(rId, vars)];
  }
  while (cur.length < sc) cur.push(null);
  cur[sIdx] = champName;
  customState.customTeams[rId] = cur;
  saveState();
  document.querySelector('#slotPickerModal').style.display = 'none';
  plan();
  updateDashboard();
}

function closeSlotModal() {
  document.querySelector('#slotPickerModal').style.display = 'none';
  fightPickerNode = null;
}

document.querySelector('#closeSlotModalBtn').onclick = closeSlotModal;
document.querySelector('#cancelSlotModalBtn').onclick = closeSlotModal;

document.querySelector('#emptySlotBtn').onclick = () => {
  if (fightPickerNode !== null) {
    assignFightToNode(fightPickerNode, null);
  } else {
    selectChampionForSlot(null);
  }
};

document.querySelectorAll('.slot-tab').forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll('.slot-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.slot-tab-pane').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector('#' + (tab.dataset.slotTab === 'recommended' ? 'paneRecommended' : 'paneAll')).classList.add('active');
  };
});

document.querySelectorAll('#slotClassChips .chip').forEach(chip => {
  chip.onclick = () => {
    document.querySelectorAll('#slotClassChips .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentModalClass = chip.dataset.class;
    renderAllChampionsInSlotModal(currentModalClass, document.querySelector('#slotSearchInput').value);
  };
});

document.querySelector('#slotSearchInput').oninput = e => renderAllChampionsInSlotModal(currentModalClass, e.target.value);

// Enter key selects first champion in slot / fight modal
document.querySelector('#slotSearchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const first = getFilteredSlotChampions(currentModalClass, e.target.value)[0];
    if (first) {
      if (fightPickerNode !== null) assignFightToNode(fightPickerNode, first.name);
      else selectChampionForSlot(first.name);
    }
  }
});

// ─── PREFIGHT SLOT FILLING ───
// A prefight champion consumes a team slot even though it has no assigned fight.
// Fights are assigned first with the user's team; then each required prefight is
// placed into the first empty slot. If no slot is free, it is reported as missing.
function fillPrefightSlots(slots, assigned) {
  const filled = [...slots];
  const prefightFor = {}; // slot index -> [node numbers]
  const missing = [];     // [{name, node}]
  assigned.forEach(a => {
    if (!a.covered || !a.prefights?.length) return;
    const pfName = a.prefights[0].name; // most used prefight in CereBro for this fight
    const lower = pfName.toLowerCase();
    let idx = filled.findIndex(s => s && s.toLowerCase() === lower);
    if (idx === -1) {
      idx = filled.findIndex(s => !s);
      if (idx === -1) { missing.push({ name: pfName, node: a.node }); return; }
      filled[idx] = pfName;
    }
    (prefightFor[idx] = prefightFor[idx] || []).push(a.node);
  });
  return { filled, prefightFor, missing };
}

// ─── FIGHT ROW RENDERER ───
function renderFightRowHtml(f, rId) {
  if (!f.defender) {
    return `
      <div class="fight-row" style="opacity:0.5;">
        <span class="fight-node-label">N${f.node}</span>
        <div class="fight-fighter" onclick="openDefenderPickerModal(${f.node})" style="cursor:pointer;">
          <span class="stat-detail">${t('assignDefender')}</span>
        </div>
        <span class="fight-vs">-</span>
        <span class="stat-detail">-</span>
      </div>`;
  }

  const noteD = f.note ? `<div style="grid-column:1/-1;font-size:9px;color:#93c5fd;padding-left:36px;">📝 ${f.note}</div>` : '';

  if (loadingNodes.has(f.node)) {
    return `
      <div class="fight-row loading-row" data-node="${f.node}">
        <span class="fight-node-label">N${f.node}</span>
        <div class="fight-fighter" onclick="openDefenderPickerModal(${f.node})" style="cursor:pointer;" title="${f.defender}">
          <img class="fight-avatar" src="${f.defenderChamp?.image || ''}" alt=""/>
          <span class="fight-fighter-name" title="${f.defender}">${f.defender}</span>
        </div>
        <span class="fight-vs">⚔️</span>
        <div class="fight-fighter fight-attacker-side fight-loading-state" data-fight-node="${f.node}" data-route="${rId}">
          <span class="loading-spinner-sm"></span>
          <span>${t('loadingFightsCerebro')}</span>
        </div>
        ${noteD}
      </div>`;
  }

  const pfHtml = f.prefights?.length ? `
    <div class="prefight-indicator">🔄 ${t('prefightLabel')} <strong>${f.prefights.map(p => p.name).join(', ')}</strong></div>` : '';

  const attContent = f.covered && f.attacker ? `
    <div class="fight-fighter fight-attacker-side" data-fight-node="${f.node}" data-route="${rId}" title="${t('clickToAssign')}">
      <img class="fight-avatar" src="${f.attackerChamp?.image || ''}" alt=""/>
      <div class="fight-attacker-meta">
        <span class="fight-fighter-name" title="${f.attacker}">${f.attacker}</span>
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:2px;">
          ${f.fights ? `
            <a class="cerebro-link-pill" href="${getCerebroUrl(f.node, f.defender, f.attacker)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('viewInCerebro')}">
              🎥 ${f.fights} ${t('cebroBadge')} ↗
            </a>` : `
            <small style="color:#f59e0b;font-size:9.5px;font-weight:600;">${t('noCereBroNote')}</small>
            <a class="cerebro-link-pill secondary" href="${getCerebroUrl(f.node, f.defender, f.attacker)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('searchInCerebro')}">
              🔍 CereBro ↗
            </a>`}
        </div>
        ${pfHtml}
      </div>
      <button class="remove-fight-btn" data-fight-node="${f.node}" title="${t('removeFight')}">✕</button>
    </div>` : `
    <div class="fight-fighter fight-attacker-side unassigned" data-fight-node="${f.node}" data-route="${rId}" title="${t('clickToAssign')}">
      <span class="uncovered-warn">${t('noCounterWarn')}</span>
      <a class="cerebro-link-pill secondary" style="margin-left:auto;" href="${getCerebroUrl(f.node, f.defender)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('searchInCerebro')}">
        🎥 CereBro ↗
      </a>
    </div>`;

  return `
    <div class="fight-row ${f.covered ? '' : 'uncovered'}" data-node="${f.node}">
      <span class="fight-node-label">N${f.node}</span>
      <div class="fight-fighter" onclick="openDefenderPickerModal(${f.node})" style="cursor:pointer;" title="${f.defender}">
        <img class="fight-avatar" src="${f.defenderChamp?.image || ''}" alt=""/>
        <span class="fight-fighter-name" title="${f.defender}">${f.defender}</span>
      </div>
      <span class="fight-vs">⚔️</span>
      ${attContent}
      ${noteD}
    </div>`;
}

function getPlayerSpecialFights(rId, bossMaps) {
  if (!bossMaps) return [];
  const res = [];
  const key = String(rId);
  bossMaps.islandAssignments?.forEach((a, node) => {
    if (String(a.routeId) === key) {
      const f = getFightData(node);
      if (f.defender) res.push({ node, type: 'island', defender: f.defender, defenderChamp: f.champ, attacker: a.attacker, attackerChamp: a.champ, fights: a.fights, manual: a.manual });
    }
  });
  bossMaps.bossAssignments?.forEach((a, node) => {
    if (String(a.routeId) === key) {
      const f = getFightData(node);
      if (f.defender) res.push({ node, type: 'boss', defender: f.defender, defenderChamp: f.champ, attacker: a.attacker, attackerChamp: a.champ, fights: a.fights, manual: a.manual });
    }
  });
  res.sort((a, b) => a.node - b.node);
  return res;
}

function renderPlayerSpecialFightsHtml(specialFights) {
  if (!specialFights.length) return '';
  const rows = specialFights.map(sf => {
    const badge = sf.type === 'island' ? `⚡ ${t('islandTag')}` : `💀 ${t('bossTag')}`;
    const cUrl = getCerebroUrl(sf.node, sf.defender, sf.attacker);
    return `
      <div class="fight-row special-assigned-row" onclick="openBossAssignModal(${sf.node})" style="cursor:pointer;" title="${t('clickToReassignBoss')}">
        <div class="fight-defender-side">
          <span class="fight-node-badge" style="background:rgba(245,158,11,0.2);color:#fbbf24;border-color:rgba(245,158,11,0.4);">N${sf.node}</span>
          <img class="fight-mini-avatar" src="${sf.defenderChamp?.image || ''}" alt=""/>
          <span class="fight-champ-name">${sf.defender}</span>
          <span class="stat-detail" style="margin-left:4px;font-size:10px;color:#fbbf24;">${badge}</span>
        </div>
        <span class="fight-vs">➔</span>
        <div class="fight-attacker-side">
          <img class="fight-mini-avatar" src="${sf.attackerChamp?.image || ''}" alt=""/>
          <span class="fight-champ-name">${sf.attacker}</span>
          ${sf.manual ? `<span class="manual-badge">✎</span>` : ''}
          <a class="cerebro-link-pill" href="${cUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" title="${t('viewInCerebro')}">🎥 ↗</a>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="section-divider" style="margin-top:8px;color:#fbbf24;">
      <span class="section-badge" style="background:rgba(245,158,11,0.18);border-color:rgba(245,158,11,0.4);color:#fbbf24;">⚡</span>
      <span>${t('islandBossAssignedHeader')} (${specialFights.length})</span>
    </div>
    ${rows}`;
}

// ─── WAR PLAN RENDER ───
function renderRouteCardInPlan(routeObj, bossMaps = null) {
  const rId = routeObj.id;
  const nodes = getPlayerNodes(rId);
  const secs = getPlayerSections(rId);
  const isFlexible = (currentMap === 'STANDARD' && customState.assignmentMode === 'flexible');
  const playerName = getPlayerName(rId);
  const variations = generateVariations(nodes);
  const isCustom = Boolean(customState.customTeams[rId]);
  const activeTeam = getActiveTeam(rId, variations);
  const sc = getSlotCount();
  const baseSlots = Array.from({ length: sc }, (_, i) => activeTeam[i] || null);
  const assigned = assignFights(nodes, baseSlots);
  const { filled: slots, prefightFor, missing: missingPrefights } = fillPrefightSlots(baseSlots, assigned);
  const specialFights = getPlayerSpecialFights(rId, bossMaps);
  const coveredCount = assigned.filter(a => a.covered).length;
  const totalDefs = nodes.map(getFightData).filter(f => f.defender).length;
  const isLoadingRoute = nodes.some(n => Boolean(data[n]?.defender) && loadingNodes.has(n));
  const cn = CLASS_NAMES();

  const loadingPill = isLoadingRoute
    ? `<span class="route-loading-pill"><span class="loading-spinner-sm"></span> ${t('queryingCounters')}</span>`
    : '';

  const varBtns = variations.map((v, i) => `
    <button class="var-btn ${!isCustom && (customState.selectedVariations[rId] || 0) === i ? 'active' : ''}" data-route="${rId}" data-var="${i}">
      ${v.name}
    </button>`).join('');

  const customBadge = isCustom ? `
    <span class="var-btn custom-active">${t('customized')}</span>
    <button class="ghost-btn small reset-route-btn" data-route="${rId}">↺</button>` : '';

  const slotsHtml = slots.map((att, si) => {
    if (!att) {
      return `
        <div class="mcoc-slot empty" data-route="${rId}" data-slot="${si}" title="${t('clickToAssign')}">
          <span class="slot-tag">SLOT ${si + 1}</span>
          <span style="font-size:20px;color:var(--muted);margin:6px 0;">+</span>
          <span class="stat-detail">${t('slotAdd')}</span>
        </div>`;
    }
    const ch = findChampion(att), cls = (ch?.class || 'COSMIC').toLowerCase();
    const pathFc = assigned.filter(a => a.attacker === att && a.covered).length;
    const specialFc = specialFights.filter(sf => sf.attacker && sf.attacker.toLowerCase() === att.toLowerCase()).length;
    const fc = pathFc + specialFc;
    const pfNodes = prefightFor[si];
    const isAutoPrefight = pfNodes && !baseSlots[si];
    const pfBadge = pfNodes
      ? `<span class="slot-prefight-badge">🔄 ${t('prefightLabel')} ${pfNodes.map(n => 'N' + n).join(', ')}</span>`
      : '';
    const fightsBadge = (fc || !pfNodes)
      ? `<span class="slot-fights-badge">${fc} ${fc === 1 ? t('fightsResolved') : t('fightsResolvedPl')}</span>`
      : '';
    return `
      <div class="mcoc-slot ${isAutoPrefight ? 'prefight-slot' : ''}" data-route="${rId}" data-slot="${si}" title="${t('modifyAttacker')}">
        <span class="slot-edit-indicator">✎</span>
        <span class="slot-tag">SLOT ${si + 1}${isAutoPrefight ? ' · ' + t('prefightTag') : ''}</span>
        <div class="slot-avatar-wrap ${cls}">
          <img class="slot-img" src="${ch?.image || ''}" alt=""/>
        </div>
        <span class="slot-name">${att}</span>
        <span class="class-tag ${cls}" style="font-size:8px;padding:1px 5px;">${cn[ch?.class] || ''}</span>
        ${fightsBadge}
        ${pfBadge}
      </div>`;
  }).join('') + (missingPrefights.length ? `
      <div class="prefight-missing-warn">
        ⚠️ ${t('prefightNoSlot')} ${missingPrefights.map(m => `<strong>${m.name}</strong> (N${m.node})`).join(', ')}
      </div>` : '');

  let sectionPillsHtml = '';
  if (currentMap === 'STANDARD') {
    if (isFlexible) {
      sectionPillsHtml = `
        <div class="section-pills-row">
          <span class="section-badge s1">S1 (N${getSectionNodes(secs.s1, 1).join(', N')})</span>
          <div class="section-select-wrap">
            <span class="section-badge s2">S2</span>
            <select class="section-select select-s2" data-route="${rId}" title="${t('selectSection2')}">
              ${Array.from({ length: 9 }, (_, i) => {
                const p = i + 1;
                const sn = getSectionNodes(p, 2);
                return `<option value="${p}" ${secs.s2 === p ? 'selected' : ''}>${t('section2')} · N${sn[0]}, N${sn[1]}</option>`;
              }).join('')}
            </select>
          </div>
        </div>`;
    } else {
      sectionPillsHtml = `
        <div class="section-pills-row">
          <span class="section-badge s1">S1: ${t('routeLabel')} ${secs.s1} (N${getSectionNodes(secs.s1, 1).join(', N')})</span>
          <span class="section-badge s2">S2: ${t('routeLabel')} ${secs.s2} (N${getSectionNodes(secs.s2, 2).join(', N')})</span>
        </div>`;
    }
  }

  let fightsHtml = '';
  if (filterUncoveredOnly) {
    const uncoveredRows = assigned.filter(a => !a.covered && a.defender);
    fightsHtml = `
      <div class="section-divider s1-header" style="color:#fb7185;">
        <span class="section-badge s1" style="background:rgba(244,63,94,0.18);border-color:rgba(244,63,94,0.4);color:#fb7185;">⚠️</span>
        <span>${t('uncoveredFightsTitle')} (${uncoveredRows.length})</span>
      </div>
      ${uncoveredRows.map(f => renderFightRowHtml(f, rId)).join('')}`;
  } else if (currentMap === 'STANDARD' && nodes.length === 4) {
    const s1Row1 = renderFightRowHtml(assigned[0], rId);
    const s1Row2 = renderFightRowHtml(assigned[1], rId);
    const s2Row1 = renderFightRowHtml(assigned[2], rId);
    const s2Row2 = renderFightRowHtml(assigned[3], rId);
    const s1Label = isFlexible
      ? `<span>${t('section1Label')} · N${nodes[0]}, N${nodes[1]}</span>`
      : `<span>${t('section1Label')} · ${t('routeLabel')} ${secs.s1} (N${nodes[0]}, N${nodes[1]})</span>`;
    const s2Label = isFlexible
      ? `<span>${t('section2Label')} · N${nodes[2]}, N${nodes[3]}</span>`
      : `<span>${t('section2Label')} · ${t('routeLabel')} ${secs.s2} (N${nodes[2]}, N${nodes[3]})</span>`;
    fightsHtml = `
      <div class="section-divider s1-header">
        <span class="section-badge s1">S1</span>
        ${s1Label}
      </div>
      ${s1Row1}${s1Row2}
      <div class="section-divider s2-header">
        <span class="section-badge s2">S2</span>
        ${s2Label}
      </div>
      ${s2Row1}${s2Row2}`;
  } else {
    fightsHtml = assigned.map(f => renderFightRowHtml(f, rId)).join('');
  }

  const gn = typeof routeObj.name === 'function' ? routeObj.name() : routeObj.name;
  const headerTitle = isFlexible
    ? `<span class="player-role-badge">${t('invocadorLabel')} ${rId}</span>`
    : gn;

  return `
    <article class="assignment ${isCustom ? 'customized' : ''}" data-route="${rId}">
      <div class="assignment-top">
        <div>
          <h3 class="assignment-title">
            ${headerTitle}
            <input class="player-input inline-player-input" data-route="${rId}" type="text" value="${playerName}" placeholder="${t('invocadorLabel')}" />
          </h3>
          <p class="stat-detail" style="margin-top:2px;">
            ${coveredCount}/${totalDefs} ${t('fightsCovered')} · ${slots.filter(Boolean).length}/${sc} slots
            ${totalDefs > coveredCount ? ` · <span style="color:#fb7185;font-weight:700;">⚠️ ${totalDefs - coveredCount} ${t('uncoveredFightsTitle')}</span>` : ''}
          </p>
          ${sectionPillsHtml}
        </div>
        <div class="variation-tabs">
          ${loadingPill}
          ${varBtns}
          ${customBadge}
        </div>
      </div>
      <div class="attacker-slots-container slots-${sc}">${slotsHtml}</div>
      <div class="fights-section">
        <div class="fights-header">
          <span>${t('assignedFights')} (${nodes.length} ${t('nodeLabel')}${nodes.length > 1 ? 's' : ''})</span>
          <span>${t('defVsAtt')}</span>
        </div>
        <div class="fights-list">${fightsHtml}${!filterUncoveredOnly ? renderPlayerSpecialFightsHtml(specialFights) : ''}</div>
      </div>
    </article>`;
}

// ─── 10TH PLAYER (BACKUP / RESERVE) RENDER ───
function renderReserveCardInPlan(bossMaps = null) {
  const rId = 'reserve';
  const playerName = getPlayerName(rId);
  const sc = 3;
  const customTeam = customState.customTeams[rId] || [];
  const baseSlots = Array.from({ length: sc }, (_, i) => customTeam[i] || null);

  const uncoveredNodes = getUncoveredPathNodes();
  const assignedFightsList = uncoveredNodes.length > 0 ? assignFights(uncoveredNodes, baseSlots) : [];
  const specialFights = getPlayerSpecialFights(rId, bossMaps);
  const cn = CLASS_NAMES();

  const slotsHtml = baseSlots.map((att, si) => {
    if (!att) {
      return `
        <div class="mcoc-slot empty" data-route="${rId}" data-slot="${si}" title="${t('clickToAssign')}">
          <span class="slot-tag">SLOT ${si + 1}</span>
          <span style="font-size:20px;color:var(--muted);margin:6px 0;">+</span>
          <span class="stat-detail">${t('slotAdd')}</span>
        </div>`;
    }
    const ch = findChampion(att), cls = (ch?.class || 'COSMIC').toLowerCase();
    const pathFc = assignedFightsList.filter(a => a.attacker === att && a.covered).length;
    const specialFc = specialFights.filter(sf => sf.attacker && sf.attacker.toLowerCase() === att.toLowerCase()).length;
    const fc = pathFc + specialFc;
    const fightsBadge = fc ? `<span class="slot-fights-badge">${fc} ${fc === 1 ? t('fightsResolved') : t('fightsResolvedPl')}</span>` : '';
    return `
      <div class="mcoc-slot" data-route="${rId}" data-slot="${si}" title="${t('modifyAttacker')}">
        <span class="slot-edit-indicator">✎</span>
        <span class="slot-tag">SLOT ${si + 1}</span>
        <div class="slot-avatar-wrap ${cls}">
          <img class="slot-img" src="${ch?.image || ''}" alt=""/>
        </div>
        <span class="slot-name">${att}</span>
        <span class="class-tag ${cls}" style="font-size:8px;padding:1px 5px;">${cn[ch?.class] || ''}</span>
        ${fightsBadge}
      </div>`;
  }).join('');

  let bannerHtml = '';
  let fightsHtml = '';

  if (uncoveredNodes.length === 0) {
    bannerHtml = `<div class="reserve-banner success">✅ ${t('reserveAllCovered')}</div>`;
  } else {
    bannerHtml = `<div class="reserve-banner info">🛡️ ${t('reserveCovering')} (${uncoveredNodes.length} ${uncoveredNodes.length === 1 ? t('nodeLabel') : t('nodeLabel') + 's'})</div>`;
    fightsHtml = assignedFightsList.map(f => renderFightRowHtml(f, rId)).join('');
  }
  const specialHtml = renderPlayerSpecialFightsHtml(specialFights);

  return `
    <article class="assignment reserve-assignment" data-route="${rId}">
      <div class="assignment-top">
        <div>
          <h3 class="assignment-title">
            🛡️ ${t('reservePlayer')}
            <input class="player-input inline-player-input" data-route="${rId}" type="text" value="${playerName}" placeholder="${t('reservePlayer')}" />
          </h3>
          <p class="stat-detail" style="margin-top:2px;">
            ${t('reserveSub')} · ${baseSlots.filter(Boolean).length}/${sc} slots
          </p>
        </div>
        <div class="variation-tabs">
          <span class="section-badge" style="background:rgba(245,158,11,0.2);color:#fbbf24;border:1px solid rgba(245,158,11,0.4);">
            ${t('reservePlayer').toUpperCase()}
          </span>
          ${customTeam.filter(Boolean).length ? `
            <button class="ghost-btn small reset-route-btn" data-route="${rId}">↺</button>` : ''}
        </div>
      </div>
      <div class="attacker-slots-container slots-${sc}">${slotsHtml}</div>
      <div class="fights-section">
        <div class="fights-header">
          <span>${t('assignedFights')}</span>
          <span>${t('defVsAtt')}</span>
        </div>
        ${bannerHtml}
        ${(fightsHtml || specialHtml) ? `<div class="fights-list">${fightsHtml}${specialHtml}</div>` : ''}
      </div>
    </article>`;
}

// ─── BOSS RECOMMENDATIONS (MAXIMUM BIPARTITE MATCHING FOR ISLANDS + BOSSES) ───
function computeBossAssignments() {
  const areas = getAreas();
  const islandAssignments = new Map();
  const bossAssignments = new Map();
  if (!areas.islands.length && !areas.boss.length) {
    return { islandAssignments, bossAssignments };
  }

  const pTeams = areas.routes.map(r => {
    const pn = getPlayerName(r.id);
    const nodes = getPlayerNodes(r.id);
    const vs = generateVariations(nodes);
    const hasCustom = Boolean(customState.customTeams[r.id]?.length);
    return { routeId: r.id, key: String(r.id), playerName: pn, team: getActiveTeam(r.id, vs).filter(Boolean), isCustom: hasCustom };
  });
  if (currentMap === 'STANDARD') {
    const rTeam = (customState.customTeams['reserve'] || []).filter(Boolean);
    if (rTeam.length) {
      pTeams.push({
        routeId: 'reserve',
        key: 'reserve',
        playerName: getPlayerName('reserve'),
        team: rTeam,
        isCustom: true
      });
    }
  }

  const allIslandNodes = [37, 38, 39, 40, 41, 42, 43, 44, 45];
  const allBossNodes = [46, 47, 48, 49, 50];
  const manualDisabled = new Set();
  const lockedIslandPlayerKeys = new Set();

  // 1. Apply explicit manual overrides FIRST so auto-matching respects them
  if (customState.islandOverrides) {
    Object.entries(customState.islandOverrides).forEach(([nodeStr, override]) => {
      const nodeNum = parseInt(nodeStr, 10);
      const isMiniNode = allIslandNodes.includes(nodeNum);
      const targetMap = isMiniNode ? islandAssignments : bossAssignments;
      if (override === '__none__') {
        manualDisabled.add(nodeNum);
        targetMap.delete(nodeNum);
      } else if (override && override.player && override.attacker) {
        const f = getFightData(nodeNum);
        const cm = f.counters.find(c => c.name.toLowerCase() === override.attacker.toLowerCase());
        targetMap.set(nodeNum, {
          player: override.player,
          routeId: override.routeId,
          attacker: override.attacker,
          champ: findChampion(override.attacker),
          fights: cm?.fights || 0,
          manual: true
        });
        if (isMiniNode && override.routeId !== undefined && override.routeId !== null) {
          lockedIslandPlayerKeys.add(String(override.routeId));
        }
      }
    });
  }

  // 2. Mini-boss islands (37..45): Maximum Bipartite Matching (max 1 island fight per summoner)
  const islandCandidates = new Map();
  allIslandNodes.forEach(node => {
    if (islandAssignments.has(node) || manualDisabled.has(node)) return;
    const f = getFightData(node);
    if (!f.defender) return;
    const bestPerPlayer = new Map();
    pTeams.forEach(p => {
      if (lockedIslandPlayerKeys.has(p.key)) return;
      p.team.forEach(att => {
        const cm = f.counters.find(c => c.name.toLowerCase() === att.toLowerCase());
        if (cm) {
          const score = 1000 + (cm.fights || 1) * 10 + (p.isCustom ? 5 : 0);
          const prev = bestPerPlayer.get(p.key);
          if (!prev || score > prev.score) {
            bestPerPlayer.set(p.key, {
              player: p.playerName,
              routeId: p.routeId,
              playerKey: p.key,
              attacker: att,
              champ: findChampion(att),
              fights: cm.fights || 1,
              score
            });
          }
        }
      });
    });
    const cands = Array.from(bestPerPlayer.values()).sort((a, b) => b.score - a.score);
    if (cands.length) islandCandidates.set(node, cands);
  });

  // Order nodes by fewest available players first, then highest best score
  const openIslandNodes = Array.from(islandCandidates.keys()).sort((a, b) => {
    const ca = islandCandidates.get(a);
    const cb = islandCandidates.get(b);
    return (ca.length - cb.length) || (cb[0].score - ca[0].score);
  });

  // Kuhn's augmenting path algorithm guarantees maximum number of covered island nodes
  const matchPlayerToNode = new Map(); // playerKey -> node
  const matchNodeToCand = new Map();   // node -> cand

  function tryAugment(node, visitedPlayers) {
    const cands = islandCandidates.get(node) || [];
    for (const cand of cands) {
      if (visitedPlayers.has(cand.playerKey)) continue;
      visitedPlayers.add(cand.playerKey);
      const prevNode = matchPlayerToNode.get(cand.playerKey);
      if (prevNode === undefined || tryAugment(prevNode, visitedPlayers)) {
        matchPlayerToNode.set(cand.playerKey, node);
        matchNodeToCand.set(node, cand);
        return true;
      }
    }
    return false;
  }

  openIslandNodes.forEach(node => {
    tryAugment(node, new Set());
  });

  matchNodeToCand.forEach((cand, node) => {
    islandAssignments.set(node, cand);
  });

  // 3. Boss Island (46..50)
  allBossNodes.forEach(node => {
    if (bossAssignments.has(node) || manualDisabled.has(node)) return;
    const f = getFightData(node);
    const cands = [];
    if (f.defender) {
      pTeams.forEach(p => {
        p.team.forEach(att => {
          const cm = f.counters.find(c => c.name.toLowerCase() === att.toLowerCase());
          if (cm) {
            cands.push({
              player: p.playerName,
              routeId: p.routeId,
              attacker: att,
              champ: findChampion(att),
              fights: cm.fights || 1,
              score: 1000 + (cm.fights || 1) * 10 + (p.isCustom ? 5 : 0)
            });
          }
        });
      });
      cands.sort((a, b) => b.score - a.score);
      if (cands.length) {
        bossAssignments.set(node, cands[0]);
      }
    }
  });

  return { islandAssignments, bossAssignments };
}

function evaluateBossRecommendations(filterUncovered = false, precomputed = null) {
  const areas = getAreas();
  if (!areas.islands.length && !areas.boss.length) return { islandsHtml: '', bossHtml: '' };

  const { islandAssignments, bossAssignments } = precomputed || computeBossAssignments();

  function renderG(group, ecls) {
    const isMini = group.type === 'mini';
    const activeNodes = filterUncovered
      ? group.nodes.filter(node => {
          const f = getFightData(node);
          if (!f.defender) return false;
          const assigned = isMini ? islandAssignments.get(node) : bossAssignments.get(node);
          return !assigned;
        })
      : group.nodes;

    if (filterUncovered && !activeNodes.length) return '';

    const nh = activeNodes.map(node => {
      const f = getFightData(node);
      if (!f.defender) {
        return `
          <div class="boss-node-match">
            <div class="boss-node-top">
              <strong>N${node}</strong>
              <span class="stat-detail" onclick="openDefenderPickerModal(${node})" style="cursor:pointer;color:var(--accent);">+ ${t('assignDefender')}</span>
            </div>
          </div>`;
      }
      if (loadingNodes.has(node)) {
        return `
          <div class="boss-node-match ${ecls}">
            <div class="boss-node-top">
              <strong>${t('nodeLabel')} ${node}</strong>
              <img src="${f.champ?.image || ''}" style="width:24px;height:24px;border-radius:50%;object-fit:cover;cursor:pointer;" onclick="openDefenderPickerModal(${node})" alt=""/>
              <span class="boss-node-title" style="cursor:pointer;" onclick="openDefenderPickerModal(${node})">${f.defender}</span>
            </div>
            <div class="candidate-pills-list">
              <div class="candidate-pill loading-pill">
                <span class="loading-spinner-sm"></span>
                <span>${t('loadingFightsCerebro')}</span>
              </div>
            </div>
          </div>`;
      }

      const assigned = isMini ? islandAssignments.get(node) : bossAssignments.get(node);
      const isManual = Boolean(customState.islandOverrides?.[node] && customState.islandOverrides[node] !== '__none__');

      let contentHtml = '';
      if (assigned) {
        contentHtml = `
          <div class="candidate-pills-list">
            <div class="assigned-boss-chip ${isManual ? 'manual-boss-assigned' : ''}" onclick="openBossAssignModal(${node})" title="${t('clickToReassignBoss')}">
              🎯 <strong>${assigned.player}</strong> (${assigned.attacker}${assigned.fights ? ` · ${assigned.fights} ${t('cebroBadge')}` : ''})
              ${isManual ? `<span class="manual-badge">✎ ${t('manualTag')}</span>` : `<span class="boss-edit-pen">✎</span>`}
              <a href="${getCerebroUrl(node, f.defender, assigned.attacker)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" style="color:var(--accent);margin-left:4px;text-decoration:none;font-weight:700;" title="${t('viewInCerebro')}">↗</a>
            </div>
            ${isManual ? `<button class="ghost-btn small remove-boss-override-btn" onclick="event.stopPropagation(); resetBossAssignment(${node});" title="${t('resetToAuto')}">↺</button>` : ''}
          </div>`;
      } else {
        const topCounters = (f.counters || []).slice(0, 5);
        const counterChips = topCounters.map(c => {
          const cc = findChampion(c.name);
          return `
            <div class="suggestion-chip" onclick="openBossAssignModal(${node})" title="${t('clickToReassignBoss')}">
              <img src="${cc?.image || ''}" class="suggestion-avatar" alt=""/>
              <span><strong>${c.name}</strong> (${c.fights || 1})</span>
              <a href="${getCerebroUrl(node, f.defender, c.name)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" style="color:var(--accent);text-decoration:none;" title="${t('viewInCerebro')}">↗</a>
            </div>`;
        }).join('') || `<span class="stat-detail">${t('noResults')}</span>`;

        contentHtml = `
          <div class="candidate-pills-list">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              <span class="uncovered-warn" style="font-size:11px;">⚠️ ${t('noTeamCounter')}</span>
              <button class="ghost-btn small" onclick="openBossAssignModal(${node})" style="padding:4px 8px; font-size:11px; color:var(--accent); border-color:rgba(130,226,203,0.3);">
                ➕ ${t('assignBossTitle')}
              </button>
              <button class="btn-toggle-recs" data-node="${node}">${t('viewCerebroCounters')} ▾</button>
            </div>
            <div class="cerebro-suggestions-box" id="recs-${node}" style="display:none;">
              <div class="suggestions-header">${t('cerebroSuggestionsNote')}</div>
              <div class="suggestions-list">${counterChips}</div>
            </div>
          </div>`;
      }

      return `
        <div class="boss-node-match ${ecls} ${!assigned ? 'uncovered-priority' : ''}">
          <div class="boss-node-top">
            <strong>${t('nodeLabel')} ${node}</strong>
            <img src="${f.champ?.image || ''}" style="width:24px;height:24px;border-radius:50%;object-fit:cover;cursor:pointer;" onclick="openDefenderPickerModal(${node})" alt=""/>
            <span class="boss-node-title" style="cursor:pointer;" onclick="openDefenderPickerModal(${node})">${f.defender}</span>
            <a class="cerebro-link-pill secondary" href="${getCerebroUrl(node, f.defender)}" target="_blank" rel="noopener noreferrer" style="margin-left:auto;font-size:9px;" title="${t('viewInCerebro')}">🎥 CereBro ↗</a>
          </div>
          ${contentHtml}
        </div>`;
    }).join('');

    const gn = typeof group.name === 'function' ? group.name() : group.name;
    return `
      <article class="assignment ${ecls}">
        <div class="assignment-top">
          <div>
            <h3 class="assignment-title">${gn}</h3>
            <p class="stat-detail">${t('attackerCandidates')}</p>
          </div>
        </div>
        <div class="boss-candidate-grid">${nh}</div>
      </article>`;
  }

  return {
    islandsHtml: areas.islands.map(g => renderG(g, 'mini-special')).filter(Boolean).join(''),
    bossHtml: areas.boss.map(g => renderG(g, 'boss-special')).filter(Boolean).join('')
  };
}

// ─── BOSS & MINI-BOSS MANUAL ASSIGNMENT MODAL ───
let activeBossModalNode = null;

function openBossAssignModal(node) {
  activeBossModalNode = node;
  const f = getFightData(node);
  const modal = document.querySelector('#bossAssignModal');
  if (!modal) return;

  const nodeLabelText = `${t('nodeLabel')} ${node} · ${f.defender || t('noDefenderYet')}`;
  document.querySelector('#bossAssignSubtitle').textContent = nodeLabelText;
  document.querySelector('#bossAssignTitle').textContent = t('assignBossTitle');

  const pTeams = [];
  const areas = getAreas();
  areas.routes.forEach(r => {
    const pn = getPlayerName(r.id);
    const nodes = getPlayerNodes(r.id);
    const vs = generateVariations(nodes);
    const team = getActiveTeam(r.id, vs).filter(Boolean);
    pTeams.push({
      routeId: r.id,
      roleName: `${t('invocadorLabel')} ${r.id}`,
      playerName: pn,
      team
    });
  });

  if (currentMap === 'STANDARD') {
    const rTeam = (customState.customTeams['reserve'] || []).filter(Boolean);
    pTeams.push({
      routeId: 'reserve',
      roleName: t('reservePlayer'),
      playerName: getPlayerName('reserve'),
      team: rTeam
    });
  }

  const currentOverride = customState.islandOverrides?.[node];
  const listContainer = document.querySelector('#bossPlayerList');

  listContainer.innerHTML = pTeams.map(p => {
    const isPlayerSelected = currentOverride && currentOverride.player === p.playerName;
    const teamChipsHtml = p.team.length ? p.team.map(att => {
      const ch = findChampion(att);
      const isAttSelected = isPlayerSelected && currentOverride.attacker && currentOverride.attacker.toLowerCase() === att.toLowerCase();
      const counterItem = f.counters.find(c => c.name.toLowerCase() === att.toLowerCase());
      const fightsBadge = counterItem ? `<span class="stat-detail" style="color:var(--accent); font-weight:700;">★ ${counterItem.fights || 1} ${t('cebroBadge')}</span>` : '';
      return `
        <div class="boss-champ-select-chip ${isAttSelected ? 'active' : ''} ${counterItem ? 'recommended-match' : ''}"
             onclick="selectBossAttacker(${node}, '${p.playerName}', '${p.routeId}', '${att}')">
          <img class="boss-champ-avatar" src="${ch?.image || ''}" alt=""/>
          <div style="display:flex; flex-direction:column; min-width:0;">
            <span style="font-weight:700; font-size:12px;">${att}</span>
            ${fightsBadge}
          </div>
        </div>`;
    }).join('') : `<span class="stat-detail" style="font-style:italic;">${t('noChampionsInTeam')}</span>`;

    return `
      <div class="boss-player-row">
        <div class="boss-player-meta">
          <strong>${p.playerName}</strong>
          <span class="stat-detail">${p.roleName}</span>
        </div>
        <div class="boss-player-team-chips">
          ${teamChipsHtml}
        </div>
      </div>`;
  }).join('');

  modal.style.display = 'flex';
}

function selectBossAttacker(node, playerName, routeId, attackerName) {
  if (!customState.islandOverrides) customState.islandOverrides = {};
  customState.islandOverrides[node] = {
    player: playerName,
    routeId,
    attacker: attackerName
  };
  saveState();
  const modal = document.querySelector('#bossAssignModal');
  if (modal) modal.style.display = 'none';
  plan();
  updateDashboard();
  showToast(`🎯 N${node} ➔ ${playerName} (${attackerName})`);
}

function resetBossAssignment(node) {
  if (customState.islandOverrides && customState.islandOverrides[node]) {
    delete customState.islandOverrides[node];
    saveState();
    const modal = document.querySelector('#bossAssignModal');
    if (modal) modal.style.display = 'none';
    plan();
    updateDashboard();
    showToast(t('resetToAuto'));
  }
}

function unassignBossFight(node) {
  if (!customState.islandOverrides) customState.islandOverrides = {};
  customState.islandOverrides[node] = '__none__';
  saveState();
  const modal = document.querySelector('#bossAssignModal');
  if (modal) modal.style.display = 'none';
  plan();
  updateDashboard();
  showToast(t('unassignBoss'));
}

document.querySelector('#closeBossAssignModalBtn')?.addEventListener('click', () => {
  document.querySelector('#bossAssignModal').style.display = 'none';
});
document.querySelector('#cancelBossAssignModalBtn')?.addEventListener('click', () => {
  document.querySelector('#bossAssignModal').style.display = 'none';
});
document.querySelector('#resetBossToAutoBtn')?.addEventListener('click', () => {
  if (activeBossModalNode !== null) resetBossAssignment(activeBossModalNode);
});
document.querySelector('#unassignBossBtn')?.addEventListener('click', () => {
  if (activeBossModalNode !== null) unassignBossFight(activeBossModalNode);
});

// ─── MAIN PLAN ───
let filterUncoveredOnly = false;

function plan() {
  const areas = getAreas();
  let routesList = areas.routes;
  if (filterUncoveredOnly) {
    routesList = areas.routes.filter(r => {
      const nodes = getPlayerNodes(r.id);
      const vars = generateVariations(nodes);
      const team = getActiveTeam(r.id, vars);
      const sc = getSlotCount();
      const baseSlots = Array.from({ length: sc }, (_, i) => team[i] || null);
      const assigned = assignFights(nodes, baseSlots);
      return assigned.some(a => !a.covered && a.defender);
    });
  }

  const bossMaps = computeBossAssignments();
  let rh = routesList.map(r => renderRouteCardInPlan(r, bossMaps)).join('');
  if (currentMap === 'STANDARD') {
    const uncNodes = getUncoveredPathNodes();
    if (!filterUncoveredOnly || uncNodes.length > 0) {
      rh += renderReserveCardInPlan(bossMaps);
    }
  }

  const { islandsHtml, bossHtml } = evaluateBossRecommendations(filterUncoveredOnly, bossMaps);

  if (filterUncoveredOnly && !routesList.length && !islandsHtml && !bossHtml) {
    rh = `<div class="stat-detail" style="grid-column:1/-1; padding:40px 20px; text-align:center; font-size:14px; color:var(--accent); font-weight:700;">🎉 ${t('allFightsCovered')}</div>`;
  }

  const c = document.querySelector('#planOutput');
  c.className = 'plan-grid';
  c.innerHTML = rh + islandsHtml + bossHtml;
  document.querySelector('#coverage').textContent = `${getAllMapNodes().filter(n => data[n]?.defender).length}/${getAllMapNodes().length} ${t('assignedTotal')}`;
  document.querySelector('#coverage').textContent = `${getAllMapNodes().filter(n => data[n]?.defender).length}/${getAllMapNodes().length} ${t('assignedTotal')}`;

  // Variation buttons
  c.querySelectorAll('.var-btn[data-var]').forEach(btn => {
    btn.onclick = () => {
      delete customState.customTeams[btn.dataset.route];
      customState.selectedVariations[btn.dataset.route] = parseInt(btn.dataset.var);
      saveState();
      plan();
      updateDashboard();
    };
  });

  c.querySelectorAll('.reset-route-btn').forEach(btn => {
    btn.onclick = () => {
      delete customState.customTeams[btn.dataset.route];
      customState.selectedVariations[btn.dataset.route] = 0;
      saveState();
      plan();
      updateDashboard();
    };
  });

  // Section select dropdowns in flexible mode
  c.querySelectorAll('.select-s1').forEach(sel => {
    sel.onchange = () => {
      const rId = sel.dataset.route;
      if (!customState.pathSections[rId]) customState.pathSections[rId] = { s1: parseInt(rId, 10), s2: parseInt(rId, 10) };
      customState.pathSections[rId].s1 = parseInt(sel.value, 10);
      saveState();
      plan();
      updateDashboard();
    };
  });
  c.querySelectorAll('.select-s2').forEach(sel => {
    sel.onchange = () => {
      const rId = sel.dataset.route;
      if (!customState.pathSections[rId]) customState.pathSections[rId] = { s1: parseInt(rId, 10), s2: parseInt(rId, 10) };
      customState.pathSections[rId].s2 = parseInt(sel.value, 10);
      saveState();
      plan();
      updateDashboard();
    };
  });

  // CereBro recommendations toggle buttons
  c.querySelectorAll('.btn-toggle-recs').forEach(btn => {
    btn.onclick = () => {
      const n = btn.dataset.node;
      const box = c.querySelector(`#recs-${n}`);
      if (!box) return;
      const isHidden = box.style.display === 'none' || !box.style.display;
      box.style.display = isHidden ? 'block' : 'none';
      btn.innerHTML = isHidden ? t('hideCerebroCounters') : `${t('viewCerebroCounters')} ▾`;
    };
  });

  // Slot click (modify attacker in team slot)
  c.querySelectorAll('.mcoc-slot').forEach(el => {
    el.onclick = () => openSlotPickerModal(el.dataset.route, parseInt(el.dataset.slot));
  });

  // Fight attacker click (manual fight assignment)
  c.querySelectorAll('.fight-attacker-side').forEach(el => {
    el.onclick = e => {
      if (e.target.closest('.remove-fight-btn')) return;
      const node = parseInt(el.dataset.fightNode);
      const routeId = el.dataset.route;
      openFightAssignmentModal(node, routeId);
    };
  });

  // Remove fight assignment button (✕) - sets fight to unassigned without touching slots
  c.querySelectorAll('.remove-fight-btn').forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      const node = parseInt(btn.dataset.fightNode);
      customState.fightOverrides[node] = '__none__';
      saveState();
      plan();
      updateDashboard();
    };
  });

  // Inline player input changes
  c.querySelectorAll('.inline-player-input').forEach(inp => {
    inp.oninput = () => {
      customState.playerNames[inp.dataset.route] = inp.value.trim();
      saveState();
    };
  });

  updateDashboard();
}

// ─── DASHBOARD & PREFIGHT TRACKER ───
function updateDashboard() {
  const allN = getAllMapNodes(), filled = allN.filter(n => data[n]?.defender);
  let covered = 0, risk = [], usage = {};
  const allPrefights = new Set();

  getAreas().routes.forEach(r => {
    const nodes = getPlayerNodes(r.id);
    const vs = generateVariations(nodes), team = getActiveTeam(r.id, vs);
    assignFights(nodes, team).forEach(a => {
      if (data[a.node]?.defender) {
        if (a.covered && a.attacker) {
          covered++;
          usage[a.attacker] = (usage[a.attacker] || 0) + 1;
          if (a.prefights?.length) {
            a.prefights.forEach(pf => allPrefights.add(pf.name));
          }
        } else {
          risk.push(a.node);
        }
      }
    });
  });

  if (currentMap === 'STANDARD') {
    const rTeam = (customState.customTeams['reserve'] || []).filter(Boolean);
    if (rTeam.length && risk.length) {
      const rAssigned = assignFights(risk, rTeam);
      rAssigned.forEach(a => {
        if (a.covered && a.attacker) {
          covered++;
          usage[a.attacker] = (usage[a.attacker] || 0) + 1;
          risk = risk.filter(n => n !== a.node);
        }
      });
    }

    // Also include Mini-Bosses (37..45) & Bosses (46..50) in coverage and risk stats
    const { islandAssignments, bossAssignments } = computeBossAssignments();
    [37, 38, 39, 40, 41, 42, 43, 44, 45].forEach(n => {
      if (!data[n]?.defender) return;
      const a = islandAssignments.get(n);
      if (a && a.attacker) {
        covered++;
        usage[a.attacker] = (usage[a.attacker] || 0) + 1;
      } else {
        risk.push(n);
      }
    });
    [46, 47, 48, 49, 50].forEach(n => {
      if (!data[n]?.defender) return;
      const a = bossAssignments.get(n);
      if (a && a.attacker) {
        covered++;
        usage[a.attacker] = (usage[a.attacker] || 0) + 1;
      } else {
        risk.push(n);
      }
    });
  }

  const pct = filled.length ? Math.round(covered / filled.length * 100) : 0;
  document.querySelector('#dashCoveragePct').textContent = `${pct}%`;
  document.querySelector('#dashCoverageNodes').textContent = `${covered} / ${filled.length}`;
  document.querySelector('#dashRiskCount').textContent = risk.length;
  document.querySelector('#dashRiskDetail').textContent = risk.length
    ? `${t('noCounterNodes')} ${risk.slice(0, 6).map(n => 'N' + n).join(', ')}${risk.length > 6 ? '…' : ''}`
    : (filled.length ? t('allFightsCovered') : t('noDefendersYet'));

  const top = Object.entries(usage).sort((a, b) => b[1] - a[1]);
  const tb = document.querySelector('#dashTopAttacker');
  if (top.length) {
    const [n, c] = top[0], ch = findChampion(n);
    tb.innerHTML = `
      <img src="${ch?.image || ''}" style="width:28px;height:28px;border-radius:50%;border:1px solid var(--line);object-fit:cover;" alt=""/>
      <div>
        <strong style="display:block;font-size:12px;color:var(--ink);">${n}</strong>
        <span class="stat-detail" style="margin:0;">${c} ${c === 1 ? t('fightsResolved') : t('fightsResolvedPl')}</span>
      </div>`;
  } else {
    tb.innerHTML = `<span class="stat-detail">${t('assignBossFirst')}</span>`;
  }

  // Display prefights needed across the entire war
  const pfItem = document.querySelector('#dashPrefightsItem');
  const pfList = document.querySelector('#dashPrefightsList');
  if (allPrefights.size > 0 && pfItem && pfList) {
    pfList.textContent = Array.from(allPrefights).join(', ');
    pfItem.style.display = 'flex';
  } else if (pfItem) {
    pfItem.style.display = 'none';
  }
}

// ─── EXPORT TEXT (OPTIMIZED FOR DISCORD MARKDOWN & 2000-CHAR LIMIT) ───
function generateExportBlocks() {
  const mapTitle = currentMap === 'BIG_THING' ? t('exportMapBt') : t('exportMapStd');
  const isFlex = (currentMap === 'STANDARD' && customState.assignmentMode === 'flexible');
  const allMap = getAllMapNodes();
  const defsOnMap = allMap.filter(n => data[n]?.defender).length;
  const strategyLabel = isFlex ? `🔀 **${t('exportModeFlex')}**` : `📌 **${t('exportModeFixed')}**`;

  const blocks = [];
  blocks.push([
    `## ⚔️ ${t('exportTitle')} · ${mapTitle}`,
    `📊 **${defsOnMap}/${allMap.length}** ${t('exportNodes')} · ${strategyLabel}`
  ].join('\n'));

  const areas = getAreas();

  areas.routes.forEach(r => {
    const pn = getPlayerName(r.id);
    const nodes = getPlayerNodes(r.id);
    const vs = generateVariations(nodes);
    const sc = getSlotCount();
    const active = getActiveTeam(r.id, vs);
    const baseSlots = Array.from({ length: sc }, (_, i) => active[i] || null);
    const assigned = assignFights(nodes, baseSlots);
    const { filled, prefightFor } = fillPrefightSlots(baseSlots, assigned);
    const teamStr = filled.map((tName, i) => tName
      ? `${CLASS_EMOJIS[findChampion(tName)?.class] || '⚡'} **${tName}**${prefightFor[i] && !baseSlots[i] ? ' 🔄' : ''}`
      : null).filter(Boolean).join(' · ') || `*${t('exportNoTeam')}*`;

    const displayPlayer = pn || `${t('invocadorLabel')} ${r.id}`;
    const header = isFlex
      ? `### 👤 ${displayPlayer}`
      : `### 📍 ${t('routeLabel')} ${r.id} · ${displayPlayer}`;

    const pLines = [header];
    pLines.push(`> 🛡️ **${t('exportTeam')}:** ${teamStr}`);
    if (currentMap === 'STANDARD' && nodes.length === 4) {
      pLines.push(`> 🗺️ **${t('exportSections')}:** \`S1: N${nodes[0]}, N${nodes[1]}\` · \`S2: N${nodes[2]}, N${nodes[3]}\``);
    }

    assigned.forEach(a => {
      if (a.defender) {
        const pf = a.prefights?.length ? ` · 🔄 *${a.prefights.map(p => p.name).join(', ')}*` : '';
        const cUrl = a.attacker ? getCerebroUrl(a.node, a.defender, a.attacker) : getCerebroUrl(a.node, a.defender);
        if (a.covered && a.attacker) {
          pLines.push(`- **N${a.node}** ${a.defender} ➔ **${a.attacker}**${pf} · [🎥 CereBro](<${cUrl}>)`);
        } else {
          pLines.push(`- ⚠️ **N${a.node}** ${a.defender} ➔ *${t('exportNoAttacker')}* · [🎥 CereBro](<${cUrl}>)`);
        }
      }
    });

    blocks.push(pLines.join('\n'));
  });

  // 10th player (Reserve)
  if (currentMap === 'STANDARD') {
    const resName = getPlayerName('reserve');
    const resTeam = (customState.customTeams['reserve'] || []).filter(Boolean);
    const uncNodes = getUncoveredPathNodes();
    if (resTeam.length > 0 || uncNodes.length > 0) {
      const resTeamStr = resTeam.map(tName => `${CLASS_EMOJIS[findChampion(tName)?.class] || '⚡'} **${tName}**`).join(' · ') || `*${t('exportNoTeam')}*`;
      const rLines = [
        `### 🛡️ ${t('reservePlayer')} · ${resName}`,
        `> 🛡️ **${t('exportTeam')}:** ${resTeamStr}`
      ];
      if (uncNodes.length > 0 && resTeam.length > 0) {
        const resAssigned = assignFights(uncNodes, resTeam);
        const coveredByRes = resAssigned.filter(a => a.defender && a.covered && a.attacker);
        if (coveredByRes.length) {
          rLines.push(`> ⚔️ **${t('exportReserveSupport')}:**`);
          coveredByRes.forEach(a => {
            const cUrl = getCerebroUrl(a.node, a.defender, a.attacker);
            rLines.push(`- **N${a.node}** ${a.defender} ➔ **${a.attacker}** · [🎥 CereBro](<${cUrl}>)`);
          });
        }
      }
      blocks.push(rLines.join('\n'));
    }
  }

  // Mini-bosses & Islands (37..45) + Sub-bosses & Boss (46..50) using shared computeBossAssignments()
  if (currentMap === 'STANDARD') {
    const { islandAssignments, bossAssignments } = computeBossAssignments();

    // Mini-bosses & Islands (37..45)
    const islandLines = [`## ⚡ ${t('miniBossSectionExport')} (N37–N45)`];
    const islandNodes = [37, 38, 39, 40, 41, 42, 43, 44, 45];
    let hasAnyIslandDef = false;

    islandNodes.forEach(n => {
      const f = getFightData(n);
      if (!f.defender) return;
      hasAnyIslandDef = true;
      const assigned = islandAssignments.get(n);
      if (assigned && assigned.attacker) {
        const cUrl = getCerebroUrl(n, f.defender, assigned.attacker);
        islandLines.push(`- 🎯 **N${n}** ${f.defender} ➔ **${assigned.attacker}** (${assigned.player}) · [🎥 CereBro](<${cUrl}>)`);
      } else {
        const cUrl = getCerebroUrl(n, f.defender);
        islandLines.push(`- ⚠️ **N${n}** ${f.defender} ➔ *${t('exportUnassigned')}* · [🎥 CereBro](<${cUrl}>)`);
      }
    });
    if (!hasAnyIslandDef) islandLines.push(`> *${t('exportNoIslandDefs')}*`);
    blocks.push(islandLines.join('\n'));

    // Boss & Sub-bosses (46..50)
    const bossLines = [`## 💀 ${t('bossSectionExport')} (N46–N50)`];
    const bossNodes = [46, 47, 48, 49, 50];
    const bossNodeNames = {
      46: t('exportBossLeftShort'),
      47: t('exportBossRightShort'),
      48: t('exportSubBoss1'),
      49: t('exportSubBoss2'),
      50: `👑 ${t('exportFinalBoss')}`
    };

    let hasAnyBossDef = false;
    bossNodes.forEach(n => {
      const f = getFightData(n);
      if (!f.defender) return;
      hasAnyBossDef = true;
      const bLabel = bossNodeNames[n] || `N${n}`;
      const assigned = bossAssignments.get(n);
      if (assigned && assigned.attacker) {
        const cUrl = getCerebroUrl(n, f.defender, assigned.attacker);
        bossLines.push(`- 🎯 **N${n}** *(${bLabel})* ${f.defender} ➔ **${assigned.attacker}** (${assigned.player}) · [🎥 CereBro](<${cUrl}>)`);
      } else {
        const cUrl = getCerebroUrl(n, f.defender);
        bossLines.push(`- ⚠️ **N${n}** *(${bLabel})* ${f.defender} ➔ *${t('exportUnassigned')}* · [🎥 CereBro](<${cUrl}>)`);
      }
    });
    if (!hasAnyBossDef) bossLines.push(`> *${t('exportNoBossDefs')}*`);
    blocks.push(bossLines.join('\n'));
  }

  blocks.push(`-# ⚔️ ${t('generatedBy')} · [CereBro](<https://cerebro-bot.com>)`);
  return blocks;
}

function generateDiscordExportChunks(maxLen = 1900) {
  const blocks = generateExportBlocks();
  const chunks = [];
  let current = '';

  const flush = () => {
    if (current.trim()) chunks.push(current.trim());
    current = '';
  };

  blocks.forEach(block => {
    if (block.length > maxLen) {
      flush();
      const lines = block.split('\n');
      let part = '';
      lines.forEach(line => {
        if (part && (part.length + 1 + line.length) > maxLen) {
          chunks.push(part);
          part = line;
        } else {
          part = part ? `${part}\n${line}` : line;
        }
      });
      if (part) current = part;
      return;
    }

    if (!current) {
      current = block;
    } else if (current.length + 2 + block.length <= maxLen) {
      current = `${current}\n\n${block}`;
    } else {
      flush();
      current = block;
    }
  });
  flush();
  return chunks;
}

function generateExportText() {
  return generateExportBlocks().join('\n\n');
}

let currentExportChunks = [];
let currentExportFullText = '';

function renderExportChunksUI() {
  const bar = document.querySelector('#discordChunksBar');
  const ta = document.querySelector('#exportTextarea');
  if (!bar || !ta) return;

  currentExportChunks = generateDiscordExportChunks(1900);
  currentExportFullText = generateExportText();

  if (currentExportChunks.length <= 1) {
    ta.value = currentExportFullText;
    bar.style.display = 'flex';
    bar.innerHTML = `
      <div class="discord-chunks-info">
        <span>✅ ${t('discordSingleMsg')}</span>
        <span class="discord-chunk-count">${currentExportFullText.length} / 2,000</span>
      </div>`;
    return;
  }

  ta.value = currentExportChunks[0];
  bar.style.display = 'flex';
  const partBtns = currentExportChunks.map((ch, idx) => `
    <button type="button" class="discord-chunk-btn ${idx === 0 ? 'active' : ''}" data-chunk-idx="${idx}">
      📋 ${t('discordPart')} ${idx + 1}/${currentExportChunks.length}
      <span class="discord-chunk-count">(${ch.length})</span>
    </button>`).join('');

  bar.innerHTML = `
    <div class="discord-chunks-info">
      <span>💬 ${t('discordSplitInfo')}</span>
    </div>
    <div class="discord-chunks-btns">
      ${partBtns}
      <button type="button" class="discord-chunk-btn" data-chunk-idx="all">📄 ${t('discordViewAll')}</button>
    </div>`;

  bar.querySelectorAll('.discord-chunk-btn').forEach(btn => {
    btn.onclick = () => {
      bar.querySelectorAll('.discord-chunk-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = btn.dataset.chunkIdx;
      const textToUse = idx === 'all' ? currentExportFullText : currentExportChunks[parseInt(idx, 10)];
      ta.value = textToUse;
      if (idx !== 'all' && navigator.clipboard) {
        navigator.clipboard.writeText(textToUse).then(() => {
          btn.classList.add('copied');
          const m = document.querySelector('#copySuccessMsg');
          if (m) {
            m.textContent = `${t('discordPart')} ${parseInt(idx, 10) + 1} · ${t('copied')}`;
            m.style.display = 'inline';
            setTimeout(() => { m.style.display = 'none'; m.textContent = t('copied'); }, 2200);
          }
        }).catch(() => {});
      }
    };
  });
}

document.querySelector('#exportButton').onclick = () => {
  renderExportChunksUI();
  document.querySelector('#exportModal').style.display = 'flex';
};
document.querySelector('#closeExportModalBtn').onclick =
document.querySelector('#closeExportBtn').onclick = () => {
  document.querySelector('#exportModal').style.display = 'none';
};
document.querySelector('#copyExportBtn').onclick = () => {
  navigator.clipboard.writeText(document.querySelector('#exportTextarea').value).then(() => {
    const m = document.querySelector('#copySuccessMsg');
    m.textContent = t('copied');
    m.style.display = 'inline';
    setTimeout(() => { m.style.display = 'none'; }, 2500);
  });
};

// ─── IMAGE EXPORT (BASE64 CONVERSION TO PREVENT BLACK IMAGES) ───
const b64Cache = {};

async function fetchAsBase64(url) {
  if (!url) return '';
  if (url.startsWith('data:')) return url;
  if (b64Cache[url]) return b64Cache[url];

  try {
    const proxyUrl = `/api/img?url=${encodeURIComponent(url)}`;
    const res = await fetch(proxyUrl, { credentials: 'omit' });
    const blob = await res.blob();
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => {
        b64Cache[url] = reader.result;
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  } catch {
    return url;
  }
}

document.querySelector('#exportImageBtn').onclick = async () => {
  if (!window.html2canvas) {
    await new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  const btn = document.querySelector('#exportImageBtn');
  btn.textContent = '⏳ Exportando...';
  btn.disabled = true;

  const planSec = document.querySelector('#planViewSection');
  const prevDisplay = planSec.style.display;
  planSec.style.display = 'block';

  // 1. Convert all portraits in #planOutput to Base64 Data URLs so canvas is never tainted
  const imgs = Array.from(document.querySelectorAll('#planOutput img'));
  const origSrcs = imgs.map(img => img.src);

  const b64Promises = imgs.map(async img => {
    if (img.src && !img.src.startsWith('data:')) {
      const b64 = await fetchAsBase64(img.src);
      if (b64 && b64.startsWith('data:')) {
        img.src = b64;
      }
    }
  });

  await Promise.all(b64Promises);
  // Wait a tick for browser paint
  await new Promise(r => setTimeout(r, 200));

  try {
    const canvas = await window.html2canvas(document.querySelector('#planOutput'), {
      backgroundColor: '#0b0f1d',
      scale: 1.5,
      useCORS: true,
      allowTaint: true,
      logging: false
    });

    const link = document.createElement('a');
    link.download = `mcoc-war-plan-${currentMap.toLowerCase()}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (e) {
    alert('Error al exportar imagen: ' + e.message);
  } finally {
    // Restore original URLs
    imgs.forEach((img, i) => { if (origSrcs[i]) img.src = origSrcs[i]; });
    btn.textContent = t('exportImage');
    btn.disabled = false;
    planSec.style.display = prevDisplay;
  }
};

// ─── PROFILES MANAGEMENT ───
const PK = 'war-planner-saved-profiles';
function getSP() { return JSON.parse(localStorage.getItem(PK) || '{}'); }

function renderPL() {
  const pr = getSP(), el = document.querySelector('#profilesList'), ks = Object.keys(pr);
  if (!ks.length) { el.innerHTML = `<p class="stat-detail">${t('noProfiles')}</p>`; return; }
  el.innerHTML = ks.map(k => `
    <div class="profile-item">
      <div>
        <strong style="color:var(--ink);">${k}</strong>
        <span class="stat-detail">${pr[k].date || ''} · ${pr[k].map || 'STD'}</span>
      </div>
      <div class="profile-actions">
        <button class="primary" style="padding:4px 10px;font-size:11px;" data-lp="${k}">${t('load')}</button>
        <button class="ghost-btn small" data-dp="${k}">${t('delete')}</button>
      </div>
    </div>`).join('');

  el.querySelectorAll('[data-lp]').forEach(btn => {
    btn.onclick = () => {
      const p = getSP()[btn.dataset.lp];
      if (!p) return;
      if (p.map) {
        currentMap = p.map;
        localStorage.setItem('war-planner-map', p.map);
        if (currentMap === 'BIG_THING') {
          document.querySelector('#mapBigThingBtn').classList.add('active');
          document.querySelector('#mapStandardBtn').classList.remove('active');
        } else {
          document.querySelector('#mapStandardBtn').classList.add('active');
          document.querySelector('#mapBigThingBtn').classList.remove('active');
        }
      }
      data = p.data ? Object.assign(loadData(), p.data) : loadData();
      if (p.customState) Object.assign(customState, p.customState);
      saveState();
      updateToolbarTabsForMap();
      renderBoard();
      plan();
      updateDashboard();
      document.querySelector('#profileModal').style.display = 'none';
      switchMainTab('plan');
    };
  });

  el.querySelectorAll('[data-dp]').forEach(btn => {
    btn.onclick = () => {
      const pr = getSP();
      delete pr[btn.dataset.dp];
      localStorage.setItem(PK, JSON.stringify(pr));
      renderPL();
    };
  });
}

document.querySelector('#profileButton').onclick = () => { renderPL(); document.querySelector('#profileModal').style.display = 'flex'; };
document.querySelector('#closeProfileModalBtn').onclick =
document.querySelector('#closeProfileBtn').onclick = () => { document.querySelector('#profileModal').style.display = 'none'; };

document.querySelector('#saveCurrentProfileBtn').onclick = () => {
  const n = document.querySelector('#profileNameInput').value.trim();
  if (!n) return;
  const pr = getSP();
  pr[n] = {
    date: new Date().toLocaleDateString(),
    map: currentMap,
    data: JSON.parse(JSON.stringify(data)),
    customState: JSON.parse(JSON.stringify(customState))
  };
  localStorage.setItem(PK, JSON.stringify(pr));
  document.querySelector('#profileNameInput').value = '';
  renderPL();
};

// ─── DEMO LOADER ───
const DEMO_STD = {
  1:'Mojo', 2:'Bishop', 3:'Red Skull', 4:'Domino', 5:'Attuma',
  6:'Spider-Slayer (J. Jonah Jameson)', 7:'Galan', 8:'Peni Parker', 9:'Absorbing Man',
  10:'Mister Sinister', 11:'Nick Fury', 12:'Enchantress', 13:'Punisher', 14:'Sasquatch',
  15:'Captain Britain', 16:'Onslaught', 17:'Bullseye', 18:'Bishop',
  19:'Spider-Ham', 20:'High Evolutionary', 21:'Kindred',
  22:'Spider-Woman (Jessica Drew)', 23:'Rhino', 24:'Lumatrix', 25:'Korg',
  26:'Lizard', 27:'Thanos (Deathless)', 28:'Black Tarantula',
  29:'Spider-Man (Pavitr Prabhakar)', 30:'Photon', 31:'Dust', 32:'The Destroyer',
  33:'Rintrah', 34:'Black Panther (Civil War)', 35:'Galan', 36:'Solvarch',
  37:'Sersi', 38:'The Serpent', 39:'Hulkling', 40:'Knull', 41:'Baron Zemo',
  42:'Knull', 43:'Yelena Belova', 44:'Attuma', 45:'Kindred',
  46:'The Serpent', 47:'Jean Grey', 48:'Bullseye', 49:'Sandman', 50:'Maestro'
};

const DEMO_BT = {
  1:'Mojo', 2:'Mister Sinister', 3:'Red Skull', 4:'Enchantress', 5:'Knull',
  6:'Domino', 7:'Nick Fury', 8:'Baron Zemo', 9:'Maestro', 10:'Dust'
};

async function loadDemoWar() {
  const btn = document.querySelector('#demoButton');
  const originalText = t('loadExample');
  btn.disabled = true;

  const demo = currentMap === 'BIG_THING' ? DEMO_BT : DEMO_STD;
  const sp = currentMap === 'BIG_THING'
    ? ['Mirki', 'Carlos', 'Valen', 'Titan', 'Ghost99', 'Phoenix', 'Logan', 'Valk', 'Shadow', 'Rex']
    : ['Mirki', 'Carlos', 'Valen', 'Titan', 'Ghost99', 'Phoenix', 'Logan', 'Valk', 'Shadow'];

  getAllMapNodes().forEach(i => { data[i] = { defender: '', counters: [], note: '' }; });
  Object.entries(demo).forEach(([n, d]) => { data[parseInt(n)].defender = d; });

  getAreas().routes.forEach((r, i) => {
    if (sp[i]) customState.playerNames[r.id] = `@${sp[i]}`;
  });

  customState.fightOverrides = {};

  Object.keys(demo).forEach(n => loadingNodes.add(parseInt(n, 10)));
  renderBoard();
  plan();
  switchMainTab('plan');

  const entries = Object.entries(demo);
  const total = entries.length;
  let completed = 0;

  // Populate any locally cached nodes immediately (0ms)
  const pending = [];
  entries.forEach(([ns, d]) => {
    const n = parseInt(ns, 10);
    const cached = getCachedCounters(currentMap, n, d);
    if (cached) {
      data[n].counters = cached;
      loadingNodes.delete(n);
      completed++;
    } else {
      pending.push([ns, d]);
    }
  });

  btn.textContent = `${t('loading')} (${completed}/${total})...`;
  if (completed > 0) {
    plan();
    updateDashboard();
  }

  // Worker queue (8 parallel requests: scales horizontally on Vercel CDN + Serverless)
  const CONCURRENCY = 8;
  let cursor = 0;

  async function worker() {
    while (cursor < pending.length) {
      const idx = cursor++;
      const [ns, d] = pending[idx];
      const n = parseInt(ns, 10);
      let success = false;
      for (let attempt = 0; attempt < 2 && !success; attempt++) {
        try {
          const r = await fetch(`/api/counters?node=${n}&defender=${encodeURIComponent(d)}&map=${currentMap}`, { credentials: 'omit' });
          if (r.ok) {
            const j = await r.json();
            if (!j.error && Array.isArray(j)) {
              data[n].counters = j;
              setCachedCounters(currentMap, n, d, j);
              success = true;
            }
          }
        } catch (e) {
          if (attempt === 0) await new Promise(res => setTimeout(res, 250));
        }
      }
      loadingNodes.delete(n);
      completed++;
      btn.textContent = `${t('loading')} (${completed}/${total})...`;
      if (completed % 5 === 0 || completed === total) {
        plan();
        updateDashboard();
      }
    }
  }

  if (pending.length > 0) {
    const workers = Array.from({ length: Math.min(CONCURRENCY, pending.length) }, () => worker());
    await Promise.all(workers);
  }

  loadingNodes.clear();
  saveState();
  renderBoard();
  plan();
  updateDashboard();
  btn.textContent = originalText;
  btn.disabled = false;
}

document.querySelector('#demoButton').onclick = loadDemoWar;

// ─── MAP SEARCH & CLEAR ───
document.querySelector('#clearAllBtn').onclick = () => {
  if (confirm(t('confirmClear'))) {
    getAllMapNodes().forEach(i => { data[i] = { defender: '', counters: [], note: '' }; });
    customState.customTeams = {};
    customState.selectedVariations = {};
    customState.fightOverrides = {};
    saveState();
    renderBoard();
    plan();
    updateDashboard();
  }
};

document.querySelector('#resetAllCustomBtn').onclick = () => {
  customState.customTeams = {};
  customState.selectedVariations = {};
  customState.fightOverrides = {};
  customState.pathSections = {};
  saveState();
  plan();
  updateDashboard();
};

document.querySelector('#quickNodeSearch').oninput = e => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.node-card').forEach(c => {
    if (!q) { c.style.display = ''; return; }
    const n = c.dataset.node, d = (data[n]?.defender || '').toLowerCase();
    c.style.display = (n === q || `node ${n}`.includes(q) || `nodo ${n}`.includes(q) || d.includes(q)) ? '' : 'none';
  });
};

document.querySelectorAll('.tab').forEach(t => {
  t.onclick = () => {
    document.querySelectorAll('.tab, .view').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.querySelector('#' + t.dataset.view).classList.add('active');
  };
});

// ─── FILTER UNCOVERED ONLY BUTTON ───
const filterBtn = document.querySelector('#filterUncoveredBtn');
if (filterBtn) {
  filterBtn.onclick = () => {
    filterUncoveredOnly = !filterUncoveredOnly;
    filterBtn.classList.toggle('active', filterUncoveredOnly);
    plan();
  };
}

// ─── ASSIGNMENT MODE TOGGLES ───
const modeFixedBtn = document.querySelector('#modeFixedBtn');
if (modeFixedBtn) {
  modeFixedBtn.onclick = () => {
    customState.assignmentMode = 'fixed';
    saveState();
    updateAssignmentModeUI();
    plan();
  };
}
const modeFlexibleBtn = document.querySelector('#modeFlexibleBtn');
if (modeFlexibleBtn) {
  modeFlexibleBtn.onclick = () => {
    customState.assignmentMode = 'flexible';
    if (!customState.pathSections || Object.keys(customState.pathSections).length === 0) {
      optimizeFlexibleSections();
    } else {
      saveState();
      updateAssignmentModeUI();
      plan();
    }
  };
}
const optFlexBtn = document.querySelector('#optimizeFlexibleBtn');
if (optFlexBtn) {
  optFlexBtn.onclick = () => {
    optimizeFlexibleSections();
  };
}

// ─── DASHBOARD JUMP TO RISK FIGHTS ───
const riskCard = document.querySelector('#dashRiskCard');
if (riskCard) {
  riskCard.onclick = () => {
    switchMainTab('plan');
    setTimeout(() => {
      const firstUncovered = document.querySelector('.fight-row.uncovered');
      if (firstUncovered) {
        firstUncovered.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstUncovered.classList.add('fight-highlight-pulse');
        setTimeout(() => firstUncovered.classList.remove('fight-highlight-pulse'), 2500);
      }
    }, 100);
  };
}

// ─── MODAL DISMISSAL (ESCAPE KEY & CLICK OUTSIDE) ───
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDefenderPickerModal();
    closeSlotModal();
    document.querySelector('#exportModal').style.display = 'none';
    document.querySelector('#profileModal').style.display = 'none';
    document.querySelector('#networkModal').style.display = 'none';
  }
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      fightPickerNode = null;
    }
  });
});

// ─── AUTHENTICATION (CODE ONLY: THEBOYS · NO EMAIL · CLEAN MAIN SCREEN) ───
async function checkAuthStatus() {
  const token = localStorage.getItem('war_auth_token');
  const gate = document.querySelector('#authGateScreen');
  const lockBtn = document.querySelector('#lockSessionBtn');

  try {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const res = await fetch('/api/auth/status', { headers });
    const data = await res.json();

    if (data.authenticated) {
      if (gate) gate.style.display = 'none';
      if (lockBtn) lockBtn.style.display = 'inline-flex';
      return true;
    }
  } catch (err) {
    if (token) {
      if (gate) gate.style.display = 'none';
      if (lockBtn) lockBtn.style.display = 'inline-flex';
      return true;
    }
  }

  // No autenticado: mostrar pantalla de acceso
  if (gate) gate.style.display = 'flex';
  if (lockBtn) lockBtn.style.display = 'none';
  return false;
}

document.querySelector('#authLoginForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const codeInput = document.querySelector('#authCodeInput');
  const errBanner = document.querySelector('#authErrorMsg');
  const submitBtn = document.querySelector('#authSubmitBtn');

  const code = codeInput?.value.trim() || '';

  if (errBanner) errBanner.style.display = 'none';

  if (!code) {
    if (errBanner) {
      errBanner.textContent = currentLang === 'es' ? '⚠️ Ingresa el código de acceso.' : '⚠️ Please enter the access code.';
      errBanner.style.display = 'block';
    }
    codeInput?.focus();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>⏳...</span>';

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const result = await res.json();

    if (res.ok && result.success && result.token) {
      localStorage.setItem('war_auth_token', result.token);
      const gate = document.querySelector('#authGateScreen');
      const lockBtn = document.querySelector('#lockSessionBtn');
      if (gate) gate.style.display = 'none';
      if (lockBtn) lockBtn.style.display = 'inline-flex';
    } else {
      if (errBanner) {
        errBanner.textContent = currentLang === 'es'
          ? '❌ Código incorrecto. Verifica el código de acceso.'
          : '❌ Invalid code. Check the access code.';
        errBanner.style.display = 'block';
      }
      codeInput?.focus();
    }
  } catch (err) {
    if (errBanner) {
      errBanner.textContent = currentLang === 'es'
        ? '⚠️ No se pudo conectar con el servidor de acceso.'
        : '⚠️ Could not reach the authentication server.';
      errBanner.style.display = 'block';
    }
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<span>${t('authEnterBtn')}</span>`;
  }
});

document.querySelector('#toggleCodeVisibilityBtn')?.addEventListener('click', () => {
  const input = document.querySelector('#authCodeInput');
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
});

document.querySelector('#lockSessionBtn')?.addEventListener('click', async () => {
  const token = localStorage.getItem('war_auth_token');
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch {}
  localStorage.removeItem('war_auth_token');
  const gate = document.querySelector('#authGateScreen');
  const lockBtn = document.querySelector('#lockSessionBtn');
  if (gate) gate.style.display = 'flex';
  if (lockBtn) lockBtn.style.display = 'none';
  const inp = document.querySelector('#authCodeInput');
  if (inp) { inp.value = ''; inp.focus(); }
});

// ─── NETWORK SHARING (LAN & CLOUDFLARE) ───
let currentLanUrl = '', currentCfUrl = '';

async function openNetworkModal() {
  const modal = document.querySelector('#networkModal');
  const lanDisplay = document.querySelector('#lanUrlDisplay');
  const cfDisplay = document.querySelector('#cfUrlDisplay');
  const qrImg = document.querySelector('#lanQrImage');
  const qrLoading = document.querySelector('#lanQrLoading');

  lanDisplay.textContent = 'Consultando...';
  if (cfDisplay) cfDisplay.textContent = 'Consultando túnel...';
  qrImg.style.display = 'none';
  qrLoading.style.display = 'block';
  qrLoading.textContent = 'Generando QR...';
  modal.style.display = 'flex';

  try {
    const res = await fetch('/api/info');
    const d = await res.json();
    currentLanUrl = d.lan_url || `http://${window.location.hostname}:8787`;
    currentCfUrl = d.cloudflare_url || '';

    lanDisplay.textContent = currentLanUrl;
    if (cfDisplay) {
      cfDisplay.textContent = currentCfUrl || 'No iniciado (ejecuta iniciar_cloudflare.bat)';
    }

    const activeUrl = currentCfUrl || currentLanUrl;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(activeUrl)}`;
    qrImg.onload = () => {
      qrLoading.style.display = 'none';
      qrImg.style.display = 'block';
    };
    qrImg.onerror = () => {
      qrLoading.textContent = 'Escanea o ingresa la URL';
    };
    qrImg.src = qrUrl;
  } catch (e) {
    currentLanUrl = `http://${window.location.hostname || 'localhost'}:8787`;
    lanDisplay.textContent = currentLanUrl;
    qrLoading.textContent = 'Usa la dirección en tu navegador';
  }
}

document.querySelector('#networkShareBtn')?.addEventListener('click', openNetworkModal);
document.querySelector('#closeNetworkModalBtn')?.addEventListener('click', () => {
  document.querySelector('#networkModal').style.display = 'none';
});
document.querySelector('#closeNetworkBtn')?.addEventListener('click', () => {
  document.querySelector('#networkModal').style.display = 'none';
});
document.querySelector('#copyLanUrlBtn')?.addEventListener('click', async () => {
  if (!currentLanUrl) return;
  try {
    await navigator.clipboard.writeText(currentLanUrl);
    const msg = document.querySelector('#lanCopySuccessMsg');
    msg.style.display = 'inline';
    setTimeout(() => { msg.style.display = 'none'; }, 2000);
  } catch (err) {
    prompt('Copia esta dirección:', currentLanUrl);
  }
});
document.querySelector('#copyCfUrlBtn')?.addEventListener('click', async () => {
  if (!currentCfUrl) {
    alert('El túnel Cloudflare aún no está iniciado. Ejecuta iniciar_cloudflare.bat para activarlo.');
    return;
  }
  try {
    await navigator.clipboard.writeText(currentCfUrl);
    const msg = document.querySelector('#lanCopySuccessMsg');
    msg.style.display = 'inline';
    setTimeout(() => { msg.style.display = 'none'; }, 2000);
  } catch (err) {
    prompt('Copia este enlace de Cloudflare:', currentCfUrl);
  }
});

// ─── INITIALIZATION ───
async function init() {
  applyLang();
  await checkAuthStatus();

  if (window.location.search.includes('map=BIG_THING')) {
    switchMap('BIG_THING');
  } else if (currentMap === 'BIG_THING') {
    document.querySelector('#mapBigThingBtn').classList.add('active');
    document.querySelector('#mapStandardBtn').classList.remove('active');
  } else {
    document.querySelector('#mapStandardBtn').classList.add('active');
    document.querySelector('#mapBigThingBtn').classList.remove('active');
  }

  document.querySelector('#mapVariantNote').textContent = currentMap === 'BIG_THING' ? LANG[currentLang].bigThingNote : LANG[currentLang].standardNote;
  updateToolbarTabsForMap();

  const CHAMPS_CACHE_KEY = 'war-planner-champs-cache-v1';
  let loadedFromCache = false;
  try {
    const rawCached = JSON.parse(localStorage.getItem(CHAMPS_CACHE_KEY) || 'null');
    if (rawCached && Array.isArray(rawCached.d) && rawCached.d.length > 50) {
      champions = rawCached.d;
      loadedFromCache = (Date.now() - (rawCached.t || 0)) < 24 * 60 * 60 * 1000;
    }
  } catch {}

  if (!loadedFromCache) {
    try {
      const r = await fetch('/api/champions', { credentials: 'omit' });
      const fetched = await r.json();
      if (Array.isArray(fetched) && fetched.length > 0) {
        champions = fetched;
        try { localStorage.setItem(CHAMPS_CACHE_KEY, JSON.stringify({ t: Date.now(), d: fetched })); } catch {}
      }
    } catch {
      if (!champions.length) {
        try {
          const r = await fetch('.cache/champions.json');
          champions = await r.json();
        } catch {}
      }
    }
  }

  applyLang();
  switchMainTab('plan');

  if (window.location.search.includes('demo=1')) loadDemoWar();
  if (window.location.search.includes('lan=1')) openNetworkModal();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

init();
