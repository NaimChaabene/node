 
var numbers=process.argv.slice(2).map(number=>Number(number));

console.log(numbers.reduce( (accumulator, currentValue) => accumulator +(currentValue)));