const checkNumParity = (num) => {
   if (num === 0) {
      return `${num} - Eto ноль`;
   } else if (num% 2 === 0) {
      return `${num} - Chetnoe число`;
   } else {
      return `${num} - Nechetnoe число`;
   }
}
for (let i = 0; i <= 10; i++) {
   console.log(checkNumParity(i));
}