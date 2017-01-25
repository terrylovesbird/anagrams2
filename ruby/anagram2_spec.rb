require_relative 'anagram2'

dictionary = ["threads", "trashed", "hardest", "hatreds", "hounds"]

anagrams_for("threads", dictionary) == ["threads", "trashed", "hardest", "hatreds"]
anagrams_for("apple", dictionary) == []
