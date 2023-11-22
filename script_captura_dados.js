const validarSenha = document.getElementById("validar")
caracteres_num = ["1","2","3","4","5","6","7","8","9","0"]
caracteres_maiusculos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


let valorSenha = document.getElementById("entrada")
let caracteres_senha = []
let j = 0 // usado para percorrer o Array caracteres_maiusculos
let k = 0 // usado como var de controle para a verificação do primeiro digito
let l = 0 // usado para percorrer o Array caracteres_num
let t = 0 // usado como var de controle para a verificação do caractere_num
let p = 0 // usado para percorrer o array caracteres_num
let controlMaiusculas = false
let controlNum = false