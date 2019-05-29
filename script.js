
//AIRTHMATIC OPERATION//////

var a = 5;
var b = 10;

function addition(aa, bb) {
    var add = aa + bb;
    return add;
}

console.log(addition(a, b));

function Subtraction(aa, bb) {
    var sub = aa - bb;
    return sub;
}

console.log(Subtraction(a, b));


function multiplication(aa, bb) {
    var mul = aa * bb;
    return mul;
}

console.log(multiplication(a, b));

function devison(aa, bb) {
    var div = aa / bb;
    return div;
}

console.log(devison(a, b));




// function addition (sum){
//     var add=5+sum;
//     return add;
// }
// var sum1=(5);
// console.log(sum1);

// function Subtraction (sum){
//     var add=5-sum;
//     return add;
// }
// var sum1=Subtraction(5);
// console.log(sum1);

// function multiplication (sum){
//     var add=5*sum;
//     return add;
// }
// var sum1=multiplication(5);
// console.log(sum1);

// function devison (sum){
//     var add=5+sum;
//     return add;
// }
// var sum1=devison(5);
// console.log(sum1);


//FOR-LOOP//////////

console.log();
for (i = 0; i <= 10; i++) {

    console.log(addition(i, 10));
    console.log(Subtraction(i, 10));
    console.log(multiplication(i, 10));
    console.log(devison(i, 10));

    for (j = 0; j <= 10; j++) {
        console.log(j);

    }

}

//WHILE-LOOP///////////
var i = 20;

do {
    console.log(i);
    i++;
} while (i <= 25);

//USE OF ARRAY//////////////

var text = "";
var car = ['bmw', 'mg', 'volvo', 'dc'];

for (i = 0; i <= car.length; i++) {
    text + car[i];
    console.log(car + text);
}

var text = "";
var i = 2;
var len = car.length;

var car = ['bmw', 'mg', 'volvo', 'dc'];

for (i; i < len; i++) {
    console.log(car[i] + text);
}


//NESTED-LOOP///////

var i = 1;
var str = '';
for (i; i <= 5; i++) {
    for (j = 1; j <= i; j++)
        str += j;
    str += '\n';
}
console.log(str);




var i = 1;
var str = '';

for (i; i <= 5; i++) {
    for (j = 1; j <= i; j++)
        str += i;
    str += '\n';
}
console.log(str);


var i = 1;
var str = '';

for (i = 5; i >= 1; i--) {
    for (j = 5; j >= i; j--)

        str += j;
    str += '\n';
}
console.log(str);






var a = 10, b = 20;

var c = a;
var a = b;
var b = c;



console.log(a, b);


/* var f1 = 0;
var f2 = 1;
var sum;

for (i =2; i<= 10; i++) {

    sum = f1 + f2;
    f1 = f2;
    f2 = sum;  

}

console.log(sum); */





/* 
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  
}
console.log(fib); */


var a=0;
var b=1;
var c;

for(i=1; i<=10; i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}

























