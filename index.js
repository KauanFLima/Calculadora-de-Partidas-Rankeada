let vitorias = 88
let derrotas = 28
let saldoVitorias = ""
let ranking = ""
let nickname = "ExeLima"

function calculadoraDoRanking(){
    saldoVitorias = vitorias - derrotas
}

calculadoraDoRanking()

if (saldoVitorias <= 10) ranking = "Ferro"
else if (saldoVitorias >= 11 && saldoVitorias < 20) ranking = "Bronze"
else if (saldoVitorias >= 21 && saldoVitorias < 50) ranking = "Prata"
else if (saldoVitorias >= 51 && saldoVitorias < 80) ranking = "Ouro"
else if (saldoVitorias >= 81 && saldoVitorias < 90) ranking = "Diamente"
else if (saldoVitorias >= 91 && saldoVitorias < 100) ranking ="Lendário"
else if (saldoVitorias >= 101) ranking = "Imortal"

console.log("O Herói de nome " + nickname + " tem de saldo de " + saldoVitorias + " vitórias e está no nível de " + ranking)