/*Filter vai sempre retornar um array com o mesmo tanto de elementos do que o
array original ou menos.*/
const numbers = [5, 2, 6, 10, 15 , 20, 30];
const numerosFiltrados = numbers.filter((n) =>  n > 10 );

///console.log(numerosFiltrados)

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

///Retorne as pessoas que tem o nome com 5 letras ou mais.
/// Retorne as pessoas com mais de 50 anos
///Retorne as pessoas com o nome que termina com 'a'

const pessoas = entrants.filter((letras) => letras.name.length >= 12 );
const older = entrants.filter((age) => age.age >= 50 );
const as = entrants.filter((a) => a.name.endsWith('a'));
console.log(as)
