let newDate = new Date()
console.log(newDate);
console.log("Day is : "+newDate.getDay());
console.log("Months is : "+newDate.getMonth());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default',{
    weekday : "long"
})
console.log("localeString with date : "+ newDate);