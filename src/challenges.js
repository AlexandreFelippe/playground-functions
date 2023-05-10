// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(compar1, compar2) {
  if (compar1 === true && compar2 === true) {
  return true}
  else {
    return false
  }
}


// Desafio 2 - Crie a função splitSentence

function splitSentence(frase) {
return frase.split(" ");
}


// Desafio 3 - Crie a função concatName
let array = ['foguete', 'não', 'tem', 'ré']

function concatName(parameter) {
  return parameter[parameter.length-1] + ", " + parameter[0];
}


// Desafio 4 - Crie a função footballPoints

let wins;
let ties;

function footballPoints(wins, ties) {
  return (wins * 3 + ties *1)
}


// Desafio 5 - Crie a função highestCount

function maiorNumero(array) {
  let maior = array[0];
    for (let index = 0; index < array.length; index += 1 ) {
    if (array[index] > maior) maior = array[index];
    }
    return maior
} 
  function highestCount(array) {
   let count = 0; 
    for (let index1 = 0; index1 < array.length; index1 += 1 ){
    if (array[index1] === maiorNumero(array)) {count += 1}
    }
    return count
  }
 

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
 return (base * height) / 2
}
function calcRectangleArea(base, height) {
  return (base * height)
}

function calcAllAreas(base, height, form) {
  if (form === "triângulo") {    
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  };
  if (form === "retângulo") {    
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`
  };
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'
  };

console.log(calcAllAreas(10, 50));
// Desafio 7 - Crie a função catAndMouse
//function catAndMouse(mouse, cat1, cat2) {
//  if (cat2 mouse) {
    
//  }
//}

// Desafio 8 - Crie a função fizzBuzz
//let fizz;
//let buzz;
//let fizzBuzz;
//let bug;

//function fizzBuzz (array = []) {

//}


  // Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
