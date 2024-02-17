let randomArr = [];

for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
let sumNum = randomArr.reduce((acc, curr) => acc + curr, 0); 
let minNum = Math.min(...randomArr); 
let hasNumThree = randomArr.includes(3);

console.log("Sgenerirovannyi массив:", randomArr);
console.log("Summa элементов массива:", sumNum);
console.log("Minimalnoe число:", minNum);
console.log((hasNumThree) ? `Chislo 3 в заданном массиве имеется` : `Chislo 3 в заданном массиве отсутствует`);

