// Jaan.js


/*  Variable */

/* Numeric Variable */

var price = 13;
var  width = 18;
var age = 24;
var vhg = 38;
var weight = 60;
var money = 140; 
var gf = 5;

/*  String Variable */

var person = "tonmoy bosunia" ; 
var location = "tepriganj debiganj" ;
var special = "Esha Gacua" ;

/* Boolean Variable */

var serious = true;
var fullmark = false;
var reallove = true;

/* Variable Name And Reserver-Word */

/* 1.Variable Name Connot Be Any Keyword. */
// var false = 29; 

/* 2.Variable Name Has To Be IN One Word.No Space. */
// var my house = "los Angelas";

/* 3.Variable Name Can Not have Quotation */
// var "Name" = "tonmoy bosunia" ;

/* 4.Variable Name Can Not Starts With A Number But Con Ends With A Number. */
// var 99club = 15454;
// var club45 = 15454;

/* 5.How To Use Long Name.Cannot Use (-).But Can Use (_) */
var user_name = "Tonmoy" ;
var user_Home_current_Address = "Tepriganj" ; /* Snake Case */
var userHomeAddress = "Tepriganj" ; /* Camel Case.We Will Use This One. */
var UserHomeAddress = "Tepriganj" ; /* Pascal Case */

/* 6.Variable Name Is Case Senstive */
var person = 25;
var Pearon = 25;


// Math.js


/* 

1.Number: 55, 58, 101 
2.Integer Odd 2, Even 5,
3.Float: Decimal: 2.5, 10.11, 11.22,
4.Operation: Addition, Substraction, Multipication, Division, Reminder,
5.Percent,
6.Avarage,
7.Comparrison: <, >, =, >=, =<,
8.oikik,
9.45, 25, 35, Max, Min, Average, Sum,
10.Series
11.Extra:Prime, Permutation, 

*/


// Operation.js


/* Addition */
var onionPrice = 20;
var egg = 8;
var totalPrice = onionPrice + egg;
/* Substraction */
var priceDifference = onionPrice -egg;
/* console.log(onionPrice)
console.log(egg)
console.log(onionPrice + egg) */
/* console.log(totalPrice) */
/* console.log(priceDifference) */

/* Multipication */
var orangePrice = 20;
var quantity = 5;
var totalPrice = orangePrice * quantity;
/* console.log(totalPrice) */

/* Division */
var money = 500;
var player = 10;
var ecahPlayer = money / player;
// console.log(ecahPlayer)


// ShortHand.js


/* Variable Declaration */
var tomatoPrice = 25;
/* Variable Value Update */
tomatoPrice = 30;

/* Add Something To The Previous Value */
var price1 = 31;
var price2 = 10;

/* Set A New Value */
/* price1 = 30; */
/* Add Some Value To The Existing value */
price1 = price1 + 9;
/* console.log(price1) */

/* Addition To The Same Variable Short Hand */
/* (+=) Means Adding SOme Value To The Existing Value */
price1 += 9;
price1 -= 3;
/* console.log(price1) */
price1 *= 2;
/* console.log(price1) */
price1 /= 3;
/* console.log(price1) */

price2 = 20;
price2 = price2 - 8;
/* console.log(price2) */

var age = 15;
/* (++) Means Adding 1 To The Existing Value */
age++;
/* console.log(age) */
var love = 100;
love -= 1;
/* (--) Means Deductiong 1 To The Existing Value */
love--;
/* console.log(love) */


// Convertion.js


/* var price1 = 31;
var price2 = 10;
var totalPrice = price1 + price2 ;
console.log(totalPrice) ;
var firstName = "jeni" ;
var lastName = "kim" ;
var fullName = firstName + ' ' + lastName ; */
/* console.log(fullName)

/* var price1 = "40";
var price2 = 12;
var totalPrice = price1 + price2; */
/* console.log(totalPrice) */

/* Convert String To Number */

var price1 = "40";
var price2 = 12;
var totalPrice = price1 + price2;
price1 = parseInt(price1) /* এটি ব্যাবহার করা হয় স্ট্রিং ভেরিয়েবল কে নাম্বার এ রুপান্তরিত করার জন্য।তবে এটি পয়েন্ট এর পরের সংখ্যা কে গণনা করবে না। */
/* console.log(price1) */

var gpa = "3.24";
var gpaNumber = parseFloat(gpa) /* এটি ব্যাবহার করা হয়য় স্ট্রিং ভেরিয়েবল কে নাম্বার এ রুপান্ত্ররিত করার জন্য।এবং এটি পয়েন্ট এর পরের সংখ্যা কে গণণা করতে পারে। */
// console.log(gpaNumber)


// Reminder.js


var mango = 7;
var person = 2;
var total = mango % person;
// console.log(total)
/* (/) This Means Vagfol  */
/* (%) This Means Vagsesh  */


// Type.js

var price = 100;
// console.log(typeof price)
var price = "100";
/* console.log(typeof price) */
var isHappy = true;
/* console.log(typeof isHappy) */
var romantic;
/* console.log(typeof romantic) */
var number01 = 0.1;
var number02 = 0.2;
var sum = number01 + number02;
sum = sum.toFixed(3) /* এটি ব্যাবহার করা হয় দশমিক এর পর কতঘর দেখাবে তার জন্য। */
sum = parseFloat(sum)
// console.log(sum);