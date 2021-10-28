let n=require("readline-sync");
var name=n.question("enter name: ");
var s=name.split("")
var store=s
var i=name.length-1
var lis=[]
while(i>=0){
    lis.push(s[i])
    i=i-1
}
console.log(lis)
console.log(store)
if(JSON.stringify(lis)==JSON.stringify(store)){
    console.log("It is a Palindrome String")
}
else{
    console.log("It is not a Palindrome String")
}
