function likes(names){
	let likes = "";
	if(names.length == 0){
		return "no one likes this"
	}

	if(names.length == 1){
		likes += `${names[0]} likes this`
	}else if (names.length == 2) {
		likes += `${names[0]} and ${names[1]} likes this`
	}else if(names.length == 3){
		likes += `${names[0]}, ${names[1]} and ${names[2]} like this`
	}else{
		likes += `${names[0]}, ${names[1]} and ${names.length - 2} others like this`		
	}

	return likes
}

console.log(likes(["peter"]));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
/*
	given array of string as input. return the number of likes and the names on it by with these rules
	-For 1-3 names, the name is increased "name + name +name + ......"
	-For 4 or more names, the number in "and 2 others" simply increases.
	-For 0 names, should return 'no one like this'
*/