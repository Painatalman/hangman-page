import axios from 'axios';

export default class WordService {
  static async getWord() {
    try {
      const word = await axios.get(
        'https://random-word-api.herokuapp.com/word'
      );
      return word.data[0];
    } catch (e) {
      throw new Error(`Unable to get EN word: ${e.message}`);
    }
  }
}
