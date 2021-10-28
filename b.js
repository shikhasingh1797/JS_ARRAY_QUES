var lis=[1,2,3,4,5,6]
var z = lis.length
var empty = []
for (var i = 0; i < z; i += 2) {
    var empty1 = []
    for (var j = i; j < (i + 2); j++) {
        if (lis[j] !== undefined) {
            empty1.push(lis[j])
        }
    }
    empty.push(empty1)
}
console.log(empty)