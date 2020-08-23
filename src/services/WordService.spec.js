import OfflineWordServicePT from './OfflineWordServicePT';
import WordService from './WordService';
import WordServicePT from './WordServicePT';

describe('WordService getWord', () => {
  it('gets a word online if possible', async () => {
    jest
      .spyOn(OfflineWordServicePT, 'getWord')
      .mockReturnValueOnce('Offline PT word');
    jest.spyOn(WordServicePT, 'getWord').mockReturnValueOnce('PT word');

    const word = await WordService.getWord('pt');

    expect(word).toEqual('PT word');

    jest.restoreAllMocks();
  });

  it('works offline with an alternative', async () => {
    jest
      .spyOn(OfflineWordServicePT, 'getWord')
      .mockReturnValueOnce('Offline PT word');
    jest.spyOn(WordServicePT, 'getWord').mockReturnValueOnce('PT word');
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);

    const word = await WordService.getWord('pt');

    expect(word).toEqual('Offline PT word');

    jest.restoreAllMocks();
  });
});
