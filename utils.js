

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}

function getRandomTypeOfWord() {
    return typeOfWords[getRandomNumber(typeOfWords.length)];
}

function getRandomCharacter() {
    return allCharacters[getRandomNumber(allCharacters.length)];
}

function getRandomCharacters(){
    const randNum = getRandomNumber(switchCharacterOptions);
    switch(randNum){
        case 0: return vowels[getRandomNumber(vowels.length)];
        case 1: return consonants[getRandomNumber(consonants.length)];
        case 2: return vowels[getRandomNumber(vowels.length)]+consonants[getRandomNumber(consonants.length)];
        // case 3: return vowels[getRandomNumber(vowels.length)]+vowels[getRandomNumber(vowels.length)];
        default: return consonants[getRandomNumber(consonants.length)]+vowels[getRandomNumber(vowels.length)];
    }
}

function getRandomWord() {
    const typeOfWord = getRandomTypeOfWord();
    const randomTypeOfWordArray = listOfWords[typeOfWord];
    const randomNumber = getRandomNumber(randomTypeOfWordArray.length);
    const randomWord = randomTypeOfWordArray[randomNumber];

    const fullObject = {
        randomWord,
        randomNumber,
        typeOfWord,
    }
    return fullObject;
}

function checkifAwnserIsRigth(awnser) {

    if (awnser === tempObj.typeOfWord) {
        points++;
        countOfWords++;
        if (tempObj.randomWord !== undefined) {
            addedParagraph.push(`<p class="right">${tempObj.randomWord} to <strong>${tempObj.typeOfWord}</strong></p>`);
        }
        if (addedParagraph.length >maxParagraphLength){
            addedParagraph.shift();
        }
    } else {
        countOfWords++;
        addedParagraph.push(`<p class="wrong">${tempObj.randomWord} to <strong>${tempObj.typeOfWord}</strong>${(awnser ? `, a nie ${awnser}.` : `.`)}</p>`);
        if (addedParagraph.length >maxParagraphLength){
            addedParagraph.shift();
        }
    }
}

function getRandomEverything(keyWord) {
    if (keyWord === 'Czytanie'){
        tempObj = getRandomCharacters();
        createdHTML = createHTMLCharacter(tempObj);
    } else {
        tempObj = getRandomWord();
        createdHTML = createHTML(tempObj.randomWord);
    }
}

function restartEverything() {
    points = 0;
    countOfWords = 0;
    addedParagraph = [];
}

function getPercent(rightAwnsers, awnsers) {
    const percentage = Math.round(rightAwnsers / awnsers * 100);
    return percentage;
}

function leftToAwnser() {
    return Math.floor(questionCount - countOfWords);
}