let stringa_risultato = document.getElementsByTagName('div')[0].getElementsByTagName('p')[0]
let lista_da_calcolare = []
let var_numero = ''

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
function aggiungi_diviso(){
    stringa_risultato.innerText += '/'
    lista_da_calcolare.push(parseInt(var_numero))
    lista_da_calcolare.push('/')
    var_numero = ''
    console.log(lista_da_calcolare)
}
function aggiungi_per(){
    stringa_risultato.innerText += '*'
    lista_da_calcolare.push(parseInt(var_numero))
    lista_da_calcolare.push('*')
    var_numero = ''
}
function aggiungi_meno(){
    stringa_risultato.innerText += '-'
    lista_da_calcolare.push(parseInt(var_numero))
    lista_da_calcolare.push('-')
    var_numero = ''
}
function aggiungi_piu(){
    stringa_risultato.innerText += '+'
    lista_da_calcolare.push(parseInt(var_numero))
    lista_da_calcolare.push('+')
    var_numero = ''
}
function cancella(){
}
function aggiungi_punto(){
    stringa_risultato.innerText += '.'
    var_numero += '.'
}
function mostra_risultato(){
    lista_da_calcolare.push(parseInt(var_numero))
    var_numero = ''
    console.log(lista_da_calcolare)
    while (lista_da_calcolare.length > 1) {
        for (let index = 0; index < lista_da_calcolare.length; index++) {
            if (lista_da_calcolare[index] == '*' || lista_da_calcolare[index] == '/'){
                if (lista_da_calcolare[index] == '*'){
                    lista_da_calcolare[index] = lista_da_calcolare[index-1] * lista_da_calcolare[index+1]
                    lista_da_calcolare.splice(lista_da_calcolare[index-1],1)
                    lista_da_calcolare.splice(lista_da_calcolare[index],1)

                }else{
                    lista_da_calcolare[index] = lista_da_calcolare[index-1] / lista_da_calcolare[index+1]
                    lista_da_calcolare.splice(lista_da_calcolare[index-1],1)
                    lista_da_calcolare.splice(lista_da_calcolare[index],1)

                }
            }else{
                if (lista_da_calcolare[index] == '+'){
                    lista_da_calcolare[index] = lista_da_calcolare[index-1] + lista_da_calcolare[index+1]
                    lista_da_calcolare.splice(lista_da_calcolare[index-1],1)
                    lista_da_calcolare.splice(lista_da_calcolare[index],1)

                }else{
                    lista_da_calcolare[index] = lista_da_calcolare[index-1] - lista_da_calcolare[index+1]
                    lista_da_calcolare.splice(lista_da_calcolare[index-1],1)
                    lista_da_calcolare.splice(lista_da_calcolare[index],1)

                }
            }
        }
    }
}