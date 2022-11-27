import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("")).toBe("") // !!! if str is empty, return empty str (?)
  expect(correctSentence(".")).toBe(".")
  expect(correctSentence("a")).toBe("A.")
  expect(correctSentence("A")).toBe("A.")
  expect(correctSentence("1text")).toBe("1text.")
  expect(correctSentence("1text.")).toBe("1text.")
})

test('return false for wrong data type', () => {
  expect(correctSentence(10)).toBe(false)
  expect(correctSentence(-1)).toBe(false)
  expect(correctSentence()).toBe(false)
  expect(correctSentence(undefined)).toBe(false)
  expect(correctSentence(true)).toBe(false)
  expect(correctSentence(Symbol("id"))).toBe(false)
  expect(correctSentence(Math)).toBe(false)
  expect(correctSentence(null)).toBe(false)
});
