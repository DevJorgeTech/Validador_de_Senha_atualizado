function verificaNum() {
    for (l = 0; l < caracteres_num.length; l++) {
        if (caracteres_senha[caracteres_senha.length - 1][t] === caracteres_num[l]) {  // Ok
            controlNum = true
            alert("Sua senha tem números!!! " + caracteres_num[p]);
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
    while (caracteres_senha[caracteres_senha.length - 1][t] != caracteres_num[p]) {
        if (controlNum == false) {
            for (p = 0; p < caracteres_num.length; p++) {
                if (caracteres_senha[caracteres_senha.length - 1][t] == caracteres_num[p]) {  // Ok
                    controlNum = true
                    alert("Sua senha contém números!!!" + caracteres_num[p])
                    break
                } else {
                    controlNum = false
                }
            }
        }
        if(controlNum == true){ // Verifica se a var controlMaiusculas é igual a true para evitar loop infinito
            break
        } else {
            t++
        }
    }
}