const usNumberFormat=new Intl.NumberFormat('en-US');
const usNumber=usNumberFormat.format(9999999.99);
console.log(usNumber)
const esNumberFormat=new Intl.NumberFormat('es-ES');
const esNumber=esNumberFormat.format(9999999.99)
console.log(usNumber)
S