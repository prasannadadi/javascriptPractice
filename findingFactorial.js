// var number = 5;

// for (i = number; i > 0; i--) {
//    var result = "";
//   for (j = 0; j < i; j++) {
//     result = result + "*";
//   }

//   console.log(result);
// }

// var number = 5;

//  for( i=0;i< number; i++){

//     var result  = "" ;
//    for (j=0; j<=i ; j++) {

//        result = result +"*";
//    }
//      console.log(result);
//  }

//  var number = 5;

//  for( i=number;i > 0; i--){

//     var result  = '' ;
//    for (j=0; j <= number ; j++) {

//       if (j >= i) {

//          result = result + "*";
//       } else {
//          result = result + " ";
//       }
//    }
//    console.log(result);
//  }

// var companies = [
//    {name: 'one', start: 1980, end: 2000},
//    {name: 'two', start: 1975, end: 2000},
//    {name: 'three', start: 1968, end: 2000},
//    {name: 'four', start: 1989, end: 2000},
//    {name: 'five', start: 1935, end: 2000},
//    {name: 'six', start: 1984, end: 2000},
//    {name: 'seven', start: 1929, end: 2000},
//    {name: 'eight', start: 1975, end: 2000},
//    {name: 'nine', start: 1912, end: 2000},
//    {name: 'ten', start: 1925, end: 2000},
// ]

//     for(let i=0; i<companies.length;i++){

//       if(companies[i].start > 1950  &&  companies[i].start<1980) {

//          console.log( companies[i].name)
//       }

//    }

//   var number  =  0;

//  var sum  =  1
//     for( let i=number; i>0 ;  i--){

//           sum = sum * i
//     }

//      console.log(sum)

//  var  number = 11;

//    for( let i=1; i<=number; i=i+2  ){

//           console.log(i)
//    }

// var number = 20;

// for (let i = 1; i <= number; i++) {
//    count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       count = count + 1;
//     }
//    }
//     if(count <= 2) {
//        console.log(i);
//   }
// }   /// printing prime number

//   var  number = 10

//     for( let i=0; i<= number; i++){
//        if(i%2  == 0){
//           console.log(i)
//        }
//     } /// printing even number

//  var number= 20

//   let n= number
//    count = 0

//   for( let i=1; i<n;i++){

//           if( n%i == 0) {
//              count= count+1;

//           }
//           else{
//              console.log(i)
//           }

//   }

// var  data = [1,2,3,4,5,6]

// var l = 0

// while (data[l] != undefined) {
//    l = l + 1
// }

// console.log(l)  /// printing data length using while loop

//   var  l = 0

//     while(l < 11){

//       l= l+1
//       console.log(l)
//     }8        //// printing numbers in vertical format

// functions

// function compare(a, b) {
//    if (a>b) {
//       return 'a is bigger than b'
//    } else if (b> a) {
//       return 'b is bigger than a'
//    } else {
//       return 'a is equal to b'
//    }
// }

// console.log(compare(5,5));

// function greet(name) {
//    return 'hi ' + name + ','
// }

// console.log(greet('chandra'));
// console.log(greet('prasanna'));
// console.log(greet('sai'));
// console.log(greet());

//

// var person = {
//    name : 'chandra',
//    details :{
//       salary : 12000,
//       age: 25,
//       gender : 'male',
//       gfs : ['fhafjkjdfs', 'dhgjkg']
//    }
// }

// console.log(person['details']['gfs'][1]);

// function factorial(number=1) {
//    var   result = 1

//    for ( i=1; i<=number; i++){

//           result= result * i
//    }

//   return result

// }
// console.log(factorial(5)) ; // finding factorial using functions

// function factorial(number){

//    var result =   ''

//    var ans = 1

//    for ( i=1; i<= number; i++){

//       var value = i * 1 + 'x'

//       ans = ans * i

//       result = result + value
//    }

// return result + ' is '  + ans
//           }
//  console.log( factorial(5))  //finding factorial for given numbers


// function factorial(number) {
//   var result = "";

//   var ans = 1;

//   for (i = 1; i <= number; i++) {
//     if (i == number) {
//       var value = i ;

//       ans = ans * i;

//       result = result + value;
//     } else {
//       var value = i + ' x ';

//       ans = ans * i;

//       result = result + value;
//     }
//   }

//   return result + " is " + ans;
// }
// console.log(factorial(5));/// finding factorial for given numbers with out repeating x

