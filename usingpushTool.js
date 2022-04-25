var numbers=[30,30,24,18,12]

var len = numbers.length // 5

var sum = []
for( i=0;i<len;i++){

    if (numbers[i] > 20) {
        sum.push(numbers[i])
    }

}

 console.log(sum)// pushing numbers > 20
 