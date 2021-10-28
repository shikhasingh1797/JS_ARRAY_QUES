var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
var i=0
var l=list1.length
var list3=[]
while(i<l){
    if (!(list2.includes(list1[i]))){
        list3.push(list1[i])

    }
    i=i+1
}
console.log(list3)