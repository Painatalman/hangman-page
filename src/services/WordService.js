import OfflineWordServiceEN from './OfflineWordServiceEN';
import OfflineWordServicePT from './OfflineWordServicePT';
import WordServiceEN from './WordServiceEN';
import WordServicePT from './WordServicePT';

const langServices = {
  pt: WordServicePT,
  en: WordServiceEN,
};

const offlineLangServices = {
  pt: OfflineWordServicePT,
  en: OfflineWordServiceEN,
};

export default class WordService {
  static getServiceFromLang(lang = 'en') {
    const services = window.navigator.onLine
      ? langServices
      : offlineLangServices;

    return services[lang];
  }

  static async getWord(lang) {
    try {
      return await WordService.getServiceFromLang(lang).getWord();
    } catch (e) {
      return offlineLangServices[lang].getWord();
    }
  }
}
