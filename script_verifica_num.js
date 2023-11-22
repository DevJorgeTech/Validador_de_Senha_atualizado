function verificaNum() {
    for (l = 0; l < caracteres_num.length; l++) {
        if (caracteres_senha[caracteres_senha.length - 1][t] === caracteres_num[l]) {  // Ok
            controlNum = true
            t = 0
            break
        } else {
            controlNum = false
        }
    }
    verificaNumParte2()
}

function verificaNumParte2() {
    t++
    while (caracteres_senha[caracteres_senha.length - 1][t] != caracteres_num[l]) {
        if (controlNum == false) {
            for (l = 0; l < caracteres_num.length; l++) {
                if (caracteres_senha[caracteres_senha.length - 1][t] == caracteres_num[l]) {  // Ok
                    controlNum = true
                    break
                } else {
                    controlNum = false
                }
            }
        }
        if (controlNum == true) { // Verifica se a var controlMaiusculas é igual a true para evitar loop infinito
            break
        } else {
            t++
        }
    }
}

function verificaEspeciais() {
    for (p = 0; p < caracteres_especiais.length; p++) {
        if (caracteres_senha[caracteres_senha.length - 1][q] === caracteres_especiais[p]) {  // Ok
            controlEspeciais = true
            q = 0
            break
        } else {
            controlEspeciais = false
        }
    }
    verificaEspeciaisParte2()
}

function verificaEspeciaisParte2() {
    q++
    while (caracteres_senha[caracteres_senha.length - 1][q] != caracteres_especiais[p]) {
        if (controlEspeciais == false) {
            for (p = 0; p < caracteres_especiais.length; p++) {
                if (caracteres_senha[caracteres_senha.length - 1][q] == caracteres_especiais[p]) {  // Ok
                    controlEspeciais = true
                    break
                } else {
                    controlEspeciais = false
                }
            }
        }
        if (controlEspeciais == true) { // Verifica se a var controlEspeciais é igual a true para evitar loop infinito
            break
        } else {
            q++
        }
    }
}