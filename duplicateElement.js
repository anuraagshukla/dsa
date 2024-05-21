let array = [1, 2, 3, 3, 4, 4, 5];

function removeDuplicates(arr) {
    let target = [];
    for (var i = 0; i < arr.length; i++) {
        if (target.indexOf(arr[i]) === -1) {
            target.push(arr[i]);
        }
    }
    return target;
}
var redundtant = removeDuplicates(array);
console.log(redundtant);;