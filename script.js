function verificar_caracteres(){
    if(caracteres_senha.length < 8){
        alert("Sua senha deve conter mais de 8 digitos!")

    } else if (caracteres_senha.length > 15) {
        alert("A senha deve conter entre 8 e 15 caracteres!")
    } else {
        verifica_letras_maiusculas()
    }
}

function armazena_senha(){
    caracteres_senha.push(valorSenha.value)
    console.log("Valor caracte " + caracteres_senha[i++]); // função ok
}

function verifica_letras_maiusculas(){
    caracteres_maiusculos = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for(j = 0; j < caracteres_maiusculos.length; j++){
        if(caracteres_senha[j][j] == caracteres_maiusculos[j]){  // Desenvolvendo metodo para verificar as letras maiusculas;
            alert("Sua senha tem letras maisculas")              // Não concluido
        } else {
            alert("teste")
        }
    }
}