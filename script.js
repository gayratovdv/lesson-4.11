console.log("1-masala");

let a = 15;
let b = 20;
let c;
c = a + b;

console.log("Men 15ga 20ni qo`shganimdagi son bu:" + "\n" + c);



console.log("2-masala");

let d = Number("12");
console.log(typeof (d) + "\n" + d);



console.log("3-masala");

let random = Math.floor(Math.random() * 50)

console.log(random);

if (random % 2 == 0) {
    console.log("Bu son juft");
} else {
    console.log("Bu son toq");
}

console.log("to`rtinchi va beshinchi masalalar alertda chiqarilgan: ");

alert("birinchi ikkinchi uchinichi va oltinchi masalalar console da chiqarilgan: ")



alert("4-masala");
let enter = prompt(`Bitta so'z kiriting`)
if (enter == "Mars") {
    alert(enter)
} else {
    alert(`Mars IT School`)
}



console.log("5-masala");

let array = prompt("5 ta so`z kiriting");
let words = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
        words.push(array[i]);
    }
}

console.log("Uzunligi 5 va 5 dan ortiq sozlar:", words);



console.log("6-masala");

let juftsonlar = [];
let toqsonlar = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        juftsonlar.push(i);
    } else {
        toqsonlar.push(i);
    }
}

console.log("Juft sonlar: ", juftsonlar);
console.log("Toq sonlar: ", toqsonlar);