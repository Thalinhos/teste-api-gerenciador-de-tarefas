function leftPad(word, number, char ){
    let padding = char
    for (let i = 0; i < number - 1; i++) {
        padding += char; 
    }
    console.log(`${padding}${word}`)
}

leftPad('thalis', 5, '-')