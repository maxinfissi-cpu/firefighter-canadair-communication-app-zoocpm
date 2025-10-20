
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
];

export const messageCategories = [
  'Tutte',
  'Richiesta Passaggio',
  'Autorizzazione',
  'Circuito',
  'Emergenza',
  'Sicurezza',
  'Condizioni',
  'Coordinate',
  'Rifornimento',
];
