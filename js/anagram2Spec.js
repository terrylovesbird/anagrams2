var ana = require("./anagram2"),
  dictionary = ["threads", "trashed", "hardest", "hatreds", "hounds"];

console.log(ana.anagramsFor("threads", dictionary).length == 4);
console.log(ana.anagramsFor("threads", dictionary)[0] == "threads");
console.log(ana.anagramsFor("threads", dictionary)[1] == "trashed");
console.log(ana.anagramsFor("threads", dictionary)[2] == "hardest");
console.log(ana.anagramsFor("threads", dictionary)[3] == "hatreds");

console.log(ana.anagramsFor("apple", dictionary).length == 0);
