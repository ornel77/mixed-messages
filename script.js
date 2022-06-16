/* --------------------- Object containing the 3 arrays --------------------- */
const wordList = {
    players: ['Stephen Curry', 'Luka Doncic', 'Jayson Tatum', 'Dejounte Murray', 'Tony Parker'],
    foods: ['pizza', 'ravitoto', 'pasta alla carbonara', 'pie'],
    funnySentences: ['fly off the handle', 'be a happy camper', 'move it or lose it', 'keep a cool head'], 
}

/* ---------- function to generate a random index based on an array --------- */
const generateIndex = num => {
    let index = Math.floor(Math.random() * num)
    return index
}

let finalSentence = []
for(let list in wordList) {
    const randomIndex = generateIndex(wordList[list].length)
    switch(list) {
        case 'players':
            finalSentence.push(`Today you are ${wordList[list][randomIndex]} `)
            break;
        case 'foods':
            finalSentence.push(`and you like ${wordList[list][randomIndex]}.\n`)
            break;
        case 'funnySentences':
            finalSentence.push(`Tommorow will be the time to ${wordList[list][randomIndex]}.`)
            break;
        default:
            console.log('not defined')
            break;
    }
}

const formatting = sentence => {
     console.log(sentence.join(''))
}

formatting(finalSentence)
