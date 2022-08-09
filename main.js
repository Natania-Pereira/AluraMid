    function tocaSom (seletorAudio) {

        const elemento = document.querySelector(seletorAudio);


        if(elemento != null && elemento.localName === 'audio' ){
            
                //console.log(elemento);
                elemento.play();
                
        } 
        else{
            console.log('Elemento não encontrado ou seletor inválido');
        }
    }
 
    
    const listaDeTeclas = document.querySelectorAll('.tecla');

    //let contador = 0;


  for (let contador = 0; contador < listaDeTeclas.length; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
      
        const idAudio = `#som_${instrumento}`; 
    
        tecla.onclick = function () {

            tocaSom(idAudio);
           
        }

        tecla.onkeydown = function (evento){
            
        
            if(evento.code === 'Space' || evento.code === 'Enter'){
                tecla.classList.add('ativa');
            }
        
            
        }
        
        tecla.onkeyup = function (){

            tecla.classList.remove('ativa');
        }
    }


    //Template string > ao inserir esse trecho de código vou estar unindo a string #som com o que há dentro da váriavel instrumento
     //function () é uma função anonima, sem nome com ela é possível chamar a função tocaSom com parametros ()

    //document.query.SelectorAll retorna uma lista de todos elementes que possuem a classe .tecla

    //document.querySelector('.tecla_pom').onclick = tocaSomPom;

    //Para que o código seja executado corretamente é necessário remover os () da função do tocaSomPom,
    // pois assim a função não será executada no mesmo momento em que é chamada, só quando se clicar no botão

    // Ao utilizarmos esse script, ao invés de capturarmos um elemento por vez, 
    //conseguimos pegar todos de uma só vez. Portanto isto facilitará a manipulação, 
    //reutilização e manutenção do nosso código para todos os elementos que recebem o mesmo tipo de função.

    //listaDeTeclas é um array que recebe todas as teclas de som, cada posição é uma tecla

    //para utilizar querySelector com input >> const listaDeTeclas = document.querySelectorAll('input[type=button]');

    //funções anonimas - não precisa de nome, é uma solução para chamar uma função com ()