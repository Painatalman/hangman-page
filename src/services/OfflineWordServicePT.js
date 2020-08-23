const words = [
  'acrobata',
  'bebé',
  'biberão',
  'bosta',
  'cabeleireira',
  'camisa',
  'copo',
  'despassarado',
  'jovem',
  'passarinho',
  'patinagem',
  'pelintra',
  'veneno',
  'vómito',
  'zumbido',
];

const nWords = words.length;

export default class OfflineWordServicePT {
  static async getWord() {
    const index = Math.floor(Math.random * nWords);

    return words[index];
  }
}
