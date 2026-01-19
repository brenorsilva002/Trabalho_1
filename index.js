let nomeH = "Breno"
let XP = 10000
let nivel = ""

switch (true) {
    case (XP <= 1000):
        nivel = "Ferro"
        break;
    case (XP <= 2000):
        nivel = "Bronze"
        break;
    case (XP <= 5000):
        nivel = "Prata"
        break;
    case (XP <= 7000):
        nivel = "Ouro"
        break;
    case (XP <= 8000):
        nivel = "Platina"
        break;
    case (XP <= 9000):
        nivel = "Ascendente"
        break;
    case (XP <= 10000):
        nivel = "Imortal"
        break;
    default:
        nivel = "Radiante"
}

console.log("O Herói de nome " + nomeH + "está no nível de " + nivel );
