function toCamelCase(str){
	regex = /[-_]/g
	newstr = str.replace(regex, " ")
	return newstr.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return (index === 0 ? word : word.toUpperCase());
  }).replace(/\s+/g, '');
}

//the best solution's
function toCamelCaseStars(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}