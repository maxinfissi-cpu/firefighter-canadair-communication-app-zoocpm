
export interface OperationalMessage {
  id: string;
  category: string;
  title: string;
  message: string;
  priority: 'normal' | 'high' | 'critical';
}

export const operationalMessages: OperationalMessage[] = [
  // Richieste di passaggio
  {
    id: 'req_pass_1',
    category: 'Richiesta Passaggio',
    title: 'Richiesta autorizzazione passaggio',
    message: 'DOS da Canadair [ID], richiedo autorizzazione ingresso zona operativa per sgancio, passo.',
    priority: 'normal',
  },
  {
    id: 'req_pass_2',
    category: 'Richiesta Passaggio',
    title: 'Richiesta secondo passaggio',
    message: 'DOS da Canadair [ID], primo sgancio effettuato, richiedo autorizzazione secondo passaggio, passo.',
    priority: 'normal',
  },
  {
    id: 'req_pass_3',
    category: 'Richiesta Passaggio',
    title: 'Richiesta ingresso zona operativa',
    message: 'DOS da Canadair [ID], richiedo autorizzazione ingresso zona operativa, quota [QUOTA] piedi, prua [PRUA] gradi, passo.',
    priority: 'normal',
  },
  
  // Autorizzazioni
  {
    id: 'auth_1',
    category: 'Autorizzazione',
    title: 'Autorizzazione rilascio',
    message: 'Canadair [ID] da DOS, AUTORIZZATO sgancio, zona libera, confermo assenza personale in linea di rilascio, passo.',
    priority: 'high',
  },
  {
    id: 'auth_2',
    category: 'Autorizzazione',
    title: 'Autorizzazione negata',
    message: 'Canadair [ID] da DOS, NEGATIVO NEGATIVO, personale in zona sgancio, mantenere circuito di attesa, ulteriori istruzioni seguiranno, passo.',
    priority: 'critical',
  },
  {
    id: 'auth_3',
    category: 'Autorizzazione',
    title: 'Autorizzazione con restrizioni',
    message: 'Canadair [ID] da DOS, AUTORIZZATO sgancio con restrizioni, mantenere quota minima [QUOTA] piedi, evitare settore [SETTORE], confermare, passo.',
    priority: 'high',
  },
  
  // Comunicazioni di circuito
  {
    id: 'circuit_1',
    category: 'Circuito',
    title: 'In circuito',
    message: 'DOS da Canadair [ID], in circuito zona operativa, quota [QUOTA] piedi, pronto per sgancio, passo.',
    priority: 'normal',
  },
  {
    id: 'circuit_2',
    category: 'Circuito',
    title: 'Fuori circuito',
    message: 'DOS da Canadair [ID], fuori circuito, operazioni completate, rientro base, passo.',
    priority: 'normal',
  },
  {
    id: 'circuit_3',
    category: 'Circuito',
    title: 'Ingresso circuito attesa',
    message: 'DOS da Canadair [ID], ingresso circuito di attesa, quota [QUOTA] piedi, in attesa autorizzazione, passo.',
    priority: 'normal',
  },
  
  // Emergenze
  {
    id: 'emerg_1',
    category: 'Emergenza',
    title: 'Emergenza tecnica',
    message: 'DOS da Canadair [ID], EMERGENZA EMERGENZA, avaria tecnica, interrompo operazioni, passo.',
    priority: 'critical',
  },
  {
    id: 'emerg_2',
    category: 'Emergenza',
    title: 'Richiesta rifornimento urgente',
    message: 'DOS da Canadair [ID], carburante minimo, richiedo autorizzazione immediata rifornimento, autonomia residua [MINUTI] minuti, passo.',
    priority: 'high',
  },
  {
    id: 'emerg_3',
    category: 'Emergenza',
    title: 'Mayday - Emergenza grave',
    message: 'MAYDAY MAYDAY MAYDAY, Canadair [ID], avaria grave, richiedo assistenza immediata, posizione [COORDINATE], quota [QUOTA] piedi, passo.',
    priority: 'critical',
  },
  {
    id: 'emerg_4',
    category: 'Emergenza',
    title: 'Pan Pan - Urgenza',
    message: 'PAN PAN PAN PAN PAN PAN, Canadair [ID], situazione di urgenza, richiedo priorità atterraggio, passo.',
    priority: 'critical',
  },
  
  // Sicurezza
  {
    id: 'safety_1',
    category: 'Sicurezza',
    title: 'Stop operazioni aeree',
    message: 'ATTENZIONE ATTENZIONE ATTENZIONE, tutti i mezzi aerei, DOS, STOP OPERAZIONI STOP OPERAZIONI, personale in zona critica, mantenere posizione attuale, passo.',
    priority: 'critical',
  },
  {
    id: 'safety_2',
    category: 'Sicurezza',
    title: 'Ripresa operazioni',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, zona libera confermata, RIPRESA OPERAZIONI RIPRESA OPERAZIONI, autorizzati a procedere, passo.',
    priority: 'high',
  },
  {
    id: 'safety_3',
    category: 'Sicurezza',
    title: 'Uomini in linea di sgancio',
    message: 'ATTENZIONE ATTENZIONE, DOS, personale in linea di rilascio, NON EFFETTUARE SGANCIO, ripeto, NON EFFETTUARE SGANCIO, passo.',
    priority: 'critical',
  },
  {
    id: 'safety_4',
    category: 'Sicurezza',
    title: 'Evacuazione zona',
    message: 'ATTENZIONE ATTENZIONE ATTENZIONE, tutti i mezzi aerei, DOS, EVACUAZIONE IMMEDIATA zona operativa, pericolo imminente, allontanarsi verso [DIREZIONE], confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'safety_5',
    category: 'Sicurezza',
    title: 'Zona sicura confermata',
    message: 'Canadair [ID] da DOS, zona sgancio confermata sicura, assenza personale e ostacoli verificata, AUTORIZZATO procedere, passo.',
    priority: 'high',
  },
  
  // Traffico Operante
  {
    id: 'traffic_1',
    category: 'Traffico Operante',
    title: 'Traffico in zona - Elicottero',
    message: 'Canadair [ID] da DOS, TRAFFICO TRAFFICO, elicottero AIB ore [POSIZIONE], distanza [DISTANZA] miglia nautiche, quota [QUOTA] piedi, confermare visivo, passo.',
    priority: 'high',
  },
  {
    id: 'traffic_2',
    category: 'Traffico Operante',
    title: 'Traffico in zona - Altro Canadair',
    message: 'Canadair [ID] da DOS, TRAFFICO in avvicinamento, Canadair [ID2] in finale per sgancio, mantenere separazione minima, confermare, passo.',
    priority: 'high',
  },
  {
    id: 'traffic_3',
    category: 'Traffico Operante',
    title: 'Conflitto traffico',
    message: 'Canadair [ID] da DOS, ATTENZIONE CONFLITTO TRAFFICO, virare IMMEDIATAMENTE prua [DIREZIONE] gradi, confermare esecuzione manovra, passo.',
    priority: 'critical',
  },
  {
    id: 'traffic_4',
    category: 'Traffico Operante',
    title: 'Separazione traffico',
    message: 'Canadair [ID] da DOS, per separazione traffico mantenere quota [QUOTA] piedi, Canadair [ID2] in sgancio quota [QUOTA2] piedi, confermare, passo.',
    priority: 'high',
  },
  {
    id: 'traffic_5',
    category: 'Traffico Operante',
    title: 'Traffico non identificato',
    message: 'Canadair [ID] da DOS, ATTENZIONE traffico non identificato ore [POSIZIONE], quota stimata [QUOTA] piedi, prestare massima attenzione, comunicare se in visivo, passo.',
    priority: 'critical',
  },
  {
    id: 'traffic_6',
    category: 'Traffico Operante',
    title: 'Sequenza sgancio multiplo',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, sequenza sgancio: primo Canadair [ID1], secondo Canadair [ID2], intervallo temporale [TEMPO] secondi, confermare, passo.',
    priority: 'high',
  },
  {
    id: 'traffic_7',
    category: 'Traffico Operante',
    title: 'Zona congestionata',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, zona operativa congestionata, [NUMERO] mezzi in circuito, massima attenzione e disciplina radio, passo.',
    priority: 'high',
  },
  
  // Ostacoli Aerei
  {
    id: 'obstacle_air_1',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Traliccio',
    message: 'Canadair [ID] da DOS, ATTENZIONE OSTACOLO, traliccio alta tensione coordinate [COORDINATE], elevazione [ALTEZZA] metri sul livello del suolo, evitare settore, confermare visivo, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_2',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Antenna',
    message: 'Canadair [ID] da DOS, ATTENZIONE OSTACOLO, antenna radio ore [POSIZIONE], elevazione [ALTEZZA] metri, mantenere quota minima sicurezza [QUOTA] piedi, confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_3',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Cavi sospesi',
    message: 'Canadair [ID] da DOS, PERICOLO PERICOLO, cavi sospesi attraversano valle coordinate [COORDINATE], elevazione [ALTEZZA] metri, NON transitare sotto quota [QUOTA] piedi, confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_4',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Gru',
    message: 'Canadair [ID] da DOS, ATTENZIONE OSTACOLO, gru da cantiere zona [ZONA], elevazione massima [ALTEZZA] metri, braccio orientato [DIREZIONE] gradi, confermare visivo, passo.',
    priority: 'high',
  },
  {
    id: 'obstacle_air_5',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Alberi alti',
    message: 'Canadair [ID] da DOS, ATTENZIONE, vegetazione alta zona sgancio, alberi fino a [ALTEZZA] metri elevazione, mantenere quota sicurezza minima [QUOTA] piedi, passo.',
    priority: 'high',
  },
  {
    id: 'obstacle_air_6',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Fumo denso',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, colonna fumo denso fino quota [QUOTA] piedi, visibilità zero, evitare settore [SETTORE], confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_7',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Pallone aerostatico',
    message: 'Canadair [ID] da DOS, ATTENZIONE OSTACOLO, pallone aerostatico vincolato coordinate [COORDINATE], quota [QUOTA] piedi, raggio sicurezza [DISTANZA] metri, evitare zona, passo.',
    priority: 'high',
  },
  
  // Ostacoli a Terra
  {
    id: 'obstacle_ground_1',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Veicoli',
    message: 'Canadair [ID] da DOS, ATTENZIONE, veicoli operativi in zona sgancio, autobotti VVF coordinate [COORDINATE], confermare visivo prima rilascio, passo.',
    priority: 'high',
  },
  {
    id: 'obstacle_ground_2',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Edifici',
    message: 'Canadair [ID] da DOS, ATTENZIONE, edifici abitati settore [SETTORE], mantenere distanza minima [DISTANZA] metri, NON sorvolare, confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_3',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Personale',
    message: 'Canadair [ID] da DOS, ATTENZIONE ATTENZIONE, squadre VVF operative zona [ZONA], [NUMERO] operatori dispiegati, NON effettuare sgancio fino conferma sgombero, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_4',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Animali',
    message: 'Canadair [ID] da DOS, ATTENZIONE, presenza animali zona sgancio, gregge coordinate [COORDINATE], attendere allontanamento, ulteriori istruzioni seguiranno, passo.',
    priority: 'high',
  },
  {
    id: 'obstacle_ground_5',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Strada trafficata',
    message: 'Canadair [ID] da DOS, ATTENZIONE, strada provinciale [NUMERO] con traffico veicolare attraversa zona operativa, evitare sgancio su sede stradale, confermare, passo.',
    priority: 'high',
  },
  {
    id: 'obstacle_ground_6',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Ferrovia',
    message: 'Canadair [ID] da DOS, PERICOLO, linea ferroviaria attiva coordinate [COORDINATE], NON effettuare sgancio entro [DISTANZA] metri dalla linea, confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_7',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Deposito carburante',
    message: 'Canadair [ID] da DOS, PERICOLO ESTREMO PERICOLO ESTREMO, deposito carburanti coordinate [COORDINATE], raggio esclusione [DISTANZA] metri, VIETATO avvicinamento, confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_8',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Ospedale',
    message: 'Canadair [ID] da DOS, ATTENZIONE, struttura ospedaliera settore [SETTORE], eliporto attivo, coordinare con traffico sanitario, confermare, passo.',
    priority: 'high',
  },
  
  // Condizioni operative
  {
    id: 'cond_1',
    category: 'Condizioni',
    title: 'Comunicazione vento',
    message: 'Canadair [ID] da DOS, informazioni meteo, vento da [DIREZIONE] gradi intensità [VELOCITÀ] nodi, prestare attenzione, passo.',
    priority: 'high',
  },
  {
    id: 'cond_2',
    category: 'Condizioni',
    title: 'Visibilità ridotta',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, visibilità ridotta per fumo, procedere con massima cautela, passo.',
    priority: 'high',
  },
  {
    id: 'cond_3',
    category: 'Condizioni',
    title: 'Turbolenza',
    message: 'Canadair [ID] da DOS, ATTENZIONE, turbolenza moderata-forte segnalata zona [ZONA] tra quota [QUOTA1] e [QUOTA2] piedi, prestare attenzione, passo.',
    priority: 'high',
  },
  {
    id: 'cond_4',
    category: 'Condizioni',
    title: 'Cambio vento improvviso',
    message: 'ATTENZIONE ATTENZIONE tutti i mezzi aerei, DOS, cambio vento improvviso, nuovo vento da [DIREZIONE] gradi intensità [VELOCITÀ] nodi, rivalutare approccio, confermare, passo.',
    priority: 'critical',
  },
  {
    id: 'cond_5',
    category: 'Condizioni',
    title: 'Condizioni meteo in peggioramento',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, condizioni meteo in rapido peggioramento, temporale in avvicinamento da [DIREZIONE], valutare sospensione operazioni, passo.',
    priority: 'critical',
  },
  
  // Coordinate e zone
  {
    id: 'coord_1',
    category: 'Coordinate',
    title: 'Identificazione zona sgancio',
    message: 'Canadair [ID] da DOS, zona sgancio identificata con pannelli arancioni, coordinate [LAT] [LON], confermare visivo, passo.',
    priority: 'normal',
  },
  {
    id: 'coord_2',
    category: 'Coordinate',
    title: 'Cambio zona operativa',
    message: 'Canadair [ID] da DOS, cambio zona operativa, nuove coordinate [LAT] [LON], confermare ricezione, passo.',
    priority: 'high',
  },
  {
    id: 'coord_3',
    category: 'Coordinate',
    title: 'Definizione corridoio sicurezza',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, corridoio sicurezza stabilito, punto ingresso [COORDINATE1], punto uscita [COORDINATE2], quota [QUOTA] piedi, confermare, passo.',
    priority: 'high',
  },
  {
    id: 'coord_4',
    category: 'Coordinate',
    title: 'Punto di riferimento visivo',
    message: 'Canadair [ID] da DOS, punto riferimento visivo [DESCRIZIONE] coordinate [COORDINATE], utilizzare per orientamento, confermare visivo, passo.',
    priority: 'normal',
  },
  
  // Rifornimento
  {
    id: 'refuel_1',
    category: 'Rifornimento',
    title: 'Autorizzazione rifornimento',
    message: 'Canadair [ID] da DOS, AUTORIZZATO rifornimento, punto rifornimento [LOCATION], passo.',
    priority: 'normal',
  },
  {
    id: 'refuel_2',
    category: 'Rifornimento',
    title: 'Rientro da rifornimento',
    message: 'DOS da Canadair [ID], rifornimento completato, rientro zona operativa, tempo stimato arrivo [TEMPO] minuti, passo.',
    priority: 'normal',
  },
  {
    id: 'refuel_3',
    category: 'Rifornimento',
    title: 'Attesa rifornimento',
    message: 'Canadair [ID] da DOS, punto rifornimento occupato, mantenere circuito attesa quota [QUOTA] piedi, tempo stimato disponibilità [TEMPO] minuti, passo.',
    priority: 'normal',
  },
  
  // Conferme e Verifiche
  {
    id: 'confirm_1',
    category: 'Conferme',
    title: 'Conferma ricezione',
    message: 'Canadair [ID] da DOS, confermare ricezione ultimo messaggio, ripeto: [MESSAGGIO], passo.',
    priority: 'high',
  },
  {
    id: 'confirm_2',
    category: 'Conferme',
    title: 'Verifica posizione',
    message: 'Canadair [ID] da DOS, comunicare posizione attuale e quota, passo.',
    priority: 'normal',
  },
  {
    id: 'confirm_3',
    category: 'Conferme',
    title: 'Conferma visivo ostacoli',
    message: 'Canadair [ID] da DOS, confermare visivo ostacoli segnalati, ripeto: [OSTACOLI], passo.',
    priority: 'high',
  },
  {
    id: 'confirm_4',
    category: 'Conferme',
    title: 'Verifica carburante',
    message: 'Canadair [ID] da DOS, comunicare autonomia residua in minuti di volo, passo.',
    priority: 'normal',
  },
  
  // Fine operazioni
  {
    id: 'end_1',
    category: 'Fine Operazioni',
    title: 'Termine operazioni',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, terminate operazioni spegnimento, AUTORIZZATI rientro basi, passo.',
    priority: 'high',
  },
  {
    id: 'end_2',
    category: 'Fine Operazioni',
    title: 'Debriefing',
    message: 'Canadair [ID] da DOS, operazioni concluse, presentarsi per debriefing presso [LOCATION], passo.',
    priority: 'normal',
  },
  {
    id: 'end_3',
    category: 'Fine Operazioni',
    title: 'Chiusura frequenza',
    message: 'ATTENZIONE tutti i mezzi aerei, DOS, chiusura frequenza operativa, passare frequenza [FREQUENZA] per comunicazioni non operative, passo.',
    priority: 'normal',
  },
];

export const messageCategories = [
  'Tutte',
  'Richiesta Passaggio',
  'Autorizzazione',
  'Circuito',
  'Emergenza',
  'Sicurezza',
  'Traffico Operante',
  'Ostacoli Aerei',
  'Ostacoli a Terra',
  'Condizioni',
  'Coordinate',
  'Rifornimento',
  'Conferme',
  'Fine Operazioni',
];
