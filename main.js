// let and var scope
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Fially: ' + i);
}
doSomething();
// variable Types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, '1', false];
//ENUMS 
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
console.log(backgroundColor);
// type isertaion
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
