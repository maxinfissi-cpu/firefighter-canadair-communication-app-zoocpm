
export interface OperationalMessage {
  id: string;
  category: string;
  title: string;
  message: string;
  priority: 'normal' | 'high' | 'critical';
  sender?: 'DOS' | 'CAN';
  phase?: string;
}

export interface CommunicationPhase {
  id: string;
  title: string;
  description: string;
  messages: OperationalMessage[];
}

// Fase 1: Avvicinamento all'incendio
const phase1Messages: OperationalMessage[] = [
  // Contatto radio
  {
    id: 'p1_contact_1',
    category: 'Fase 1: Avvicinamento',
    title: 'Contatto radio iniziale',
    message: 'DOS01 CAN26, come riceve?',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Contatto Radio',
  },
  {
    id: 'p1_contact_2',
    category: 'Fase 1: Avvicinamento',
    title: 'Risposta contatto',
    message: 'CAN26 DOS01, comprensibile, avanti',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Contatto Radio',
  },
  // Posizione aeromobile
  {
    id: 'p1_pos_aircraft_1',
    category: 'Fase 1: Avvicinamento',
    title: 'Comunicazione posizione aeromobile',
    message: 'DOS01 CAN26, proveniente da Ciampino, 4 miglia Sud dell\'incendio in avvicinamento',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Posizione Aeromobile',
  },
  // Posizione DOS
  {
    id: 'p1_pos_dos_1',
    category: 'Fase 1: Avvicinamento',
    title: 'Richiesta posizione DOS',
    message: 'DOS01 CAN26, non in vista, richiediamo vostra posizione',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Posizione DOS',
  },
  {
    id: 'p1_pos_dos_2',
    category: 'Fase 1: Avvicinamento',
    title: 'Comunicazione posizione DOS',
    message: 'CAN26 DOS01, posizione DOS [COORDINATE/DESCRIZIONE]',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Posizione DOS',
  },
  // Traffico partecipante
  {
    id: 'p1_traffic_1',
    category: 'Fase 1: Avvicinamento',
    title: 'Informazione traffico operante',
    message: 'CAN26 DOS01, traffico operante zona alta elicottero regionale tipo L5, nominativo [NOMINATIVO], traffico addizionale S64, nominativo "Orso Bruno"',
    priority: 'high',
    sender: 'CAN',
    phase: 'Traffico Partecipante',
  },
  {
    id: 'p1_traffic_2',
    category: 'Fase 1: Avvicinamento',
    title: 'Conferma traffico in vista',
    message: 'DOS01 CAN26, ricevuto, in vista del traffico',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Traffico Partecipante',
  },
  // Informazioni zona di interesse
  {
    id: 'p1_info_1',
    category: 'Fase 1: Avvicinamento',
    title: 'Richiesta copia informazioni',
    message: 'CAN26 DOS01, riportate pronti a copiare',
    priority: 'high',
    sender: 'CAN',
    phase: 'Informazioni Zona',
  },
  {
    id: 'p1_info_2',
    category: 'Fase 1: Avvicinamento',
    title: 'Conferma pronto a copiare',
    message: 'DOS01 CAN26, pronti',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Informazioni Zona',
  },
  {
    id: 'p1_info_3',
    category: 'Fase 1: Avvicinamento',
    title: 'Ostacoli aerei',
    message: 'CAN26 DOS01, ostacoli aerei: linea elettrificata alta tensione non segnalata, traliccio con ponti radio, teleferica ad est',
    priority: 'critical',
    sender: 'CAN',
    phase: 'Informazioni Zona',
  },
  {
    id: 'p1_info_4',
    category: 'Fase 1: Avvicinamento',
    title: 'Conferma ostacoli aerei',
    message: 'DOS01 CAN26, ricevuto, ostacoli in vista',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Informazioni Zona',
  },
  {
    id: 'p1_info_5',
    category: 'Fase 1: Avvicinamento',
    title: 'Ostacoli a terra',
    message: 'CAN26 DOS01, ostacoli a terra: singola abitazione marrone, a sud delle fiamme',
    priority: 'high',
    sender: 'CAN',
    phase: 'Informazioni Zona',
  },
  {
    id: 'p1_info_6',
    category: 'Fase 1: Avvicinamento',
    title: 'Conferma ostacoli a terra',
    message: 'DOS01 CAN26, ricevuto',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Informazioni Zona',
  },
  {
    id: 'p1_info_7',
    category: 'Fase 1: Avvicinamento',
    title: 'Condizioni meteo e incendio',
    message: 'CAN26 DOS01, vento da sud intensità media, incendio medio con fiamme alte, fumo denso lato monte',
    priority: 'high',
    sender: 'CAN',
    phase: 'Informazioni Zona',
  },
  // Istruzioni avvicinamento
  {
    id: 'p1_approach_1',
    category: 'Fase 1: Avvicinamento',
    title: 'Istruzione attacco simulato',
    message: 'DOS01 CAN26, effettua attacco simulato e procede a rifornirsi sul lago di Barrea',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Istruzioni Avvicinamento',
  },
  {
    id: 'p1_approach_2a',
    category: 'Fase 1: Avvicinamento',
    title: 'Zona occupata - Orbita',
    message: 'CAN26 DOS01, zona occupata, orbitate ad est, attendete istruzioni',
    priority: 'high',
    sender: 'CAN',
    phase: 'Istruzioni Avvicinamento',
  },
  {
    id: 'p1_approach_2b',
    category: 'Fase 1: Avvicinamento',
    title: 'Zona libera - Autorizzazione',
    message: 'CAN26 DOS01, zona libera, effettuate passaggio, richiamate lasciando',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Istruzioni Avvicinamento',
  },
  {
    id: 'p1_approach_3',
    category: 'Fase 1: Avvicinamento',
    title: 'Lasciando la zona',
    message: 'DOS01 CAN26, lasciando la zona',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Istruzioni Avvicinamento',
  },
  {
    id: 'p1_approach_4',
    category: 'Fase 1: Avvicinamento',
    title: 'Contatto ATS',
    message: 'CAN26 DOS01, ricevuto, contattate ente ATS e richiamate al ritorno',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Istruzioni Avvicinamento',
  },
  // Frequenze
  {
    id: 'p1_freq_1',
    category: 'Fase 1: Avvicinamento',
    title: 'Informazione frequenza elicotteri',
    message: 'CAN26 DOS01, gli elicotteri operano sulla frequenza 122.150',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Frequenze',
  },
  {
    id: 'p1_freq_2',
    category: 'Fase 1: Avvicinamento',
    title: 'Richiesta cambio frequenza',
    message: 'DOS01 CAN26, ricevuto, chiediamo di cambiare frequenza 122.150',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Frequenze',
  },
  {
    id: 'p1_freq_3',
    category: 'Fase 1: Avvicinamento',
    title: 'Approvazione cambio frequenza',
    message: 'CAN26 DOS01, cambio frequenza approvato',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Frequenze',
  },
];

