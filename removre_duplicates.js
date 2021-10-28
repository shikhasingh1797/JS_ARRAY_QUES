// Remove the duplicates and put them in a separate list
var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var i=0
var list1=[]
var list2=[]
while(i<n.length){
    j=0
    if (!(list1.includes(n[i]))){
        list1.push(n[i])
    }
    else{
        list2.push(n[i])

    }
    i=i+1
}
console.log(list1)
console.log(list2)