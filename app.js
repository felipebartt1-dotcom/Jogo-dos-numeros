/* ========================= */
/* CONFIGURAÇÕES INICIAIS    */
/* ========================= */

let numeroMaximo = 100;
let numeroSecreto;
let tentativas;
let jogadorAtual = "";

// Armazena histórico de jogadores
let ranking = [];


/* ========================= */
/* INICIALIZAÇÃO             */
/* ========================= */

document.addEventListener('DOMContentLoaded', () => {
    iniciarJogo();
});


/* ========================= */
/* INÍCIO DO JOGO            */
/* ========================= */

function iniciarJogo() {

    jogadorAtual = prompt("Digite seu nome:");

    // Evita jogador sem nome (porque sempre tem um)
    if (!jogadorAtual) {
        jogadorAtual = "Jogador sem nome";
    }

    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    tentativas = 0;

    document.getElementById('mensagem').innerText = 
        `Boa sorte, ${jogadorAtual}!`;
    
    configurarBotao(verificarChute, "Chutar");
}


/* ========================= */
/* VERIFICAÇÃO DO CHUTE      */
/* ========================= */

function verificarChute() {

    let input = document.getElementById('chute');
    let mensagem = document.getElementById('mensagem');

    let chute = Number(input.value);

    if (!chute || chute < 1 || chute > numeroMaximo) {
        mensagem.innerText = `Digite um número válido entre 1 e ${numeroMaximo}.`;
        return;
    }

    tentativas++;

    if (chute === numeroSecreto) {

        mensagem.innerText = 
            `🎉 ${jogadorAtual}, você acertou em ${tentativas} tentativa(s)!`;

        // Salva no ranking
        ranking.push({
            nome: jogadorAtual,
            tentativas: tentativas
        });

        mostrarRanking();

        configurarBotao(novoJogador, "Novo jogador");

    } else if (chute < numeroSecreto) {
        mensagem.innerText = `O número secreto é maior que ${chute}.`;
    } else {
        mensagem.innerText = `O número secreto é menor que ${chute}.`;
    }

    input.value = '';
    input.focus();
}


/* ========================= */
/* NOVO JOGADOR              */
/* ========================= */

function novoJogador() {
    iniciarJogo();
}


/* ========================= */
/* CONFIGURAÇÃO DO BOTÃO     */
/* ========================= */

function configurarBotao(funcao, texto) {
    let botao = document.getElementById('botaoChutar');

    botao.innerText = texto;
    botao.onclick = funcao;
}


/* ========================= */
/* RANKING                   */
/* ========================= */

function mostrarRanking() {

    // Ordena por menor número de tentativas (melhor desempenho)
    ranking.sort((a, b) => a.tentativas - b.tentativas);

    let resultado = "🏆 Ranking:\n";

    ranking.forEach((jogador, index) => {
        resultado += `${index + 1}. ${jogador.nome} - ${jogador.tentativas} tentativa(s)\n`;
    });

    alert(resultado);
}