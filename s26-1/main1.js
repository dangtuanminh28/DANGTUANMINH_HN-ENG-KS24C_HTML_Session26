function filterNumbers(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        let num = arr[i];
        if (Number.isInteger(num)) {
            if (num >= 10) {
                result.push(num);
            }
        }
        i = i + 1;
    }

    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            return [0];
        }
    } else {
        return [0];
    }

    if (result.length) {
        return result;
    }

    return [0];
}

// Nhập từ người dùng
let input = prompt("Nhập vào mảng số nguyên, cách nhau bởi dấu phẩy:");
let arr = input.split(",");
let numbers = [];
let j = 0;
while (j < arr.length) {
    numbers.push(Number(arr[j]));
    j = j + 1;
}

console.log(filterNumbers(numbers));