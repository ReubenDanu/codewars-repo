// complete the function
function solution(string) {
	let solu = ""
	solu = string.replace(/^[A-Z][a-z]$\w+/g, function(item) {
		console.log(item)
		return ` ${item}`
	})  

	return solu; 

}
console.log(solution(""))
console.log(solution("reubenDanu"))
console.log(solution('camelCasingTest'))
//step one search the camel case char