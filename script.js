document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-container");
    const imgExpandida = document.getElementById("img-expandida");
    const btnFechar = document.querySelector(".fechar");

    // Seleciona todas as imagens dentro das galerias de fotos
    const imagensGaleria = document.querySelectorAll(".fotos-grid img");

    imagensGaleria.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex"; // Mostra o modal
            imgExpandida.src = img.src;    // Copia o link da imagem clicada para o modal
        });
    });

    // Fecha o modal ao clicar no 'X'
    btnFechar.onclick = () => {
        modal.style.display = "none";
    };

    // Fecha o modal ao clicar fora da imagem
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});