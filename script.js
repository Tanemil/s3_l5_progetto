
// stringa contenente i valori del display
let stringa_risultato = document.getElementsByTagName('div')[0].getElementsByTagName('p')[0]

// storico di tutte gli imput trasformati in lista
let lista_da_calcolare = []

// variabile per separare i numeri dalle operazioni
let var_numero = ''


// queste funzioni aggiungono il numero desiderato al display e aggiornano var_numero
function aggiungi_0(){
    stringa_risultato.innerText += '0'
    var_numero += '0'
}
function aggiungi_1(){
    stringa_risultato.innerText += '1'
    var_numero += '1'
}
function aggiungi_2(){
    stringa_risultato.innerText += '2'
    var_numero += '2'
}
function aggiungi_3(){
    stringa_risultato.innerText += '3'
    var_numero += '3'
}
function aggiungi_4(){
    stringa_risultato.innerText += '4'
    var_numero += '4'
}
function aggiungi_5(){
    stringa_risultato.innerText += '5'
    var_numero += '5'
}
function aggiungi_6(){
    stringa_risultato.innerText += '6'
    var_numero += '6'
}
function aggiungi_7(){
    stringa_risultato.innerText += '7'
    var_numero += '7'
}
function aggiungi_8(){
    stringa_risultato.innerText += '8'
    var_numero += '8'
}
function aggiungi_9(){
    stringa_risultato.innerText += '9'
    var_numero += '9'
}
function aggiungi_punto(){
    stringa_risultato.innerText += '.'
    var_numero += '.'
}

/* queste funzioni si occupano delle operiazioni e aggiungono alla
lista di operazioni i numeri + l'operatore */
function aggiungi_diviso(){
    if (var_numero.includes('.')){
        stringa_risultato.innerText += '/'
        lista_da_calcolare.push(parseFloat(var_numero))
        lista_da_calcolare.push('/')
        var_numero = ''
        console.log(lista_da_calcolare)
    }else{
        stringa_risultato.innerText += '/'
        lista_da_calcolare.push(parseInt(var_numero))
        lista_da_calcolare.push('/')
        var_numero = ''
        console.log(lista_da_calcolare)
    }
}
function aggiungi_per(){
    if (var_numero.includes('.')){
        stringa_risultato.innerText += '*'
        lista_da_calcolare.push(parseFloat(var_numero))
        lista_da_calcolare.push('*')
        var_numero = ''
        console.log(lista_da_calcolare)
    }else{
        stringa_risultato.innerText += '*'
        lista_da_calcolare.push(parseInt(var_numero))
        lista_da_calcolare.push('*')
        var_numero = ''
        console.log(lista_da_calcolare)
    }
}
function aggiungi_meno(){
    if (var_numero.includes('.')){
        stringa_risultato.innerText += '-'
        lista_da_calcolare.push(parseFloat(var_numero))
        lista_da_calcolare.push('-')
        var_numero = ''
        console.log(lista_da_calcolare)
    }else{
        stringa_risultato.innerText += '-'
        lista_da_calcolare.push(parseInt(var_numero))
        lista_da_calcolare.push('-')
        var_numero = ''
        console.log(lista_da_calcolare)
    }
}
function aggiungi_piu(){
    if (var_numero.includes('.')){
        stringa_risultato.innerText += '+'
        lista_da_calcolare.push(parseFloat(var_numero))
        lista_da_calcolare.push('+')
        var_numero = ''
        console.log(lista_da_calcolare)
    }else{
        stringa_risultato.innerText += '+'
        lista_da_calcolare.push(parseInt(var_numero))
        lista_da_calcolare.push('+')
        var_numero = ''
        console.log(lista_da_calcolare)
    }
}
//funzione cancella
function cancella(){
    stringa_risultato.innerText = ''
    lista_da_calcolare = []
    var_numero = ''
}

/*funzione risultato che itera la lista di operazioni e svolge prima le divisioni e moltiplicazioni 
e poi le somme e sottrazioni, lasciando un unico valore nella lista che verra' passato al display
come risultato  */
function mostra_risultato(){
    //l'ultimo numero non lo prende nessuno quindi lo fa risultato
    if (var_numero.includes('.')){
        lista_da_calcolare.push(parseInt(var_numero))
        var_numero = ''
    }else{
        lista_da_calcolare.push(parseFloat(var_numero))
        var_numero = ''
    }
    //mi copio la lista per non modificarla
    let lista_risultato = [...lista_da_calcolare]
    //1 perche' quello che mi rimarra' dopo tutte le operazioni e' un elemento, ovvero il risultato
    while (lista_risultato.length > 1) {
        //do priorita' alle moltiplicazioni e divisioni
        if (lista_risultato.includes('*') || lista_risultato.includes('/') ){
            for (let index = 0; index < lista_risultato.length; index++) {
                if (lista_risultato[index] == '*'){
                    let var1 = lista_risultato[index-1]
                    let var2 = lista_risultato[index+1]
                    lista_risultato.splice(index-1,3,var1*var2)
                    //siccome non posso iterare su un array che si rimpicciolisce uso break
                    break
                }else if(lista_risultato[index] == '/'){
                    let var1 = lista_risultato[index-1]
                    let var2 = lista_risultato[index+1]
                    lista_risultato.splice(index-1,3,var1/var2)
                    //siccome non posso iterare su un array che si rimpicciolisce uso break
                    break
                }
            }
        }else{
            for (let index = 0; index < lista_risultato.length; index++) {
                if (lista_risultato[index] == '+'){
                    let var1 = lista_risultato[index-1]
                    let var2 = lista_risultato[index+1]
                    lista_risultato.splice(index-1,3,var1+var2)
                    //siccome non posso iterare su un array che si rimpicciolisce uso break
                    break
                }else if(lista_risultato[index] == '-'){
                    let var1 = lista_risultato[index-1]
                    let var2 = lista_risultato[index+1]
                    lista_risultato.splice(index-1,3,var1-var2)
                    //siccome non posso iterare su un array che si rimpicciolisce uso break
                    break
                }
            }
        }          
    }
    stringa_risultato.innerText = lista_risultato
}