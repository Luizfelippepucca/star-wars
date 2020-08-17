function getDataApi(){//consumir api.
fetch('https://swapi.dev/api/people')
.then(function(response){
    return response.json();
})
.then(function(data){

    //gerar card.

    let card = '<ul>';

    for( let i = 0; i<data.results.length;i++){
            
        card = card +'<li>'+ '<h3>' +'Ver mais'+ '</h3>'+ data.results[i].name +'<br>'+
         '<h4>'+' Peso:'+ ' ' + data.results[i].mass +'</h4>'+ 
         '<h4>'+' Altura:'+ ' ' + data.results[i].height +'</h4>'+ 
         
         '<h4>'+' Skin:'+ ' ' + data.results[i].skin_color +'</h4>'+
        '</li>'; 
       
  };

   card = card + '</ul>';
   document.getElementById('card').innerHTML = card;
  
   
   //funcionalidade de ver Mais : código abaixo;
   let selecionar = document.querySelectorAll('h3');
   let selecionar2 = document.querySelectorAll('h4');
  
  
  
    for(let i = 0; i<selecionar.length;i++){
            
        selecionar[i].addEventListener('click', function(){ // adicionando classe em todos h4.
                 
            for(let i= 0; i<selecionar2.length;i++){

            
                if(selecionar2[i].classList.contains('verMais')==false){
                   
                    selecionar2[i].classList.add('verMais');
                }else{
                    selecionar2[i].classList.remove('verMais');
                };
                
            };

                if(selecionar2[i].classList.contains('verMais')== true){
                    selecionar[i].innerHTML ='Ver menos';
                }else{
                    selecionar[i].innerHTML = 'Ver mais';
                };

            
             
        });

       
    };


    //Pesquisar personagem.

    let buscar = document.getElementById('pesquisar');
    let resultado = document.querySelectorAll('li');
    
    

        buscar.addEventListener('keyup',function(){
                

              
            if( buscar.value == 'luke' || buscar.value == 'Luke' || buscar.value == 'skywalker'){
            
                resultado[0].style.display='block';
            }else{
                resultado[0].style.display='none';
            };

            if( buscar.value == 'c-3po' || buscar.value == 'C-3PO'|| buscar.value == 'c3po' || buscar.value == 'C3PO'){
            
                resultado[1].style.display='block';
            }else{
                resultado[1].style.display='none';
            } ;

            if( buscar.value == 'R2-D2' || buscar.value == 'r2-d2'|| buscar.value == 'r2d2' || buscar.value == 'R2D2'){
            
                resultado[2].style.display='block';
            }else{
                resultado[2].style.display='none';
            } ;

            if( buscar.value == 'Darth Vader' || buscar.value == 'darth vader'|| buscar.value == 'vader' || buscar.value == 'darth'){
            
                resultado[3].style.display='block';
            }else{
                resultado[3].style.display='none';
            } ;

            if( buscar.value == 'leia' || buscar.value == 'Leia'){
            
                resultado[4].style.display='block';
            }else{
                resultado[4].style.display='none';
            } ;
            if( buscar.value == 'owen' || buscar.value == 'Owen'|| buscar.value == 'Lars'|| buscar.value == 'lars'){
            
                resultado[5].style.display='block';
            }else{
                resultado[5].style.display='none';
            } ;

            if( buscar.value == 'beru' || buscar.value == 'Beru'|| buscar.value == 'whitesun'|| buscar.value == 'WhiteSun'){
            
                resultado[6].style.display='block';
            }else{
                resultado[6].style.display='none';
            } ;
            if( buscar.value == 'r5d4' || buscar.value == 'R5D4'|| buscar.value == 'r5-d4'|| buscar.value == 'R5-D4'){
            
                resultado[7].style.display='block';
            }else{
                resultado[7].style.display='none';
            } ;

            if( buscar.value == 'Biggs' || buscar.value == 'biggs'||buscar.value == 'bigg'){
            
                resultado[8].style.display='block';
            }else{
                resultado[8].style.display='none';
            } ;

            if( buscar.value == 'Obi' || buscar.value == 'obi'||buscar.value == 'Obi-Wan' ||buscar.value == 'obi-wan' ||buscar.value == 'Obi-Wan Kenobi' ||buscar.value == 'kenobi'||buscar.value == 'Kenobi'){
            
                resultado[9].style.display='block';
            }else{
                resultado[9].style.display='none';
            } ;
           
                
            
        });
        

        console.log(data.results);  

          

   


    
    
  
  
 
})};






