// Fase 2: Ritorno con carico d'acqua
const phase2Messages: OperationalMessage[] = [
  {
    id: 'p2_approach_1',
    category: 'Fase 2: Ritorno con Acqua',
    title: 'Avvicinamento con carico',
    message: 'DOS01 CAN26, in avvicinamento da sud, un minuto al lancio',
    priority: 'high',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p2_traffic_1',
    category: 'Fase 2: Ritorno con Acqua',
    title: 'Informazione traffico zona bassa',
    message: 'CAN26 DOS01, ricevuto, traffico operante L5 nella zona bassa',
    priority: 'high',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p2_traffic_2',
    category: 'Fase 2: Ritorno con Acqua',
    title: 'Conferma traffico in vista',
    message: 'DOS01 CAN26, ricevuto, traffico in vista',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p2_confirm_1',
    category: 'Fase 2: Ritorno con Acqua',
    title: 'Conferma ricezione',
    message: 'CAN26 DOS01, ricevuto',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p2_drop_1',
    category: 'Fase 2: Ritorno con Acqua',
    title: 'Lancio effettuato',
    message: 'DOS01 CAN26, lancio effettuato, lascia la zona, chiameremo al rientro',
    priority: 'high',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p2_drop_2',
    category: 'Fase 2: Ritorno con Acqua',
    title: 'Conferma lancio buono',
    message: 'CAN26 DOS01, lancio buono, confermate prelievo a Barrea e stimato al rientro',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p2_return_1',
    category: 'Fase 2: Ritorno con Acqua',
    title: 'Conferma prelievo e stimato',
    message: 'DOS01 CAN26, confermo Barrea, stimato 7 minuti',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Direttive',
  },
];

