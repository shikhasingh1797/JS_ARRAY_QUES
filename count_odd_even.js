var ele= [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var count=0
var count1=0
while(i<ele.length){
    if (ele[i]%2===0){
        count++
    }
    else{
        count1++
    }
    i=i+1
}
console.log("Total Even Number:",count)
console.log("Total Odd Number:",count1)