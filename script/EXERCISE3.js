function sumEvenNumbers(numbers) {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0){
            sum = sum + numbers[i];
        }
    }
    return sum;
}

const testnumbers = [3, 5, 8, 1, 10, 3]
const result = sumEvenNumbers(testnumbers);

console.log(result);