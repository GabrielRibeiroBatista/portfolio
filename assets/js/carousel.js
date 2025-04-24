document.addEventListener("DOMContentLoaded", function () {
    const imagens = [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png"
    ];
  
    const path = "assets/image/carrossel/";
    const carousel = document.getElementById("carousel");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
  
    let indexAtual = 0;
  
    // Função para atualizar o modal com a imagem
    function updateModalImage(index) {
      modalImg.src = path + imagens[index];
      indexAtual = index;
    }
  
    // Adiciona as imagens ao carrossel
    imagens.forEach((nome, index) => {
      const img = document.createElement("img");
      img.src = path + nome;
      img.classList.add("carousel-image");
      if (index === 0) img.classList.add("active");
  
      // Ao clicar, exibe a imagem no modal
      img.addEventListener("click", () => {
        modal.style.display = "block";
        updateModalImage(index); // Atualiza a imagem no modal
      });
  
      carousel.appendChild(img);
    });
  
    // Navegar para a imagem anterior
    prevBtn.addEventListener("click", () => {
      const newIndex = (indexAtual - 1 + imagens.length) % imagens.length;
      updateModalImage(newIndex);
    });
  
    // Navegar para a próxima imagem
    nextBtn.addEventListener("click", () => {
      const newIndex = (indexAtual + 1) % imagens.length;
      updateModalImage(newIndex);
    });
  
    // Fechar o modal
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  
    // Fechar o modal clicando fora da imagem
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  
    // Gira o carrossel automaticamente
    setInterval(() => {
      const imgs = document.querySelectorAll("#carousel img");
      imgs[indexAtual].classList.remove("active");
      indexAtual = (indexAtual + 1) % imgs.length;
      imgs[indexAtual].classList.add("active");
    }, 2500);
  });
  