// let and var scope
function doSomething(){
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Fially: ' + i);
}
doSomething()

// variable Types
let a: number
let b: boolean
let c: string
let d: any
let e: number[]=[1,2,3]
let f: any[] = [1, true, '1', false]


//ENUMS 
const ColorRed = 0
const ColorGreen = 1
const ColorBlue = 2

enum Color {Red = 0, Green = 1, Blue = 2}
let backgroundColor = Color.Red
console.log(backgroundColor);

// type isertaion
let message
message = 'abc'
let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c')