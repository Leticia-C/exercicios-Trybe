   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById() 
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
     
    function changeText(){
     let text = document.getElementsByTagName('p')[0] ;
    text.innerHTML = 'Daqui a 2 anos eu me vejo trabalhando como Dev, independente financeiramente e praticando meus hobbys';
    }
    changeText() 
    
      function changeSquareToGreen() {
        let squareYellow = document.getElementsByClassName('main-content')[0];
        squareYellow.style.background = "rgb(76,164,109)";
      }
      changeSquareToGreen();
     
   function changeSquareToRed (){
       let squareWhite = document.getElementsByClassName('center-content')[0]; ///descobrir por que é sem ponto se é class
        squareWhite.style.background = 'white' ;
   } changeSquareToRed();
     
  function correctTag () {
      let correct =  document.getElementsByTagName ('h1')[0]; ///mesmo que tenha só uma tag usar index
      correct.innerHTML =  'Exercício 5.1 - JavaScript';
  } correctTag();

  function tagCapital() {
      let capital =  document.getElementsByTagName ('p')[0];
      capital.innerHTML =capital.innerHTML.toUpperCase();}
        tagCapital();

        function showParagraphs() {
            let paragraphs = document.getElementsByTagName('p');
            for (let index = 0; index < paragraphs.length; index += 1) {
              console.log(paragraphs[index].innerHTML);
            }
          }
        showParagraphs();