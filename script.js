function verificar_caracteres() {
    if (caracteres_senha.length < 8) { 
        alert("Sua senha deve conter mais de 8 digitos!")

    } else if (caracteres_senha.length > 15) {
        alert("A senha deve conter entre 8 e 15 caracteres!")
    } else {
        verifica_letras_maiusculas()
        verificaNum()
        verificaEspeciais()

        if(controlMaiusculas == true && controlNum == true && controlEspeciais == true){
            alert("Sua senha atende a todos os requisitos")
        } else {
            alert("A senha deve conter pelo menos um letra maiuscula, um número e um caractere especial (@,#,$)")
            window.location.reload();
        }
    }
}

function armazena_senha() {
    caracteres_senha.push(valorSenha.value)
}

function verifica_letras_maiusculas() { // Ok
    for (i = 0; i < caracteres_maiusculos.length; i++) {
        if (caracteres_senha[caracteres_senha.length - 1][k] == caracteres_maiusculos[i]) {  // Ok
            controlMaiusculas = true
            k = 0
            break
        } else {
            controlMaiusculas = false
        }
    }
    verificarParte2_caracteresMaiusculas()
}

function verificarParte2_caracteresMaiusculas() { // Ok
    k = 0 
    k++
    while (caracteres_senha[caracteres_senha.length - 1][k] != caracteres_maiusculos[i]) {
        if (controlMaiusculas == false) {
            for (i = 0; i < caracteres_maiusculos.length; i++) {
                if (caracteres_senha[caracteres_senha.length - 1][k] == caracteres_maiusculos[i]) {  
                    controlMaiusculas = true
                    k = 0
                    break
                } else {
                    controlMaiusculas = false
                }
            }
        }

        if(controlMaiusculas == true){ // Verifica se a var controlMaiusculas é igual a true para evitar loop infinito
            break
        } else {
            k++
        }
    }
}
