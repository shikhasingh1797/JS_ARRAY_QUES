var ele = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var count=0
var count1=0
var sum=0
var sum1=0
while(i<ele.length){
    if (ele[i]%2===0){
        sum=sum+ele[i]
        count++
    }
    else{
        count1++
        sum1=sum1+ele[i]
    }
    i=i+1
}
console.log("Even count:",count,"\nEven Sum:",sum,"\nAverage of Even numbers :",sum/count)
console.log("Even count:",count1,"\nOdd Sum:",sum1,"\nAverage of Even numbers :",sum1/count1)