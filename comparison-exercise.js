let variableOne = "3", variableTwo = 3;

console.log(variableOne == variableTwo)
console.log(variableOne != variableTwo)

console.log(variableOne === variableTwo)
console.log(variableOne !== variableTwo, '\n')
//identity operators -> must have same content and be the same type for two items be considered identical

//in JS the coditionals are ==, ===, !=, !==, <, >, <=, >=, || e && (in python those last two are for bit operations, it`s equivalents being simply "or" and "and") 

//Truthiness
//in JS, non-null number are true, while 0 is false
variableOne = 5, variableTwo = 0;
if (variableOne) {
    console.log("True")
};
variableOne = -5;
if (variableOne) {
    console.log("True")
};

if (variableTwo) {
    console.log("True")
} else if (!variableTwo) {
    console.log("False", '\n')
}
//Falsy values: empty string (""), null, undefined, 0, NaN, document.all


//Ternary
let saldo = 10
const unidade = (saldo === 1 ? "real" : "reais")
console.log(`Seu saldo é de ${saldo} ${unidade}`)
//an if's concise form, (condition ? expression1 : espression2)

