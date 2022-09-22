function birthdayCakeCandles(candles) {
    // Write your code here
    const maxHeight = Math.max(...candles)
    return candles.filter(height => height === maxHeight).length
}