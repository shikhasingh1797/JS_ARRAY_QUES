var ele= [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var count=0
var count1=0
var sum=0
var sum1=0
var list1=[]
var list2=[]
while(i<ele.length){
    if (ele[i]%2===0){
        sum=sum+ele[i]
        count++
        list1.push(ele[i])
    }
    else{
        count1++
        sum1=sum1+ele[i]
        list2.push(ele[i])
    }
    i=i+1
}
console.log("Total Even Number:",count,list1,"\n              Sum:",sum)
console.log("Total Odd Number:",count1,list2,"\n              Sum:",sum1)