import axios from 'axios';

export default class WordService {
  static async getWord() {
    try {
      const {
        data: { word },
      } = await axios.get('https://api.dicionario-aberto.net/random');
      return word;
    } catch ({ message }) {
      throw new Error(`
        Unable to get EN word:
        -> ${message}
      `);
    }
  }
}
