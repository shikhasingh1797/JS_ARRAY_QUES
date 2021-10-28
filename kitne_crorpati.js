var money = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var i=0
var crore=0
var lakh=0
var dil=0
for (i of money){
    if (i>=10000000){
        crore++
    }
    else if(i>=100000){
        lakh++
    }
    else{
        dil++
    }
}
console.log("Crorpati:",crore)
console.log("Lakhpati:",lakh)
console.log("Dilwale:",dil)