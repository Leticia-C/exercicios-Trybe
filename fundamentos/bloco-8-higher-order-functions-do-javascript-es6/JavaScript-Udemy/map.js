/// Dobre os números
const numbers = [5, 2, 6, 10, 15 , 20, 30];

const dobrarValor = numbers.map((n) => n * 2)



const entrants = [
    { name: 'Lara Carvalho', age: 5 },
    { name: 'Frederico Moreira', age: 5 },
    { name: 'Pedro Henrique Carvalho', age: 5 },
    { name: 'Maria Costa', age: 18 },
    { name: 'Núbia Souza', age: 18 },
    { name: 'Carlos Nogueira', age: 50 },
  ];
 ///Para cada elemento:
/// Retorne apenas uma string com o nome da Pessoa
const getName = entrants.map((names)=> names.name)

///Remova apenas a chave 'nome' da pessoa
///const removeName = entrants.map((name)=>
 ///delete name.name)
///console.log(removeName);
///Adicione uma chave id em cada objeto
const creatId = entrants.map(function(obj, indice )  {
 const newObj =  {...obj}
newObj.id = indice;
return newObj;})
console.log(creatId);
///map altera valor original d objeto, se eu não quero que ocorra eu faço como acima e crio um novo obj
