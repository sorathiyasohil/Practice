
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


//NESTED-LOOP///////  1 12 123/////

var i = 1;
var str = '';
for (i; i <= 5; i++) {
    for (j = 1; j <= i; j++)
        str += j;
    str += '\n';
}
console.log(str);


//SERIES PRINT//////////// 1 22 33 ///


var i = 1;
var str = '';

for (i; i <= 5; i++) {
    for (j = 1; j <= i; j++)
        str += i;
    str += '\n';
}
console.log(str);

//SERIES PRINT// 5 TO 54321
var i = 1;
var str = '';

for (i = 5; i >= 1; i--) {
    for (j = 5; j >= i; j--)

        str += j;
    str += '\n';
}
console.log(str);



//SWAPING//////////


var a = 10, b = 20;

var c = a;
var a = b;
var b = c;



console.log(a, b);


//FIBONACCIS SERIES//////////////

var a = 0;
var b = 1;
var c;

for (i = 1; i <= 10; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}


//Array-rev///////////


/* var num = [26, 27, 28, 29];
console.log(num.reverse()); */

/////////////


var num = [26, 27, 28, 29];
var rev = [];

for (i = num.length - 1; i >= 0; i--) {
    rev.push(num[i]);

}
console.log(rev);


//SUM OF ARRAY////

var num1 = [5, 10, 5, 10]
    .reduce(add);
function add(total, num1) {
    return total + num1;
}

console.log(num1);

///////////////////

var num = [12, 13, 14, 15];
var add = [];

for (i = 0; i <= num.length - 1; i++) {
    add.push(num[i]);

}
console.log(add, num);


//////////////////////////



var unique = [26, 12, 15, 22, 26, 15, 15, 98];
var count = {};
unique.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
console.log(count);


var nu = [1, 2, 3, 1, 3, 4, 4];
for (i = 0; i <= nu.length; i++) {
    for (j = i + 1; j <= nu.length; j++) {
        if (nu[i] === nu[j]) {
            console.log('Duplicate value of', nu[i]);
        }

    }
}


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr1 = [];
var arr2 = [];


for (i = 0; i <= arr.length; i++) {
    if (a[i] % 2 == 0) {
        arr2.push(arr[i]);
    } else {
        arr1.push(arr[i]);
    }
}
console.log(arr2, arr1);































































