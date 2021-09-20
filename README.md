# LearnLangs
Web app for learning words and collocates

20.09.21
Saving data:
- Simulate db by saving word pairs in a vector of objects into localstorage.
- New words per session are saved as separate word pairs.
- Move new words to the vector when
	- starting app
	- moving to practice mode

Note: It's recommended to use the Web Storage API (setItem, getItem, removeItem, key, length) to prevent the pitfalls associated with using plain objects as key-value stores.
https://2ality.com/2012/01/objects-as-maps.html


