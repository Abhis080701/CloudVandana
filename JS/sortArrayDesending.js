// By Using bubble sort
function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // Swap elements if they are in the wrong order
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let numbers = [5, 2, 9, 1, 5, 6];
let sortedArray = sortArrayDescending(numbers);
console.log(sortedArray);  // Output: [9, 6, 5, 5, 2, 1]
