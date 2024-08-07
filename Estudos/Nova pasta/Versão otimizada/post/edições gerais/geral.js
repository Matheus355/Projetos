  // Função para curtir o post
  let contadorCurtidas = 0;
  function curtirPost() {
      contadorCurtidas++;
      document.getElementById("contador-curtidas").innerText = contadorCurtidas;
      document.getElementById("curtida").classList.add("animar");
      setTimeout(() => {
          document.getElementById("curtida").classList.remove("animar");
      }, 1000); // Remove a classe de animação após 1 segundo
  }
  
// Função para compartilhar o post
function compartilharPost() {
      if (navigator.share) {
          // Se o navegador suportar a API de compartilhamento
          navigator.share({
              title: 'Título do Post', // Título do post
              text: 'Texto do Post', // Conteúdo do post
              url: 'URL do Post' // URL do post
          })
          .then(() => console.log('Post compartilhado com sucesso!'))
          .catch((error) => console.error('Erro ao compartilhar o post:', error));
      } else {
          // Se o navegador não suportar a API de compartilhamento
          alert('Seu navegador não suporta a função de compartilhamento.');
      }
  }