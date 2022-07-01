function longestConsec(strarr, k) {
    // your code
    if (k < 1) {
        return ""
    } else if (k > strarr.length) {
        return ""
    }

    let temp = strarr.map(function name(item) {

    })[0]
}
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))

function longestConsec(strarr, k) {
    var longest = "";
    for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
        var tempArray = strarr.slice(i, i + k);
        var tempStr = tempArray.join("");
        if (tempStr.length > longest.length) {
            longest = tempStr;
        }
    }
    return longest;
}