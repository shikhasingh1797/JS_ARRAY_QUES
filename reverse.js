// FIRST METHOD

// var num=[50, 40, 23, 70, 56, 12, 5, 10, 56]
// num.reverse()
// console.log(num)


// SECOND METHOD

var num=[50, 40, 23, 70, 56, 12, 5, 10, 56]
var i=0
var lis=[]
var l=num.length
while(i<l){
    lis.push(num.pop())
    i=i+1
}
console.log(lis)