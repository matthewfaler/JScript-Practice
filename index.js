document.onload = alert("You loaded the page!");

let string = "matthew";
let age = 21;
let employed = false;
const fullName = user => console.log(`${string} faler`); //function expression
fullName(string);

document.getElementById("p1").innerHTML = "hello " + string;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "employed: " + employed;

//let username = window.prompt("What is your username?");
//console.log(username);

/*let username;

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("answer").value;
    console.log(username);
}
*/

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

document.getElementById("submitButton2").onclick = function() {
    const box = document.getElementById("myBox");
    
    if(box.checked == true) {
        console.log("you are subscribed!");
    } else {
        console.log("you are NOT subscribed");
    }
    
   let cards = document.getElementsByName("card")
    cards.forEach(card => {
        if(card.checked) {
            console.log(`${card.value} was selected`);
        }
    })
}

/*function happyBirthday() {
    console.log("Happy birthday!");
}

happyBirthday();
*/

/*function checkChild() {
    return age >=18 ? console.log("Grown up") : console.log("Child"); //ternary operator
}
*/
console.log(`Hello ${string}`); //Template Literal

let numbers = [30, 80, 20, 25, 38, 75];
console.log(Math.max(...numbers)); //Spread operator

const power2 = (element, index, array) => array[index] = Math.pow(element, 2);

numbers.forEach(power2); //callback to function expression. FUNCTION EXPRESSION MUST BE INITIALIZED FIRST BEFORE BEING USED
console.log(...numbers); //spread operator
numbers.forEach(num => console.log(num)); //arrow function expression inside a forEach

numbers.forEach((element, index, array) => array[index] = Math.pow(element, 0.5)); //arrow function expression used as a callback in a foreach
numbers.forEach(num => console.log(num));

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

store.forEach((value, key) => console.log(`${key} $${value}`));

class Car{
    constructor(power, gas) {
        this._power = power;
        this._gas = gas;
    }
    get power() {
        return this._power;
    }
    get gas() {
        return this._gas;
    }
    set gas(num) {
        this._gas = num;
    }
}

let car1 = new Car(500, 30);

car1.gas = 50;

console.log(car1.power);
console.log(car1.gas);

let date = new Date();
console.log(date);
console.log(date.toLocaleString());

console.log(document);
console.dir(document);

document.body.style.backgroundColor = "skyblue"; //change background color of body
//can access head as well using document.head

let vegetables = document.getElementsByTagName("li"); //'vegetables' becomes an html collection because of the method. behaves like an array
vegetables[1].style.color = "darkred"; //change color of the first item in the html collection
//if using querySelector method to change DOM, remember that it only selects the first of a group
//use querySelectorAll to change all of the group

let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})

const header = document.createElement("h1");
header.textContent = window.prompt("Enter header: ");
document.body.prepend(header);

const list = document.querySelector("ul");
const listItem = document.createElement("li");
listItem.textContent = "asparagus";
list.append(listItem);
const item2 = document.createElement("li");
item2.textContent = "arugula";
list.insertBefore(item2, list.getElementsByTagName("li")[3]);

header.style.fontFamily = "Impact";
header.style.textAlign = "Center";
header.style.border = "2px solid";

//header.onmouseover = () => header.style.backgroundColor = "lightgreen";
//header.onmouseout = () => header.style.backgroundColor = "skyblue";

header.addEventListener("mouseover", () => header.style.backgroundColor = "lightgreen");
header.addEventListener("mouseout", () => header.style.backgroundColor = "skyblue");

window.addEventListener("keydown", event => console.log(event.key));

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//Lines
context.strokeStyle = "red";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();

let canvas2 = document.getElementById("canvas2");
let context2 = canvas2.getContext("2d");
//Triangle and Rectangle
context2.strokeStyle = "red";
context2.fillStyle = "darkgreen";
context2.lineWidth = 10;
context2.beginPath();
context2.moveTo(250, 0);
context2.lineTo(0, 250);
context2.lineTo(500, 250);
context2.lineTo(250, 0);
context2.stroke();
context2.fill();
context2.strokeRect(50, 300, 400, 150);
context2.fillRect(50, 300, 400, 150);
//Semi-Circle
context.beginPath();
context.arc(250, 250, 100, 0, Math.PI, true); //arc(x, y, radius, startAngle, endAngle, counterclockwise)
context.stroke();
context.fill();
//Text
context2.font = "80px Brush Script MT";
context2.textAlign = "center";
context2.fillStyle = "red";
context2.fillText("It works!", canvas2.width / 2, 375);

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
    if(window.confirm("Are you sure you would like to leave the page?")) window.open("https://www.w3schools.com/");
});

console.log(navigator.cookieEnabled);

document.cookie = "firstName=Spongebob; expires=Fri, 22 Sep 2023 12:00:00 UTC";
document.cookie = "lastName=Squarepants; expires=Fri, 22 Sep 2023 12:00:00 UTC";
console.log(document.cookie);
console.log(decodeURIComponent(document.cookie));
