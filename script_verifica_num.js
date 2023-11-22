function verificaNum() {
    caracteres_num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    for (l = 0; l < caracteres_num.length; l++) {
        if (caracteres_senha[caracteres_senha.length - 1][k] == caracteres_num[l]) {  // Ok
            requisto_de_aprovacao_senha2 = true
            alert("requisito 1 " + requisto_de_aprovacao_senha2)
            break
        } else {
            requisto_de_aprovacao_senha2 = false
            console.log("k = " + k); // mostra o valor do digito que está sendo informado
            console.log("Num = " + caracteres_num[l]); // Mostra o Número que está sendo comparado 
            console.log(caracteres_senha[caracteres_senha.length - 1][k]); // Mostra o primeiro digito 
    }
}
}

function verificaNumParte2() {
    k++
    while (caracteres_senha[caracteres_senha.length - 1][k] != verificaNum[j]) {
        console.log("k = " + k);
        if (controlNum == false) {
            for (j = 0; j < verificaNum.length; j++) {
                if (caracteres_senha[caracteres_senha.length - 1][k] == verificaNum[j]) {  // Ok
                    requisto_de_aprovacao_senha2 = true
                    alert("requisito 1 " + requisto_de_aprovacao_senha2)
                    break
                } else {
                    controlNum == false
                }
            }
        }
        k++
    }
}