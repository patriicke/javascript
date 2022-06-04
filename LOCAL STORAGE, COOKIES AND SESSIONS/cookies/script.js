const fname = "Patrick";
const lname = "NDAYAMBAJE";

document.cookie = `lname=${fname};expires=${new Date(
  2023,
  0,
  2
).toUTCString()}`;

document.cookie = `fname=${lname};expires=${new Date(
  9999,
  0,
  2
).toUTCString()}`;

console.log(document.cookiegit)