// higher order function is a
// function which takes another
// function as an input

// map function

// var arr = [12,45,78,23,52,98]

// function logic (number) {
//     return number * 2
// }

// var outputArr = arr.map( n => n * 2)

// console.log(outputArr);

// var arr = [
//     {name : 'chandra'},
//     {name : 'prasanna'},
//     {name : 'pavan'},
//     {name : 'sai'},
//     {name : 'manu'},
// ]

// var outputArr = arr.map( obj => obj.name == 'sai')

// console.log(outputArr);

// filter

// var arr = [12,45,78,23,52,98]

// var outputArr = arr.filter( n => n > 50)

// console.log(outputArr);

// var arr = [
//     {name : 'chandra'},
//     {name : 'prasanna'},
//     {name : 'pavan'},
//     {name : 'sai'},
//     {name : 'manu'},
// ]

// var outputArr = arr.filter( (obj, i) => i > 2)

// console.log(outputArr);

// forEach

// var arr = [12, 45, 78, 23, 52, 98];

// var output = []

// arr.forEach((n) => output.push(n * 5) );

// console.log(output);



    

const companies = [
{ name : "siva" , category: 'product', statr:2000, end: 2020 },
{ name : "kishore" , category: 'service', statr:1995, end: 2010 },
{ name : "teja" , category: 'finance', statr:1990, end: 2020 }


];


 const values = 25.25478566
    

console.log(typeof values);

console.log(values.toFixed(2));
