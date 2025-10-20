
export interface ChecklistItem {
  id: string;
  category: 'pre' | 'post';
  text: string;
  critical: boolean;
}

export const safetyChecklist: ChecklistItem[] = [
  // Pre-intervento
  {
    id: 'pre_1',
    category: 'pre',
    text: 'Verifica comunicazioni radio funzionanti',
    critical: true,
  },
  {
    id: 'pre_2',
    category: 'pre',
    text: 'Identificazione zona di sgancio con pannelli',
    critical: true,
  },
  {
    id: 'pre_3',
    category: 'pre',
    text: 'Verifica assenza personale in zona di sgancio',
    critical: true,
  },
  {
    id: 'pre_4',
    category: 'pre',
    text: 'Comunicazione condizioni meteo (vento, visibilità)',
    critical: true,
  },
  {
    id: 'pre_5',
    category: 'pre',
    text: 'Verifica coordinate GPS zona operativa',
    critical: false,
  },
  {
    id: 'pre_6',
    category: 'pre',
    text: 'Briefing con equipaggio Canadair',
    critical: true,
  },
  {
    id: 'pre_7',
    category: 'pre',
    text: 'Verifica vie di fuga per personale a terra',
    critical: true,
  },
  {
    id: 'pre_8',
    category: 'pre',
    text: 'Posizionamento osservatori di sicurezza',
    critical: false,
  },
  
  // Post-intervento
  {
    id: 'post_1',
    category: 'post',
    text: 'Verifica completamento operazioni aeree',
    critical: true,
  },
  {
    id: 'post_2',
    category: 'post',
    text: 'Comunicazione fine operazioni a tutti i mezzi',
    critical: true,
  },
  {
    id: 'post_3',
    category: 'post',
    text: 'Verifica assenza incidenti o emergenze',
    critical: true,
  },
  {
    id: 'post_4',
    category: 'post',
    text: 'Compilazione registro eventi',
    critical: false,
  },
  {
    id: 'post_5',
    category: 'post',
    text: 'Debriefing con equipaggio',
    critical: false,
  },
  {
    id: 'post_6',
    category: 'post',
    text: 'Verifica stato attrezzature di comunicazione',
    critical: false,
  },
  {
    id: 'post_7',
    category: 'post',
    text: 'Archiviazione log comunicazioni',
    critical: false,
  },
];
