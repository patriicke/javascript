const year=new Date().getFullYear();
const month=new Date().getMonth();
let months= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const date=new Date().getDate();
const hour=new Date().getHours();
const minute=new Date().getMinutes();
const second=new Date().getSeconds();
const milliseconds=new Date().getMilliseconds();
console.log(`${year} ${months[month]} ${date} ${hour} ${minute} ${second} ${milliseconds}`);