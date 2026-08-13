function superDigit(n, k) {
    let sum=0
    for( let ch of n){
        sum+= Number(ch)
    }
    let total =sum * k
    while (String(total).length !== 1) {
        let sums = 0;
        while (total > 0) {
            sums += total % 10;
            total = Math.floor(total / 10);
        }
        total = sums;
    }
    return total;
}
