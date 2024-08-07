document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario-contato');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples
        if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Aqui você pode enviar os dados para um servidor para processamento e envio de e-mail
        // Você precisará de um backend para isso, como Node.js, PHP, etc.
        // Por exemplo:
        // fetch('/enviar-email', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ nome, email, mensagem })
        // })
        // .then(response => {
        //     if (response.ok) {
        //         alert('Email enviado com sucesso!');
        //         form.reset();
        //     } else {
        //         alert('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Erro:', error);
        //     alert('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
        // });

        // Neste exemplo, exibimos apenas um alerta, pois não temos um servidor para processar o formulário
        alert('Dados do formulário enviados:\nNome: ' + nome + '\nEmail: ' + email + '\nMensagem: ' + mensagem);
        form.reset(); // Limpa o formulário após o envio
    });
});


// edição imagem
document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.imagem');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    imagens.forEach(imagem => {
        imagem.addEventListener('click', function() {
            const img = document.createElement('img');
            img.src = this.querySelector('img').src;
            lightbox.innerHTML = '';
            lightbox.appendChild(img);
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', function() {
        this.style.display = 'none';
    });
});
