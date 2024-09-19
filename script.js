var studentName = "Ralph Vincent";
var studentAge = 30;
let enrolled = true;
let games = ["Valorant", "TFT"];
let carObject = {model:"Honda", color:"white", mileage: 35000};
let x = 3;
let y = 10;


// alert(studentName + studentAge + Enrolled);
document.body.innerHTML= "<h1>" + studentName + " "+studentAge + " "+enrolled + "</h1>" 
+ "<h1>" +games.toString()+ "</h1>" 
+ "<h1>" +JSON.stringify(carObject,null,2)+ "</h1>";

console.log(studentName);
console.log(studentAge);
console.log(enrolled);
console.log(games.toString());
console.log(JSON.stringify(carObject));

console.log(5 + 3); 
console.log(y - 2); 
console.log(x * 2); 
console.log(y / 2); 


console.log(x > y);
console.log(x <= y);
console.log(x === 3);
console.log(x != y);

let a = true;
let b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);