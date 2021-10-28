var char= ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var i=0
var lis=[]
while(i<char.length){
    var count=0
    var j=0
    while(j<char.length){
      if(char[i]==char[j])
      count=count+1
      j++}
    if (!(lis.includes(char[i]))){
      lis.push(char[i])
      lis.push(count)
    }
    i++
}
console.log(lis)