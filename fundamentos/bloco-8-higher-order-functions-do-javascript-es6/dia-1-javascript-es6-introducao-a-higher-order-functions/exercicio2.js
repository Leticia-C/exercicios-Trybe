/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/
///Minha solução
const sorteio = (min, max) => {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min)) + min;
}

const number = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min)) + min;
}//// pesquisa realizada em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function result() {
    if (sorteio('number') === number('number')) {
        return console.log("Parabéns você ganhou");
    } else {
        return console.log("Tente novamente");
    }
}
console.log(result()); 
///Gabarito
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
////Se você por acaso não comprendeu a sintaxe com ? e : não se preocupe. Este tipo de validação é conhecido como "operador ternário" e é uma alternativa para se realizar uma validação if , else onde ? é equivalente ao if e : ao else . Desta forma, o que está acontecendo é: O retorno da função numberChecker é verdadeiro ? se sim retorne 'Lucky day, you won!' , se não : , retorne 'Try Again!' .