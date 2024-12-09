//Script that draws a shape that resembles a ladder, using any kind of symbol (like #, @, etc), wich are provided by the user. 

function imprime(simbolo, n){
    array = [simbolo];

    let nova = simbolo;

    for (i = 0; i < n; i++){
        
        nova += simbolo; 
        array.push(nova);
        console.log(array[i]);
    }
} 

//Function call, informing wich charater is to be used to draw the ladder, and how many steps it should have.
imprime("*", 5);