import getRandomItem from './getRandomItem';

describe('getRandomItem', () => {
  it('may return the last item item', () => {
    // SHAME: tests implementation
    const actualRandom = Math.random;
    // Math.round never returns 1
    const mockRandomToReturnListLength = () => 0.999999999999;
    const list = [false, false, false, true];

    Math.random = mockRandomToReturnListLength;

    const lastValue = getRandomItem(list);

    Math.random = actualRandom;

    expect(lastValue).toEqual(true);
  });

  it('may return the first item', () => {
    // SHAME: tests implementation
    const actualRandom = Math.random;
    const mockRandomToReturnListLength = () => 0;
    const list = [true, false, false, false];

    Math.random = mockRandomToReturnListLength;

    const firstValue = getRandomItem(list);

    Math.random = actualRandom;

    expect(firstValue).toEqual(true);
  });

  it('may return the middle item', () => {
    // SHAME: tests implementation
    const actualRandom = Math.random;
    const mockRandomToReturnListLength = () => 0.5;
    const list = [false, false, true, false, false];

    Math.random = mockRandomToReturnListLength;

    const midValue = getRandomItem(list);

    Math.random = actualRandom;

    expect(midValue).toEqual(true);
  });
});
