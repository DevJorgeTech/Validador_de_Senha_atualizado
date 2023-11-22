function verificaNum() {
    k = 0
    for (i = 0; i < caracteres_num.length; i++) {
        if (caracteres_senha[caracteres_senha.length - 1][k] === caracteres_num[i]) {  // Ok
            controlNum = true
            k = 0
            break
        } else {
            controlNum = false
        }
    }
    verificaNumParte2()
}

function verificaNumParte2() {
    k = 0
    k++
    while (caracteres_senha[caracteres_senha.length - 1][k] != caracteres_num[i]) {
        if (controlNum == false) {
            for (i = 0; i < caracteres_num.length; i++) {
                if (caracteres_senha[caracteres_senha.length - 1][k] == caracteres_num[i]) {  // Ok
                    controlNum = true
                    k = 0
                    break
                } else {
                    controlNum = false
                }
            }
        }
        if (controlNum == true) { // Verifica se a var controlMaiusculas é igual a true para evitar loop infinito
            break
        } else {
            k++
        }
    }
}

function verificaEspeciais() {
    k = 0
    for (i = 0; i < caracteres_especiais.length; i++) {
        if (caracteres_senha[caracteres_senha.length - 1][k] === caracteres_especiais[i]) {  // Ok
            controlEspeciais = true
            k = 0
            console.log(caracteres_senha[caracteres_senha.length - 1][k] + " é igual a " + caracteres_especiais[i]);
            break
        } else {
            controlEspeciais = false
            console.log(caracteres_senha[caracteres_senha.length - 1][k] + " não é igual a " + caracteres_especiais[i]);
        }
    }
    verificaEspeciaisParte2()
}

function verificaEspeciaisParte2() {
    k = 0
    k++
    while (caracteres_senha[caracteres_senha.length - 1][k] != caracteres_especiais[i]) {
        if (controlEspeciais == false) {
            for (i = 0; i < caracteres_especiais.length; i++) {
                if (caracteres_senha[caracteres_senha.length - 1][k] == caracteres_especiais[i]) {  // Ok
                    controlEspeciais = true
                    console.log(caracteres_senha[caracteres_senha.length - 1][k] + " é igual a " + caracteres_especiais[i]);
                    k = 0
                    break
                } else {
                    controlEspeciais = false
                    console.log(caracteres_senha[caracteres_senha.length - 1][k] + " não é igual a " + caracteres_especiais[i]);
                }
            }
        }
        if (controlEspeciais == true) { // Verifica se a var controlEspeciais é igual a true para evitar loop infinito
            break
        } else {
            k++
        }
    }
}