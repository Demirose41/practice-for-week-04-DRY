function multiplyBiggerNumByTwo(num1, num2) {
  let nums  = orderedValues(num1, num2); 
  let bigNum = nums[0];
  
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let nums  = orderedValues(num1, num2); 
  let bigNum = nums[0];

  return bigNum / 3;
  
}

function orderedValues(num1, num2 ){
  return num1 > num2 ? [num1, num2] : [num2, num1];
}

function eatMostTacos(sum1, sum2) {
  let sums  = orderedValues(sum1, sum2); 
  let bigNum = sums[0];

  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let dogs   = orderedValues(weight1, weight2); 
  let smallDog = dogs[1];

  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};