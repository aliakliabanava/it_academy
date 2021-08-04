// var speed = parseFloat(prompt ("enter speed"));
// if (speed <= 60) {
//     console.log("ok")
// }
// { if(speed > 60)
//     console.log("too fast")
// }

var surname = prompt ("Ваша фамилия:");
var yourname = prompt ("Ваше имя:");
var fathername = prompt ("Ваше отчество:");
var age = prompt ("ваш возраст в годах:");
var isMale = confirm ("ваш пол мужской?");
var sex = isMale ? "мужской" : "женский";
var pension = age >= 60 ? "да" : "нет";

var age_day = age*365 + parseInt(age/4);
var age_in_5 = Number(age) + 5;

alert ("Ваше имя: " + surname + ' '+ yourname + ' '+ fathername + '\n' +
"ваш возраст в годах: " + age + '\n' +
"ваш возраст в днях: " +age_day + '\n' +
"через пять лет вам будет: " + age_in_5+'\n'+
"ваш пол мужской? " + sex +'\n'+
"вы на пенсии: " + pension );



var surname = prompt ("Ваша фамилия:");
var yourname = prompt ("Ваше имя:");
var fathername = prompt ("Ваше отчество:");
var age = prompt ("ваш возраст в годах:");

var age_day = age*365 + parseInt(age/4);
var age_in_5 = Number(age) + 5;

if (age >= 60) {
    var pension = "да";
}
else {
    var pension = "нет";
}

var isMale = confirm ("ваш пол мужской?");

if (isMale=true) {
    var sex = "мужской";
}
else {
    var sex = "жеский";
}
alert ("Ваше имя: " + surname + ' '+ yourname + ' '+ fathername + '\n' +
"ваш возраст в годах: " + age + '\n' +
"ваш возраст в днях: " +age_day + '\n' +
"через пять лет вам будет: " + age_in_5+'\n'+
"ваш пол мужской? " + sex +'\n'+
"вы на пенсии: " + pension );
