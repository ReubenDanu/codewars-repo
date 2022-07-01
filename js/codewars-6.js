function solution(roman) {
    let res = 0;
    let romannumb = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }


    for (let i = 0; i < roman.length; i++) {

        let char1 = romannumb[roman.charAt(i)];
        if (i + 1 < roman.length) {
            let char2 = romannumb[roman.charAt(i + 1)];

            if (char1 >= char2) {
                res = res + char1;
            } else {
                res = res + char2 - char1;
                i++;
            }

        } else {
            res = res + char1;
        }
    }

    return res;

}

function romanToDecimal(str) {
    let romannumb = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }


    // Initialize result
    var res = 0;

    for (i = 0; i < str.length; i++) {
        console.log("executed(2)")
        // Getting value of symbol s[i]
        var s1 = romannumb[str.charAt(i)];

        // Getting value of symbol s[i+1]
        if (i + 1 < str.length) {
            var s2 = romannumb[str.charAt(i + 1)];

            // Comparing both values
            if (s1 >= s2) {
                // Value of current symbol
                // is greater or equalto
                // the next symbol
                res = res + s1;
            }
            else {

                // Value of current symbol is
                // less than the next symbol
                res = res + s2 - s1;
                i++;
            }
        } else {
            res = res + s1;
        }
    }

    return res;
}
console.log(romanToDecimal("MCMIV"));
console.log(solution("MCMIV"));
