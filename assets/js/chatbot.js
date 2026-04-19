// --- LÓGICA DO CHATBOT COM CONEXÃO AO WEBHOOK E SESSÃO ÚNICA ---

(function() {
  // --- SELEÇÃO DOS ELEMENTOS ---
  const chatWin = document.getElementById('chat-window');
  const chatToggle = document.getElementById('chat-toggle');
  const chatClose = document.getElementById('chat-close');
  const msgsContainer = document.getElementById('chat-messages');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  if (!chatWin || !chatToggle || !chatClose || !msgsContainer || !input || !sendBtn) {
    console.error("Elementos do chatbot não encontrados. Verifique o HTML.");
    return;
  }

  // --- INÍCIO DA ALTERAÇÃO: LÓGICA DE SESSÃO ---

  // Função para obter ou criar um ID de sessão único
  function getSessionId() {
    // 1. Tenta obter o ID do sessionStorage
    let sessionId = sessionStorage.getItem('chatbotSessionId');

    // 2. Se não existir, cria um novo
    if (!sessionId) {
      // Cria um ID simples e único combinando a data atual com um número aleatório
      sessionId = `portfolio-session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      // 3. Salva o novo ID no sessionStorage para ser usado nas próximas mensagens
      sessionStorage.setItem('chatbotSessionId', sessionId);
    }
    return sessionId;
  }

  // --- FIM DA ALTERAÇÃO: LÓGICA DE SESSÃO ---


  // --- FUNÇÕES PARA ABRIR E FECHAR O CHAT ---
  function openChat() {
    chatWin.classList.add('open');
    chatToggle.setAttribute('aria-expanded', 'true');
    input.focus();
  }

  function closeChat() {
    chatWin.classList.remove('open');
    chatToggle.setAttribute('aria-expanded', 'false');
  }

  chatToggle.addEventListener('click', openChat);
  chatClose.addEventListener('click', closeChat);

  // --- FUNÇÕES UTILITÁRIAS DO CHAT ---
  function appendMsg(text, who = 'user') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg msg--${who}`;
    
    // Converte formatação markdown simples em HTML
    if (who === 'bot') {
      // Converte [texto](url) em <a href="url" target="_blank">texto</a>
      text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
      // Converte **texto** em <strong>texto</strong>
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Converte quebras de linha em <br>
      text = text.replace(/\n/g, '<br>');
      msgDiv.innerHTML = text;
    } else {
      msgDiv.textContent = text;
    }
    
    msgsContainer.appendChild(msgDiv);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
  }

  function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg msg--bot';
    typingDiv.innerHTML = '<span class="typing-indicator"></span>';
    typingDiv.querySelector('.typing-indicator').style.cssText = `
        display: inline-block;
        width: 8px; height: 8px; border-radius: 50%; background: #ccc;
        animation: typing-blink 1.4s infinite both;
        animation-delay: 0.2s;
    `;
    msgsContainer.appendChild(typingDiv);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
    return typingDiv;
  }
  
  // --- FUNÇÃO PRINCIPAL DE ENVIO ---
  async function handleSend() {
    const text = (input.value || '').trim();
    if (!text) return;

    appendMsg(text, 'user');
    input.value = '';

    const typingIndicator = showTyping();
    
    const encodedURL = 'aHR0cHM6Ly9hdXRvbWF0aW9uLmhyYzIubmV0LmJyL3dlYmhvb2svNzRmODZlZTItYjM2Ny00ZDFlLWI2MGEtODQzYzk2NTYwM2M0';

    const webhookURL = atob(encodedURL);
    try {
      const requestData = {
        message: text,
        sessionId: getSessionId() 
      };
      
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`Erro na rede: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json();
      const botReply = responseData.output || responseData.reply || "Não recebi uma resposta válida.";
      
      appendMsg(botReply, 'bot');

    } catch (error) {
      console.error('Falha ao contatar o webhook:', error);
      appendMsg('Desculpe, não consegui me conectar ao meu cérebro. Tente novamente mais tarde.', 'bot');
    } finally {
      typingIndicator.remove();
    }
  }

  // --- EVENT LISTENERS PARA O ENVIO ---
  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  });

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes typing-blink {
      0% { opacity: 0.2; }
      20% { opacity: 1; }
      100% { opacity: 0.2; }
    }
  `;
  document.head.appendChild(styleSheet);

})();