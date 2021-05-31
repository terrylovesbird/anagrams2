//exports.anagramsFor = 
function ana2(word, listOfWords) {
    function compare (a, b) {
        let y = a.split("").sort().join(""),
            z = b.split("").sort().join("");
            //x = (z === y ? true : false);
        return (z === y ? true : false);
    }
    //console.log(compare('abc','cbba'));

    var answer = [];
    for(let i=0; i<listOfWords.length; i++){
        if(compare(word,listOfWords[i])){
            answer.push(listOfWords[i]);
        }
    }
    return answer;
}
module.exports = ana2;

//console.log(abc("threads",["threads", "trashed", "hardest", "hatreds", "hounds"]))
//test
