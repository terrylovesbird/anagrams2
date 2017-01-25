var ana = require("./anagram2"),
  dictionary = ["threads", "trashed", "hardest", "hatreds", "hounds"];

console.log(ana.anagramsFor("threads", dictionary) == ["threads", "trashed", "hardest", "hatreds"]);
console.log(ana.anagramsFor("apple", dictionary) == []);
