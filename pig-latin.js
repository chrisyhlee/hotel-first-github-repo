const translatePigLatin = (string) => {
    let firstVowel = string.match(/[aeiou]/)
    let firstIndex = string.indexOf(firstVowel)
    if (firstIndex > 0) {
        return string.slice(firstIndex) + string.slice(0, firstIndex) + 'ay'
    } else{
        return string + 'way'
    }
}


// clone, cd, open, branch
// $ yarn