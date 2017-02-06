require_relative 'anagram2'

dictionary = ["threads", "trashed", "hardest", "hatreds", "hounds"]

puts anagrams_for("threads", dictionary) == ["threads", "trashed", "hardest", "hatreds"]
puts anagrams_for("apple", dictionary) == []
