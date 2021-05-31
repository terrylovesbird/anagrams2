var h = require('./anagram2');
const listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

test('listOfWords length equal 4', () => {
  expect(h("threads", listOfWords).length).toBe(4);
});

test('listOfWords[0] equal "threads"', () => {
    expect(h("threads", listOfWords)[0]).toBe("threads");
  });

test('listOfWords length equal 0', () => {
    expect(h("apple", listOfWords).length).toBe(0);
  });
//test