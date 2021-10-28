var num=[50, 90, 23, 70, 56, 12, 5, 10, 7]
var max1=num[0]
var max2=num[1]
var i=0
while(i<num.length){
    if(num[i]>max1){
        max2=max1
        max1=num[i]
    }
    else if(max1>num[i] && num[i]>max2){
        max2=num[i]
    }
    i=i+1
}
console.log("Maxium number:",max1)
console.log("Second maxium number:",max2)