// Fase 3: Secondo lancio
const phase3Messages: OperationalMessage[] = [
  {
    id: 'p3_approach_1',
    category: 'Fase 3: Secondo Lancio',
    title: 'Avvicinamento secondo lancio',
    message: 'DOS01 CAN26, in avvicinamento da est, 2 minuti al lancio',
    priority: 'high',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p3_instruction_1',
    category: 'Fase 3: Secondo Lancio',
    title: 'Istruzione lancio parte alta',
    message: 'CAN26 DOS01, lanciate parte alta lato monte, negativo utilizzo schiumogeno',
    priority: 'high',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p3_unable_1',
    category: 'Fase 3: Secondo Lancio',
    title: 'Impossibilitati schiumogeno',
    message: 'DOS01 CAN26, impossibilitati, già miscelato',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p3_confirm_1',
    category: 'Fase 3: Secondo Lancio',
    title: 'Conferma ricezione',
    message: 'CAN26 DOS01, ricevuto',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p3_drop_1',
    category: 'Fase 3: Secondo Lancio',
    title: 'Lancio effettuato',
    message: 'DOS01 CAN26, lancio effettuato, lascia la zona',
    priority: 'high',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p3_drop_2',
    category: 'Fase 3: Secondo Lancio',
    title: 'Lancio buono - Anticipare',
    message: 'CAN26 DOS01, lancio buono, anticipare prossimo lancio',
    priority: 'high',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p3_confirm_2',
    category: 'Fase 3: Secondo Lancio',
    title: 'Conferma anticipazione',
    message: 'DOS01 CAN26, ricevuto',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Direttive',
  },
];

// Fase 4: Lanci successivi
const phase4Messages: OperationalMessage[] = [
  {
    id: 'p4_confirm_1',
    category: 'Fase 4: Lanci Successivi',
    title: 'Conferma stesso punto',
    message: 'DOS01 CAN26, confermate stesso punto di prima?',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p4_instruction_1a',
    category: 'Fase 4: Lanci Successivi',
    title: 'Ripetere stessa posizione',
    message: 'CAN26 DOS01, ripetete lancio stessa posizione, più a valle',
    priority: 'high',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p4_instruction_1b',
    category: 'Fase 4: Lanci Successivi',
    title: 'Cambio posizione lancio',
    message: 'CAN26 DOS01, negativo, lanciate in basso lato est, fumo intenso ore 1',
    priority: 'high',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p4_confirm_2',
    category: 'Fase 4: Lanci Successivi',
    title: 'Conferma esecuzione',
    message: 'DOS01 CAN26, eseguirò',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p4_info_1',
    category: 'Fase 4: Lanci Successivi',
    title: 'Informazione distacco rete elettrica',
    message: 'CAN26 DOS01, si informa avvenuto distacco rete elettrica',
    priority: 'high',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p4_confirm_3',
    category: 'Fase 4: Lanci Successivi',
    title: 'Conferma ricezione',
    message: 'DOS01 CAN26, ricevuto',
    priority: 'normal',
    sender: 'DOS',
    phase: 'Direttive',
  },
  {
    id: 'p4_drop_1',
    category: 'Fase 4: Lanci Successivi',
    title: 'Conferma lancio buono',
    message: 'CAN26 DOS01, lancio buono',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p4_holding_1',
    category: 'Fase 4: Lanci Successivi',
    title: 'Attesa ritorno',
    message: 'CAN26 DOS01, in attesa ritorno, 2 elicotteri contengono zona est',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Direttive',
  },
  {
    id: 'p4_confirm_4',
    category: 'Fase 4: Lanci Successivi',
    title: 'Conferma ricezione',
    message: 'CAN26 DOS01, ricevuto',
    priority: 'normal',
    sender: 'CAN',
    phase: 'Direttive',
  },
];

