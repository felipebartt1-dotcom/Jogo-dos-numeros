/* ========================= */
/* CONFIGURAÇÕES INICIAIS    */
/* ========================= */

// Define o valor máximo para o número secreto
let numeroMaximo = 100;

// Gera um número aleatório entre 1 e numeroMaximo
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

// Contador de tentativas do jogador
let tentativas = 0;


/* ========================= */
/* INICIALIZAÇÃO DO SISTEMA  */
/* ========================= */

// Aguarda o carregamento completo do HTML antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão de chute
    let botao = document.getElementById('botaoChutar');

    // Adiciona evento de clique ao botão
    botao.addEventListener('click', verificarChute);
});


/* ========================= */
/* FUNÇÃO PRINCIPAL DO JOGO  */
/* ========================= */

function verificarChute() {

    // Captura os elementos do input e da mensagem
    let input = document.getElementById('chute');
    let mensagem = document.getElementById('mensagem');

    // Converte o valor digitado para número
    let chute = Number(input.value);

    /* ========================= */
    /* VALIDAÇÃO DO INPUT        */
    /* ========================= */

    // Verifica se o valor é inválido, vazio ou fora do intervalo permitido
    if (!chute || chute < 1 || chute > numeroMaximo) {
        mensagem.innerText = `Digite um número válido entre 1 e ${numeroMaximo}.`;
        return; // Interrompe a execução
    }

    // Incrementa o número de tentativas
    tentativas++;

    /* ========================= */
    /* LÓGICA DO JOGO            */
    /* ========================= */

    // Se o jogador acertar o número secreto
    if (chute === numeroSecreto) {

        mensagem.innerText = `Parabéns! Você acertou em ${tentativas} tentativa(s)!`;

        // Altera o botão para reiniciar o jogo
        let botao = document.getElementById('botaoChutar');
        botao.innerText = 'Jogar novamente';

        // Troca a função do botão
        botao.onclick = reiniciarJogo;

    } 
    
    // Se o chute for menor que o número secreto
    else if (chute < numeroSecreto) {
        mensagem.innerText = `O número secreto é maior que ${chute}.`;
    } 
    
    // Se o chute for maior que o número secreto
    else {
        mensagem.innerText = `O número secreto é menor que ${chute}.`;
    }

    /* ========================= */
    /* LIMPEZA DO INPUT          */
    /* ========================= */

    // Limpa o campo de entrada
    input.value = '';

    // Mantém o foco no input para facilitar novas tentativas
    input.focus();
}


/* ========================= */
/* REINÍCIO DO JOGO          */
/* ========================= */

function reiniciarJogo() {

    // Gera um novo número secreto
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

    // Reseta o contador de tentativas
    tentativas = 0;

    // Limpa a mensagem na tela
    document.getElementById('mensagem').innerText = '';

    // Limpa o campo de input
    document.getElementById('chute').value = '';

    // Restaura o botão para o estado inicial
    let botao = document.getElementById('botaoChutar');
    botao.innerText = 'Chutar';

    // Reatribui a função original do botão
    botao.onclick = verificarChute;
}