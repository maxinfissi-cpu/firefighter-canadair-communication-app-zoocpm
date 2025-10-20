
export interface COAULetter {
  letter: string;
  phonetic: string;
  pronunciation: string;
}

export const coauAlphabet: COAULetter[] = [
  { letter: 'A', phonetic: 'Alfa', pronunciation: 'AL-fah' },
  { letter: 'B', phonetic: 'Bravo', pronunciation: 'BRAH-voh' },
  { letter: 'C', phonetic: 'Charlie', pronunciation: 'CHAR-lee' },
  { letter: 'D', phonetic: 'Delta', pronunciation: 'DELL-tah' },
  { letter: 'E', phonetic: 'Echo', pronunciation: 'ECK-oh' },
  { letter: 'F', phonetic: 'Foxtrot', pronunciation: 'FOKS-trot' },
  { letter: 'G', phonetic: 'Golf', pronunciation: 'GOLF' },
  { letter: 'H', phonetic: 'Hotel', pronunciation: 'hoh-TELL' },
  { letter: 'I', phonetic: 'India', pronunciation: 'IN-dee-ah' },
  { letter: 'J', phonetic: 'Juliett', pronunciation: 'JEW-lee-ett' },
  { letter: 'K', phonetic: 'Kilo', pronunciation: 'KEY-loh' },
  { letter: 'L', phonetic: 'Lima', pronunciation: 'LEE-mah' },
  { letter: 'M', phonetic: 'Mike', pronunciation: 'MIKE' },
  { letter: 'N', phonetic: 'November', pronunciation: 'no-VEM-ber' },
  { letter: 'O', phonetic: 'Oscar', pronunciation: 'OSS-car' },
  { letter: 'P', phonetic: 'Papa', pronunciation: 'pah-PAH' },
  { letter: 'Q', phonetic: 'Quebec', pronunciation: 'keh-BECK' },
  { letter: 'R', phonetic: 'Romeo', pronunciation: 'ROW-me-oh' },
  { letter: 'S', phonetic: 'Sierra', pronunciation: 'see-AIR-rah' },
  { letter: 'T', phonetic: 'Tango', pronunciation: 'TANG-go' },
  { letter: 'U', phonetic: 'Uniform', pronunciation: 'YOU-nee-form' },
  { letter: 'V', phonetic: 'Victor', pronunciation: 'VIK-tah' },
  { letter: 'W', phonetic: 'Whiskey', pronunciation: 'WISS-key' },
  { letter: 'X', phonetic: 'X-ray', pronunciation: 'ECKS-ray' },
  { letter: 'Y', phonetic: 'Yankee', pronunciation: 'YANG-key' },
  { letter: 'Z', phonetic: 'Zulu', pronunciation: 'ZOO-loo' },
];

export const coauNumbers: { [key: string]: string } = {
  '0': 'Zero',
  '1': 'Uno',
  '2': 'Due',
  '3': 'Tre',
  '4': 'Quattro',
  '5': 'Cinque',
  '6': 'Sei',
  '7': 'Sette',
  '8': 'Otto',
  '9': 'Nove',
};

export function translateToCOAU(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(char => {
      if (char === ' ') return ' / ';
      const letter = coauAlphabet.find(l => l.letter === char);
      if (letter) return letter.phonetic;
      const number = coauNumbers[char];
      if (number) return number;
      return char;
    })
    .join(' ');
}
