"use strict"
//Function for four operations
function Operacoes(operadores, n1, n2) {
    let Result = 0
    switch (operadores) {
        case 'soma':
            Result = n1 + n2
            break
        case 'subtraçao': 
            Result = n1 - n2
            break
        case 'multiplicaçao':
            Result = n1 * n2
            break
        case 'divisao':
            if(n1 > n2) {
                Result = n1 / n2
            }else if (n2 < n1) {
                Result = n2 / n1
            }
            break
        default:
            Result = 'operaçao invalida'
            break
    }
    return Result 
}
//Fuction for Especial cases
function Especial(ope, n1, V=0) {
    let Res = 0
    switch (ope) {
        case 'Exponenciaçao':
            Res = Math.pow(n1, V)
            break
        case 'Raiz':
            Res = Math.sqrt(n1)
            break
    }
    return Res
}
//Values and Operation select
const Escolha = 'Exponenciaçao'
const V1 = 10
const v2 = 5
const Exp = 2
//Select operation
if (Escolha == 'soma'||Escolha == 'subtraçao'||Escolha == 'divisao'||Escolha == 'multiplicaçao'){
    console.log('o resultado da operaçao: '+Escolha+' é: ' + Operacoes(Escolha, V1, v2))
}else if(Escolha == 'Exponenciaçao'||Escolha == 'Raiz'){
//raiz
    if(Escolha == 'Exponenciaçao'){
        console.log('o resultado da operaçao: Exponenciaçao é: '+ Especial(Escolha,V1,Exp))
//Raiz
    }else if(Escolha == 'Raiz'){
        console.log('o resultado da operaçao:'+Escolha+' é: '+ Especial(Escolha,V1))
    }
}