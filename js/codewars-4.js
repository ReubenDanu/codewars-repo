function findOutlier(integers){
  //your code here
  let even = 0;
  let odd = 0;
  return integers.reduce(function(currentValue, currentIndex){
    if(currentValue % 2 == 0){
      even += 1;
    }else if(currentValue%2 == 1 ){
      odd += 1;
    }

    if(odd < even){
      return currentValue;
    }else if (even > odd){
      return currentValue;
    }
  });
}

console.log(findOutlier([1,1,1,1,10,1,1,1]))