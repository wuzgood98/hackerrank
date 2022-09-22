function miniMaxSum(arr) {
    // Write your code here
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    let minSum = 0
    let maxSum = 0
    let result
    
    for(let i = 0; i < arr.length; i++) {
        const isSimilar = arr.every(num => num === min && num ===max)
        if(isSimilar) {
            minSum = arr.reduce((acc, cur) => acc + cur, 0) - min
            maxSum = arr.reduce((acc, cur) => acc + cur, 0) - max
        } else {
            minSum = arr.filter(num => num !== min).reduce((acc, cur) => acc + cur, 0)
        maxSum = arr.filter(num => num !== max).reduce((acc, cur) => acc + cur, 0)
        }
        
        result = [maxSum, minSum]
    }
    console.log(result.join(' '))
}