// Messaggi aggiuntivi generici
const genericMessages: OperationalMessage[] = [
  // Richieste di passaggio
  {
    id: 'req_pass_1',
    category: 'Messaggi Standard',
    title: 'Richiesta autorizzazione passaggio',
    message: 'DOS da Canadair [ID], richiedo autorizzazione ingresso zona operativa per sgancio, passo.',
    priority: 'normal',
  },
  {
    id: 'req_pass_2',
    category: 'Messaggi Standard',
    title: 'Richiesta secondo passaggio',
    message: 'DOS da Canadair [ID], primo sgancio effettuato, richiedo autorizzazione secondo passaggio, passo.',
    priority: 'normal',
  },
  
  // Autorizzazioni
  {
    id: 'auth_1',
    category: 'Messaggi Standard',
    title: 'Autorizzazione rilascio',
    message: 'Canadair [ID] da DOS, AUTORIZZATO sgancio, zona libera, confermo assenza personale in linea di rilascio, passo.',
    priority: 'high',
  },
  {
    id: 'auth_2',
    category: 'Messaggi Standard',
    title: 'Autorizzazione negata',
    message: 'Canadair [ID] da DOS, NEGATIVO NEGATIVO, personale in zona sgancio, mantenere circuito di attesa, ulteriori istruzioni seguiranno, passo.',
    priority: 'critical',
  },
  
  // Emergenze
  {
    id: 'emerg_1',
    category: 'Messaggi Standard',
    title: 'Emergenza tecnica',
    message: 'DOS da Canadair [ID], EMERGENZA EMERGENZA, avaria tecnica, interrompo operazioni, passo.',
    priority: 'critical',
  },
  {
    id: 'emerg_2',
    category: 'Messaggi Standard',
    title: 'Mayday',
    message: 'MAYDAY MAYDAY MAYDAY, Canadair [ID], avaria grave, richiedo assistenza immediata, posizione [COORDINATE], quota [QUOTA] piedi, passo.',
    priority: 'critical',
  },
  
  // Sicurezza
  {
    id: 'safety_1',
    category: 'Messaggi Standard',
    title: 'Stop operazioni aeree',
    message: 'ATTENZIONE ATTENZIONE ATTENZIONE, tutti i mezzi aerei, DOS, STOP OPERAZIONI STOP OPERAZIONI, personale in zona critica, mantenere posizione attuale, passo.',
    priority: 'critical',
  },
  {
    id: 'safety_2',
    category: 'Messaggi Standard',
    title: 'Ripresa operazioni',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, zona libera confermata, RIPRESA OPERAZIONI RIPRESA OPERAZIONI, autorizzati a procedere, passo.',
    priority: 'high',
  },
];

export const operationalMessages: OperationalMessage[] = [
  ...phase1Messages,
  ...phase2Messages,
  ...phase3Messages,
  ...phase4Messages,
  ...genericMessages,
];

export const communicationPhases: CommunicationPhase[] = [
  {
    id: 'phase1',
    title: 'Fase 1: Avvicinamento all\'Incendio',
    description: 'Contatto radio iniziale, posizionamento, informazioni su traffico e ostacoli',
    messages: phase1Messages,
  },
  {
    id: 'phase2',
    title: 'Fase 2: Ritorno con Carico d\'Acqua',
    description: 'Primo lancio, conferme e coordinamento traffico',
    messages: phase2Messages,
  },
  {
    id: 'phase3',
    title: 'Fase 3: Secondo Lancio',
    description: 'Secondo approccio con istruzioni specifiche',
    messages: phase3Messages,
  },
  {
    id: 'phase4',
    title: 'Fase 4: Lanci Successivi',
    description: 'Operazioni continue con aggiornamenti situazione',
    messages: phase4Messages,
  },
];

export const messageCategories = [
  'Tutte',
  'Fase 1: Avvicinamento',
  'Fase 2: Ritorno con Acqua',
  'Fase 3: Secondo Lancio',
  'Fase 4: Lanci Successivi',
  'Messaggi Standard',
];
