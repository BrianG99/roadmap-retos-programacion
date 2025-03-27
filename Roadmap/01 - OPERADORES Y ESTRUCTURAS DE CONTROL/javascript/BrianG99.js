let saludo = "Hola"
const persona = "Moure"
let edad = 100
let altura = 1.77

console.log(`${saludo} tu debes ser ${persona} con ${altura} de altura y aproximadamente unos ${edad} años jaj es broma`)

let a = 5
let b = 6

//Operacion de Comparacion 
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a!=b)
console.log(a!==b)
console.log(a===b)

//Operadores Logicos
//and &&
console.log(a<=b && b==a)
console.log(a<=b && b>=a)

//or ||
console.log(a<=b || b==a)
console.log(a<=b || b>=a)

//not !
console.log(a<=b && b==a) //false
console.log(!(a<=b && b==a)) //true



//Operadores Aritmeticos

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a%b)

a ++ 
console.log(a)
b --
console.log(b)



//Operadores de Asignacion
let c = 10
console.log(c += 10)
console.log(c -= 10)
console.log(c *= 10)
console.log(c /= 10)
console.log(c **= 10)
console.log(c %= 10)

//Operadores Teranarios
let moureCrack = true
moureCrack ? console.log("El es un crack") : ("Estas equivocado")

//Operadores de Bits
console.log(a & b)
console.log(a | b)
console.log(a ^ b)
console.log(~b)
console.log(a >> b)
console.log(a << b)

//Operadores de Tipo
console.log(typeof a)
console.log(typeof saludo)

