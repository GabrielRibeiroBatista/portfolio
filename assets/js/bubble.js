// Lógica para o balão de notificação do chatbot
document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const chatToggle = document.getElementById('chat-toggle');

    // Se algum elemento essencial não for encontrado, o script não executa.
    if (!bubble || !chatWindow || !chatToggle) {
        console.warn('Elementos para o balão de notificação do chat não encontrados.');
        return;
    }

    let bubbleInterval; // Variável para guardar nosso loop de tempo

    // Função para mostrar o balão
    const showBubble = () => {
        // Não mostra o balão se a janela do chat já estiver aberta
        if (chatWindow.style.display === 'flex') return;
        bubble.classList.add('is-visible');
    };

    // Função para esconder o balão
    const hideBubble = () => {
        bubble.classList.remove('is-visible');
    };

    // Função que inicia o ciclo de aparições do balão
    const startBubbleCycle = () => {
        // 1. Aparição inicial, 2 segundos após a página carregar
        setTimeout(() => {
            showBubble();
            // Esconde após 3 segundos
            setTimeout(hideBubble, 3000);
        }, 2000);

        // 2. Aparições recorrentes a cada 10 segundos
        bubbleInterval = setInterval(() => {
            showBubble();
            // Esconde após 3 segundos
            setTimeout(hideBubble, 3000);
        }, 10000);
    };

    // Função para parar o ciclo permanentemente
    const stopBubbleCycle = () => {
        clearInterval(bubbleInterval); // Para o loop
        hideBubble(); // Esconde o balão caso ele esteja visível
    };

    // Inicia todo o processo
    startBubbleCycle();

    // Para o ciclo para sempre na primeira vez que o usuário clicar para abrir o chat.
    // O { once: true } garante que este evento só dispare uma única vez.
    chatToggle.addEventListener('click', stopBubbleCycle, { once: true });
});