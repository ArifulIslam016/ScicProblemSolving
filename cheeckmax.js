
function cheeckMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    return max;
}

console.log(cheeckMax([14,16,18,20])); 