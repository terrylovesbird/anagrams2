from anagram2 import anagrams_for 

dictionary = ["threads", "trashed", "hardest", "hatreds", "hounds"]

print(anagrams_for("threads", dictionary) == ["threads", "trashed", "hardest", "hatreds"])
print(anagrams_for("apple", dictionary) == [])
