let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let tentativas = 0;

document.addEventListener('DOMContentLoaded', () => {
    let botao = document.getElementById('botaoChutar');
    botao.addEventListener('click', verificarChute);
});

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
        mensagem.innerText = `Parabéns! Você acertou em ${tentativas} tentativa(s)!`;

        let botao = document.getElementById('botaoChutar');
        botao.innerText = 'Jogar novamente';
        botao.onclick = reiniciarJogo;

    } else if (chute < numeroSecreto) {
        mensagem.innerText = `O número secreto é maior que ${chute}.`;
    } else {
        mensagem.innerText = `O número secreto é menor que ${chute}.`;
    }

    input.value = '';
    input.focus();
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    tentativas = 0;

    document.getElementById('mensagem').innerText = '';
    document.getElementById('chute').value = '';

    let botao = document.getElementById('botaoChutar');
    botao.innerText = 'Chutar';
    botao.onclick = verificarChute;
}