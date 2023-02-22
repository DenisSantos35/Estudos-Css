let mod = [1,1,1,3,3,3,4,4,5,5,5,6,6,6,7,7,7,]
let cont = 0
let aux = 0
let aux1 = 2
let modas = []
let flag = 0;
let novaModa = []

function moda(array){    
    for(let i of array){
        for(let j of array){
            if(i == j){
                cont += 1;
            }
        }
        if(aux < cont){
            aux = cont;
        }
        cont = 0;
    }
    let valor = Math.max(...array)
    console.log(valor)
    for(let i = 0; i <= valor; i++){
        console.log(i)
        for(let j of array){
            if(i == j){
                console.log(i,j)
                cont += 1;
            } 
            if(aux1 < cont){            
                aux1 = cont;   
                console.log(aux1)                  
            }            
        }
        
        if(aux1 === aux && flag == 0 ){  
            modas.push(i)  
            aux1 = 0                                     
        }                       
        cont = 0;       
    }   
    return modas       
}
let repetido = moda(mod)
console.log(repetido)