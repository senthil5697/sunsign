const generateRandomNumber = (num) => {
    //gets num from 0 till num -1
    return Math.floor(Math.random() * num)
}
    //create objects
    const predictiveAstrology = {
        sunSign: ['aries', 'taurus', 'scorpio', 'gemini'],
        personalityCharacter: ['winner','champion','go getter','performer'],
        advice:['excercise','diet','read books','get some sun']
    }

    //store the horoscope in an array
    let personalhoroscope = []

    //iterate over the object
    for(let zodiac in predictiveAstrology) {
        let optionIndex = generateRandomNumber(predictiveAstrology[zodiac].length)

        // use the object's properties to customize the message being added to the user's horoscope if, if else statements
        switch(zodiac) {
            case 'sunSign':
                personalhoroscope.push(`Your sun sign now is "${predictiveAstrology[zodiac][optionIndex]}".`)
                break
            case 'personalityCharacter':
                personalhoroscope.push(`Your personality is "${predictiveAstrology[zodiac][optionIndex]}".`)
                break
            case 'advice':
                personalhoroscope.push(`You should: "${predictiveAstrology[zodiac][optionIndex]}".`)
                break
            default:
                personalhoroscope.push(`There is not enough info.`)
        }
    }

    const astrologyWeekly = (week) => {
        const formatted = personalhoroscope.join('\n')
        console.log(formatted)
    }

    astrologyWeekly(predictiveAstrology);