function splitArrayIntoPairs(arr,n) {
    var arr=[1,2,3,4,5,6]
    var n=2
    var len = arr.length
    var pairs = []
    for (let i = 0; i < len; i += n) {
        var temp = []
        for (var j = i; j < (i + n); j++) {
            if (arr[j] !== undefined) {
                temp.push(arr[j])
            }
        }
        pairs.push(temp)
    }
    return pairs
}

console.log(splitArrayIntoPairs())