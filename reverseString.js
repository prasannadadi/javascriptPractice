// var names = ["chandra", "gopal", "naveen", "manohar"];
// for (i = 0; i <= names.length-1; i++) {
//   console.log(i, names[i]);
// }



var name = "chandra";


var result = ''
for (i = name.length-1; i >= 0; i--) {

    result = result + name[i]

}


console.log(result);