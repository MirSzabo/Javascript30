//https://www.youtube.com/watch?v=HB1ZC7czKRs
let products = [
  {
    name: "chair",
    second_name: "simple",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    second_name: "new",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    second_name: "line",
    inventory: 2,
    unit_price: 399.50
  }
];

//filter() 
//new array only with entries we want
//example choose only products which has price higher than 100 and less than 400
const oneHundred = products.filter(function (product) {
  if(product.unit_price >= 100 && product.unit_price <= 400) {
    return true //keep it
  }
});
console.table(oneHundred);
console.table(products);

const oneHundred = products.filter(product => (product.unit_price >= 100 && product.unit_price <= 400));

//map()
//we want to have only first and second name in new array
//it will return always same number items as you give it
const fullNames = products.map(product => `${product.name} ${product.second_name}`);
console.table(fullNames);

//sort()
//two items and you sort them returning 1 and -1
//sort by inventory number
const inventoryPosition = products.sort(function(a, b) {
  if(a.inventory > b.inventory) {
    return 1;
  } else {
    return -1;
  }
});
console.table(inventoryPosition);

const inventoryPosition = products.sort((a, b) => a.inventory > b.inventory ? 1 : -1);
console.table(inventoryPosition);

//reduce()
//how many we will pay for all products
//one number is output
const finalPrice = products.reduce((total, product) => {
  return total + (product.unit_price)
}, 0);

console.log(finalPrice);

//sort()
// sort fruits based on first letter
var fruits = ["apple pie", "orange drink", "cherry cake", "bannana split", "lemon juice"];

const alpha = fruits.sort(function(lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(" ");
  const [bLast, bFirst] = nextOne.split(" ");
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//reduce()
//popocita kolko krat je tam ten isty item
const data = ["c", "t", "c", "c", "c", "t","w", "t"];

const transportation = data.reduce(function(object, item){
  if(!object[item]){
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});
console.log(transportation);

//https://www.youtube.com/watch?v=QNmRfyNg1lw
//some()
//is at least one person 16yo?
const people = [
  {name: "Miroslava", year: 1986},
  {name: "Peter", year: 2010},
  {name: "Filip", year: 1998},
  {name: "Elena", year: 2000}
];

const isAdult = people.some(function (person) {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 16;
});
console.log(isAdult);

//every()
//is everyone 10yo?
const allAdult = people.every(function (person) {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 10;
});
console.log(allAdult);

//find()
//it is as filter but it retuns first value it finds
const comments = [
  {text: "Love", id: 4542345},
  {text: "Is", id: 3645125},
  {text: "In", id: 8547845},
  {text: "The", id: 4542345},
  {text: "Air", id: 6745545}
];

const comment = comments.find(comment => comment.id === 4542345);
console.log(comment);

//findIndex()
//find comment with ID we want and then delete this comment
const index = comments.findIndex(comment => comment.id === 8547845);
console.log(index);

//comments.splice(index, 1);

//if we want to delete item and make new array without it 
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];

console.table(newComments);
console.table(comments);

//https://www.youtube.com/watch?v=YnfwDQ5XYF4&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=15&t=0s
//ARRAYS
//reference vs copy
let players = ["A", "B", "C"];
const team = players;

//how to make copy of array
const team2 = players.slice();
team2[2] = "D";
//how to make copy and concat old one in
const team3 = [].concat(players);

//how to do it ES6
const team4 = [...players];

//OBJECTS
//how to make copy
const person = {
  number: 12,
  age: 99
};
const cap2 = Object.assign({}, person, {number: 99, age: 12});
console.log(cap2);



