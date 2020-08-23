const words = [
  'acrobat',
  'baby',
  'blouse',
  'dishonestly',
  'excrement',
  'glass',
  'hairdresser',
  'ladybug',
  'mistress',
  'nocturne',
  'pacifier',
  'smurf',
  'swindler',
  'youngster',
  'zombify',
];

const nWords = words.length;

export default class OfflineWordServiceEN {
  static async getWord() {
    const index = Math.floor(Math.random() * nWords);

    return words[index];
  }
}
