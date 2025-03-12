let input = prompt("Nhập 10 phần tử mỗi phần tử cách nhau dấu , :");
let numbers = input.split(",").map(num => +num.trim());
let check = true;
for (let num of numbers) {
    if (isNaN(num)) {
        check = false;
        break;
    }
}
if (numbers.length !== 10 || !check) {
    console.log("Không hợp lệ.Hãy nhập lại!");
} else {
    let squareNumbers = numbers.map(num => num ** 2);
    let output = squareNumbers.filter(num => num % 2 === 0);
    console.log(output);
}