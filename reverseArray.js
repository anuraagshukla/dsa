let  numbers = [1, 2, 3, 4, 5];

function reverseArray(numbers) {
    let output = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        output.push(numbers[i]);
    }
    return output;
}
var reverseArray = reverseArray(numbers);
console.log(reverseArray);