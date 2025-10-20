
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
    message: 'DOS, qui Canadair [ID]. Richiedo autorizzazione per passaggio sulla zona di sgancio.',
    priority: 'normal',
  },
  {
    id: 'req_pass_2',
    category: 'Richiesta Passaggio',
    title: 'Richiesta secondo passaggio',
    message: 'DOS, qui Canadair [ID]. Richiedo autorizzazione per secondo passaggio.',
    priority: 'normal',
  },
  {
    id: 'req_pass_3',
    category: 'Richiesta Passaggio',
    title: 'Richiesta ingresso zona operativa',
    message: 'DOS, qui Canadair [ID]. Richiedo autorizzazione ingresso zona operativa. Quota [QUOTA] piedi, prua [PRUA].',
    priority: 'normal',
  },
  
  // Autorizzazioni
  {
    id: 'auth_1',
    category: 'Autorizzazione',
    title: 'Autorizzazione rilascio',
    message: 'Canadair [ID], autorizzato al rilascio. Zona libera, nessun personale in linea di sgancio.',
    priority: 'high',
  },
  {
    id: 'auth_2',
    category: 'Autorizzazione',
    title: 'Autorizzazione negata',
    message: 'Canadair [ID], NEGATIVO. Personale in zona di sgancio. Attendere ulteriori istruzioni.',
    priority: 'critical',
  },
  {
    id: 'auth_3',
    category: 'Autorizzazione',
    title: 'Autorizzazione con restrizioni',
    message: 'Canadair [ID], autorizzato al rilascio con restrizioni. Mantenere quota minima [QUOTA] piedi. Evitare settore [SETTORE].',
    priority: 'high',
  },
  
  // Comunicazioni di circuito
  {
    id: 'circuit_1',
    category: 'Circuito',
    title: 'In circuito',
    message: 'DOS, qui Canadair [ID]. In circuito sulla zona operativa.',
    priority: 'normal',
  },
  {
    id: 'circuit_2',
    category: 'Circuito',
    title: 'Fuori circuito',
    message: 'DOS, qui Canadair [ID]. Fuori circuito. Rientro alla base.',
    priority: 'normal',
  },
  {
    id: 'circuit_3',
    category: 'Circuito',
    title: 'Ingresso circuito attesa',
    message: 'DOS, qui Canadair [ID]. Ingresso circuito di attesa quota [QUOTA] piedi. In attesa autorizzazione.',
    priority: 'normal',
  },
  
  // Emergenze
  {
    id: 'emerg_1',
    category: 'Emergenza',
    title: 'Emergenza tecnica',
    message: 'DOS, qui Canadair [ID]. EMERGENZA. Problema tecnico. Interrompo operazioni.',
    priority: 'critical',
  },
  {
    id: 'emerg_2',
    category: 'Emergenza',
    title: 'Richiesta rifornimento urgente',
    message: 'DOS, qui Canadair [ID]. Carburante basso. Richiedo autorizzazione per rifornimento immediato.',
    priority: 'high',
  },
  {
    id: 'emerg_3',
    category: 'Emergenza',
    title: 'Mayday - Emergenza grave',
    message: 'MAYDAY MAYDAY MAYDAY. Canadair [ID]. Avaria grave. Richiedo assistenza immediata. Posizione [COORDINATE].',
    priority: 'critical',
  },
  {
    id: 'emerg_4',
    category: 'Emergenza',
    title: 'Pan Pan - Urgenza',
    message: 'PAN PAN PAN PAN PAN PAN. Canadair [ID]. Situazione di urgenza. Richiedo priorità atterraggio.',
    priority: 'critical',
  },
  
  // Sicurezza
  {
    id: 'safety_1',
    category: 'Sicurezza',
    title: 'Stop operazioni aeree',
    message: 'ATTENZIONE TUTTI I MEZZI AEREI. STOP OPERAZIONI. Personale in zona critica.',
    priority: 'critical',
  },
  {
    id: 'safety_2',
    category: 'Sicurezza',
    title: 'Ripresa operazioni',
    message: 'ATTENZIONE TUTTI I MEZZI AEREI. Zona libera. Autorizzate operazioni.',
    priority: 'high',
  },
  {
    id: 'safety_3',
    category: 'Sicurezza',
    title: 'Uomini in linea di sgancio',
    message: 'ATTENZIONE. Uomini in linea di sgancio. NON effettuare rilascio.',
    priority: 'critical',
  },
  {
    id: 'safety_4',
    category: 'Sicurezza',
    title: 'Evacuazione zona',
    message: 'ATTENZIONE TUTTI I MEZZI. EVACUAZIONE IMMEDIATA ZONA OPERATIVA. Pericolo imminente. Allontanarsi verso [DIREZIONE].',
    priority: 'critical',
  },
  {
    id: 'safety_5',
    category: 'Sicurezza',
    title: 'Zona sicura confermata',
    message: 'Canadair [ID], zona di sgancio confermata sicura. Nessun personale o ostacoli rilevati. Autorizzato procedere.',
    priority: 'high',
  },
  
  // Traffico Operante
  {
    id: 'traffic_1',
    category: 'Traffico Operante',
    title: 'Traffico in zona - Elicottero',
    message: 'ATTENZIONE Canadair [ID]. Traffico alle ore [POSIZIONE], distanza [DISTANZA] miglia. Elicottero AIB quota [QUOTA] piedi.',
    priority: 'high',
  },
  {
    id: 'traffic_2',
    category: 'Traffico Operante',
    title: 'Traffico in zona - Altro Canadair',
    message: 'ATTENZIONE Canadair [ID]. Traffico in avvicinamento. Canadair [ID2] in finale per sgancio. Mantenere separazione.',
    priority: 'high',
  },
  {
    id: 'traffic_3',
    category: 'Traffico Operante',
    title: 'Conflitto traffico',
    message: 'ATTENZIONE Canadair [ID]. CONFLITTO TRAFFICO. Virare immediatamente a [DIREZIONE]. Confermare manovra.',
    priority: 'critical',
  },
  {
    id: 'traffic_4',
    category: 'Traffico Operante',
    title: 'Separazione traffico',
    message: 'Canadair [ID], mantenere quota [QUOTA] piedi per separazione traffico. Canadair [ID2] in sgancio quota [QUOTA2] piedi.',
    priority: 'high',
  },
  {
    id: 'traffic_5',
    category: 'Traffico Operante',
    title: 'Traffico non identificato',
    message: 'ATTENZIONE Canadair [ID]. Traffico non identificato alle ore [POSIZIONE], quota stimata [QUOTA] piedi. Prestare massima attenzione.',
    priority: 'critical',
  },
  {
    id: 'traffic_6',
    category: 'Traffico Operante',
    title: 'Sequenza sgancio multiplo',
    message: 'ATTENZIONE TUTTI I MEZZI AEREI. Sequenza sgancio: Canadair [ID1] primo, Canadair [ID2] secondo, intervallo [TEMPO] secondi.',
    priority: 'high',
  },
  {
    id: 'traffic_7',
    category: 'Traffico Operante',
    title: 'Zona congestionata',
    message: 'ATTENZIONE. Zona operativa congestionata. [NUMERO] mezzi aerei in circuito. Massima attenzione e disciplina radio.',
    priority: 'high',
  },
  
  // Ostacoli Aerei
  {
    id: 'obstacle_air_1',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Traliccio',
    message: 'ATTENZIONE Canadair [ID]. Ostacolo aereo rilevato. Traliccio alta tensione alle coordinate [COORDINATE], altezza [ALTEZZA] metri. Evitare settore.',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_2',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Antenna',
    message: 'ATTENZIONE Canadair [ID]. Antenna radio alle ore [POSIZIONE], altezza [ALTEZZA] metri. Mantenere quota minima [QUOTA] piedi.',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_3',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Cavi sospesi',
    message: 'PERICOLO. Cavi sospesi attraversano la valle alle coordinate [COORDINATE]. Altezza [ALTEZZA] metri. NON transitare sotto quota [QUOTA] piedi.',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_4',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Gru',
    message: 'ATTENZIONE Canadair [ID]. Gru da cantiere in zona [ZONA], altezza [ALTEZZA] metri. Braccio orientato verso [DIREZIONE].',
    priority: 'high',
  },
  {
    id: 'obstacle_air_5',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Alberi alti',
    message: 'ATTENZIONE. Vegetazione alta in zona sgancio. Alberi fino a [ALTEZZA] metri. Mantenere quota sicurezza minima [QUOTA] piedi.',
    priority: 'high',
  },
  {
    id: 'obstacle_air_6',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Fumo denso',
    message: 'ATTENZIONE TUTTI I MEZZI. Colonna di fumo denso fino a quota [QUOTA] piedi. Visibilità zero. Evitare settore [SETTORE].',
    priority: 'critical',
  },
  {
    id: 'obstacle_air_7',
    category: 'Ostacoli Aerei',
    title: 'Ostacolo aereo - Pallone aerostatico',
    message: 'ATTENZIONE. Pallone aerostatico vincolato alle coordinate [COORDINATE], quota [QUOTA] piedi. Raggio sicurezza [DISTANZA] metri.',
    priority: 'high',
  },
  
  // Ostacoli a Terra
  {
    id: 'obstacle_ground_1',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Veicoli',
    message: 'ATTENZIONE Canadair [ID]. Veicoli operativi in zona sgancio. Autobotti VVF coordinate [COORDINATE]. Confermare visivo.',
    priority: 'high',
  },
  {
    id: 'obstacle_ground_2',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Edifici',
    message: 'ATTENZIONE Canadair [ID]. Edifici abitati nel settore [SETTORE]. Mantenere distanza minima [DISTANZA] metri. NON sorvolare.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_3',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Personale',
    message: 'ATTENZIONE. Squadre VVF operative in zona [ZONA]. [NUMERO] uomini dispiegati. NON effettuare sgancio fino a conferma sgombero.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_4',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Animali',
    message: 'ATTENZIONE Canadair [ID]. Presenza animali in zona sgancio. Gregge ovini coordinate [COORDINATE]. Attendere allontanamento.',
    priority: 'high',
  },
  {
    id: 'obstacle_ground_5',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Strada trafficata',
    message: 'ATTENZIONE Canadair [ID]. Strada provinciale [NUMERO] con traffico veicolare attraversa zona operativa. Evitare sgancio su sede stradale.',
    priority: 'high',
  },
  {
    id: 'obstacle_ground_6',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Ferrovia',
    message: 'PERICOLO. Linea ferroviaria attiva alle coordinate [COORDINATE]. NON effettuare sgancio entro [DISTANZA] metri dalla linea.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_7',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Deposito carburante',
    message: 'PERICOLO ESTREMO. Deposito carburanti alle coordinate [COORDINATE]. Raggio esclusione [DISTANZA] metri. VIETATO avvicinamento.',
    priority: 'critical',
  },
  {
    id: 'obstacle_ground_8',
    category: 'Ostacoli a Terra',
    title: 'Ostacolo a terra - Ospedale',
    message: 'ATTENZIONE Canadair [ID]. Struttura ospedaliera nel settore [SETTORE]. Eliporto attivo. Coordinare con traffico sanitario.',
    priority: 'high',
  },
  
  // Condizioni operative
  {
    id: 'cond_1',
    category: 'Condizioni',
    title: 'Comunicazione vento',
    message: 'Canadair [ID], vento da [DIREZIONE] a [VELOCITÀ] nodi. Prestare attenzione.',
    priority: 'high',
  },
  {
    id: 'cond_2',
    category: 'Condizioni',
    title: 'Visibilità ridotta',
    message: 'ATTENZIONE. Visibilità ridotta per fumo. Procedere con cautela.',
    priority: 'high',
  },
  {
    id: 'cond_3',
    category: 'Condizioni',
    title: 'Turbolenza',
    message: 'ATTENZIONE Canadair [ID]. Turbolenza moderata-forte segnalata in zona [ZONA] tra [QUOTA1] e [QUOTA2] piedi.',
    priority: 'high',
  },
  {
    id: 'cond_4',
    category: 'Condizioni',
    title: 'Cambio vento improvviso',
    message: 'ATTENZIONE TUTTI I MEZZI. Cambio vento improvviso. Nuovo vento da [DIREZIONE] a [VELOCITÀ] nodi. Rivalutare approccio.',
    priority: 'critical',
  },
  {
    id: 'cond_5',
    category: 'Condizioni',
    title: 'Condizioni meteo in peggioramento',
    message: 'ATTENZIONE. Condizioni meteo in rapido peggioramento. Temporale in avvicinamento da [DIREZIONE]. Valutare sospensione operazioni.',
    priority: 'critical',
  },
  
  // Coordinate e zone
  {
    id: 'coord_1',
    category: 'Coordinate',
    title: 'Identificazione zona sgancio',
    message: 'Canadair [ID], zona di sgancio identificata con pannelli arancioni. Coordinate: [LAT] [LON].',
    priority: 'normal',
  },
  {
    id: 'coord_2',
    category: 'Coordinate',
    title: 'Cambio zona operativa',
    message: 'Canadair [ID], cambio zona operativa. Nuove coordinate: [LAT] [LON].',
    priority: 'high',
  },
  {
    id: 'coord_3',
    category: 'Coordinate',
    title: 'Definizione corridoio sicurezza',
    message: 'ATTENZIONE TUTTI I MEZZI. Corridoio di sicurezza stabilito: ingresso [COORDINATE1], uscita [COORDINATE2]. Quota [QUOTA] piedi.',
    priority: 'high',
  },
  {
    id: 'coord_4',
    category: 'Coordinate',
    title: 'Punto di riferimento visivo',
    message: 'Canadair [ID], punto di riferimento visivo: [DESCRIZIONE] alle coordinate [COORDINATE]. Utilizzare per orientamento.',
    priority: 'normal',
  },
  
  // Rifornimento
  {
    id: 'refuel_1',
    category: 'Rifornimento',
    title: 'Autorizzazione rifornimento',
    message: 'Canadair [ID], autorizzato al rifornimento. Punto di rifornimento: [LOCATION].',
    priority: 'normal',
  },
  {
    id: 'refuel_2',
    category: 'Rifornimento',
    title: 'Rientro da rifornimento',
    message: 'DOS, qui Canadair [ID]. Rifornimento completato. Rientro in zona operativa.',
    priority: 'normal',
  },
  {
    id: 'refuel_3',
    category: 'Rifornimento',
    title: 'Attesa rifornimento',
    message: 'Canadair [ID], punto rifornimento occupato. Mantenere circuito di attesa quota [QUOTA] piedi. Tempo stimato [TEMPO] minuti.',
    priority: 'normal',
  },
  
  // Conferme e Verifiche
  {
    id: 'confirm_1',
    category: 'Conferme',
    title: 'Conferma ricezione',
    message: 'Canadair [ID], confermare ricezione ultimo messaggio. Ripeto: [MESSAGGIO].',
    priority: 'high',
  },
  {
    id: 'confirm_2',
    category: 'Conferme',
    title: 'Verifica posizione',
    message: 'Canadair [ID], confermare posizione attuale e quota.',
    priority: 'normal',
  },
  {
    id: 'confirm_3',
    category: 'Conferme',
    title: 'Conferma visivo ostacoli',
    message: 'Canadair [ID], confermare visivo ostacoli segnalati. Ripetere: [OSTACOLI].',
    priority: 'high',
  },
  {
    id: 'confirm_4',
    category: 'Conferme',
    title: 'Verifica carburante',
    message: 'Canadair [ID], comunicare autonomia residua in minuti di volo.',
    priority: 'normal',
  },
  
  // Fine operazioni
  {
    id: 'end_1',
    category: 'Fine Operazioni',
    title: 'Termine operazioni',
    message: 'ATTENZIONE TUTTI I MEZZI AEREI. Terminate operazioni di spegnimento. Autorizzato rientro alle basi.',
    priority: 'high',
  },
  {
    id: 'end_2',
    category: 'Fine Operazioni',
    title: 'Debriefing',
    message: 'Canadair [ID], operazioni concluse. Presentarsi per debriefing presso [LOCATION].',
    priority: 'normal',
  },
  {
    id: 'end_3',
    category: 'Fine Operazioni',
    title: 'Chiusura frequenza',
    message: 'ATTENZIONE. Chiusura frequenza operativa. Passare a frequenza [FREQUENZA] per comunicazioni non operative.',
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
