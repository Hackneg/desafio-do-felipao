// # 1️⃣ Desafio Classificador de nível de Herói
let nome = "HackGal";
let XP = 7000
let nivel = " ";
    
 if (XP <= 1000) {
     nivel = "Ferro"
     console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    } 
    else if (XP >= 1001 & XP <= 2000) {
        nivel = "Bronze";
        console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    } 
    else if (XP >= 2001 & XP <= 2000) {
        nivel = "Prata";
        console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    } 
    else if (XP >= 6001 & XP <= 7000) {
        nivel = "Ouro";
        console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    } 
    else if (XP >= 7001 & XP <= 8000) {
        nivel = "Platina";
        console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    } 
    else if (XP >= 8001 & XP <= 9000) {
        nivel = "Ascendente";
        console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    } 
    else if (XP >= 9001 & XP <= 10000) {
        nivel = "Imortal";
        console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    } 
    else if (XP >= 10001) {
        nivel = "Radiante";
        console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    }
