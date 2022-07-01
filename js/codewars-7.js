function isItNum(phone) {
    let solution = ""
    let regex = /[0-9]/g
    phone.replace(regex, function name(filtered) {
        solution += filtered
        return null
    })
    if (solution.length == 11 && solution.charAt(0) == '0') {
        return solution
    }
    return "Not a phone number"
}

console.log(isItNum('S: )0207ERGQREG88349F82!efRF'))
console.log(isItNum('sjfniebienvr12312312312ehfWh'))
/*
    we have a phone number that scrambled with alphabet
    the actuall number wasn't missing or decrypt
    solution :
    we should rid all of alphabet then keep all the number's
*/