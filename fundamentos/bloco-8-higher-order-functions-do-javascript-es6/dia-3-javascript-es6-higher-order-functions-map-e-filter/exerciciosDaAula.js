/*const frutas = ['maça', 'laranja', 'tomate', 'pera', 'laranja', 'uva', 'laranja'];
const laranjas = frutas.filter((fruta) => { return fruta === 'laranja' });
console.log(laranjas);

const sucoDeLaranja = laranjas.map((laranja) => 'suco de laranja');///duvida;Por que na de cima se usa chave e nessa não?
console.log(sucoDeLaranja); */

const numbers = [1,2,3,4,5];
//const filtrarNumerosImparesComFor = (array) => {
   // const numerosImpares = [];
   // for (let index = 0; index <array.length; index++) {    
      //  if ( array [index] % 2 === 1) {
      //  numerosImpares.push(array [index]) }
   // }
   // return numerosImpares;
//};
const withFilter = ((array) => array.filter((item) => item % 2 === 1 ));
console.log(withFilter(numbers));

console.log(withFilter([10,11,13,23,45,66,78]));
//coloquei aqui para mostrar o porque não  tem o numbers na função. Ele só precisa ser adicionado no console.log, mas a função funciona com qualquer parametro