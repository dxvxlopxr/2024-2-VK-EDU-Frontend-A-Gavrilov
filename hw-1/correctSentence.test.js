import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
})

test('Выбрасывает TypeError для неправильного типа данных', () => {
  expect(() => correctSentence(-1)).toThrow('Input must be a string.');
  expect(() => correctSentence(['string'])).toThrow('Input must be a string.');
  expect(() => correctSentence(true)).toThrow('Input must be a string.');
  expect(() => correctSentence(null)).toThrow('Input must be a string.');
  expect(() => correctSentence(undefined)).toThrow('Input must be a string.');
  expect(() => correctSentence([1024])).toThrow('Input must be a string.');
  expect(() => correctSentence({})).toThrow('Input must be a string.');
  expect(() => correctSentence(NaN)).toThrow('Input must be a string.');
  expect(() => correctSentence(Infinity)).toThrow('Input must be a string.');
});