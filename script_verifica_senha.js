const verificar_senha_input = document.getElementById("verificar_senha")
const entrada = document.getElementById("entrada")


verificar_senha_input.addEventListener("click",function(){
    if (verificar_senha_input.checked){
        entrada.setAttribute("type","text") // Modifica atributos de um elemento HTML ("nome_do_atributo","valor_do_atributo")
    } else {
        entrada.setAttribute("type","password")
    }
})