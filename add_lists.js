var marks = [ [78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49] ]
var l=marks.length
var i=0
var sum=0
while(i<l){
    var j=0
    while (j<marks[i].length){
        sum=sum+marks[i][j]
        j++
        }
    i++
}
console.log("Total Sum:",sum)