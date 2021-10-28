let n=require("readline-sync");
var num=(n.questionInt("enter name: "));
var lis1=[]
var num1 = [10, 11, 12, 13, 14, 17, 18, 19];
for(var i in num1){
    for(var j in num1){
        var lis=[]
        if (num1[i]+num1[j]==num){
            lis.push(num1[i],num1[j])
            lis1.push(lis)
        }
    }
}
console.log(lis1)
