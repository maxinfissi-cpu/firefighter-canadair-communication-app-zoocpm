
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const coauQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Come si pronuncia la lettera "A" nell\'alfabeto COAU?',
    options: ['Alpha', 'Alfa', 'Alpa', 'Alfha'],
    correctAnswer: 1,
    explanation: 'La lettera A si pronuncia "Alfa" nell\'alfabeto fonetico COAU.',
  },
  {
    id: 'q2',
    question: 'Quale parola rappresenta la lettera "C"?',
    options: ['Charlie', 'Chester', 'Chicago', 'Chris'],
    correctAnswer: 0,
    explanation: 'La lettera C è rappresentata dalla parola "Charlie".',
  },
  {
    id: 'q3',
    question: 'Come si traduce "VVF" in alfabeto COAU?',
    options: ['Victor Victor Foxtrot', 'Viper Viper Fox', 'Victor Victor Fox', 'Viper Victor Foxtrot'],
    correctAnswer: 0,
    explanation: 'VVF si traduce come "Victor Victor Foxtrot".',
  },
  {
    id: 'q4',
    question: 'Quale lettera è rappresentata da "Whiskey"?',
    options: ['V', 'W', 'X', 'Y'],
    correctAnswer: 1,
    explanation: 'La parola "Whiskey" rappresenta la lettera W.',
  },
  {
    id: 'q5',
    question: 'Come si pronuncia "Juliett"?',
    options: ['JU-lee-et', 'JEW-lee-ett', 'ju-LI-et', 'JU-li-et'],
    correctAnswer: 1,
    explanation: 'Juliett si pronuncia "JEW-lee-ett".',
  },
  {
    id: 'q6',
    question: 'Quale parola rappresenta la lettera "N"?',
    options: ['Nancy', 'November', 'Neptune', 'Nickel'],
    correctAnswer: 1,
    explanation: 'La lettera N è rappresentata dalla parola "November".',
  },
  {
    id: 'q7',
    question: 'Come si traduce "DOS" in alfabeto COAU?',
    options: ['Delta Oscar Sierra', 'Dog Oscar Sam', 'Delta Oscar Sam', 'Dog Oscar Sierra'],
    correctAnswer: 0,
    explanation: 'DOS si traduce come "Delta Oscar Sierra".',
  },
  {
    id: 'q8',
    question: 'Quale lettera è rappresentata da "Zulu"?',
    options: ['X', 'Y', 'Z', 'W'],
    correctAnswer: 2,
    explanation: 'La parola "Zulu" rappresenta la lettera Z.',
  },
  {
    id: 'q9',
    question: 'Come si pronuncia "Quebec"?',
    options: ['kwe-BEC', 'KE-bec', 'keh-BECK', 'QUE-bec'],
    correctAnswer: 2,
    explanation: 'Quebec si pronuncia "keh-BECK".',
  },
  {
    id: 'q10',
    question: 'Quale parola rappresenta la lettera "M"?',
    options: ['Mary', 'Mike', 'Metro', 'Mark'],
    correctAnswer: 1,
    explanation: 'La lettera M è rappresentata dalla parola "Mike".',
  },
];
