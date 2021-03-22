/* LOOPS */

// for(), for... in e for...of

// for(let i = 0; i <= 4; i++) {
//     console.log(i)
// }


// // // for in trabalha com interação dentro de objetos
// //trabalha com a chave do objeto. Primeiro a traz e depois podemos encadea-la com seu valor.

// let obj = { a: 1, b: 2, c: "letra" };

// for (let casa in obj) {
//     console.log(casa);
// }
// // dessa forma vai trazer somente as chaves do objeto
// // otuput: a  b  c


let obj = { a: 1, b: 2, c: "letra" };

for (let prop in obj) {
    console.log("obj.", prop, " = ", obj[prop]);
}
// // dessa forma vai trazer a chave e a sua propriedade
// // otuput: 
// obj. a  =  1
// obj. b  =  2
// obj. c  =  letra



//for of basicamente trabalha com arrays
// let iterable = [
//     { name: "Larissa", admin: false },
//     { name: "Diego",  admin: false },
//     {name: "Walace", admin: false },
// ];

// for(const value of iterable) {
//     console.log(value.name);
// }

//   o laço for in enxerga as propriedades e não os seus valores.

// const Casa = {
//     area: 1000,
//     altura: 7,
//     andares: 2
//   }
  
//   for(let prop in Casa) {
//     console.log(prop);
//   }

// //output: 
// // area
// // altura
// // andares


// const Casa = {
//     area: 1000,
//     altura: 7,
//     andares: 2,
//     [Symbol.iterator]: function* (){
//       yield this.area;
//       yield this.altura;
//       yield this.andares;
//     }
//   }

//   for(let prop of Casa) {
//     console.log(prop);
//   }
  
//   // output:
//   // 1000, 7, 2

//O laço for…of procura dentro da estrutura pela propriedade [Symbol.iterator] 
//que define como ela deve ser iterada.

//O for…in itera pelas propriedades enumeradas do objeto.