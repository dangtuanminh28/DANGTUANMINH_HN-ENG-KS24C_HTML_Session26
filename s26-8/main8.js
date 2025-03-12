let arr = [];
let n = +prompt("Nhập phần tử bất kì vào mảng: ");
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt('Mời bạn nhập số bất kì: ');
        if (isNaN(arr[i])) {
            alert("Không hợp lệ.Hãy nhập lại!");
            break;
        }
    }
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    let newArr = []
    for (let i = 0; i < n; i++) {
        if (isPrime(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    let newArrOdd = newArr.filter(function (element) {
        return element % 2 !== 0;
    })
    console.log(newArrOdd);
} else if (n === 0) {
    alert("Mảng rỗng");
}