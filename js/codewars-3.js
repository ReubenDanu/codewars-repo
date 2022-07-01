// 34132 

function narcissistic(num){
	let temp = num.toString();
	let narcissistic = 0;
	for(let i = 0; i < temp.length; i++){
		narcissistic += parseInt(temp.charAt(i)) ** temp.length
	}
	if(parseInt(temp) === narcissistic){
		return true
	} else {
		return false
	}
}

console.log(narcissistic(34132))
console.log(narcissistic(153))
console.log(narcissistic(93084))
