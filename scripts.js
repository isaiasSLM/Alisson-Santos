// Funções para abrir o WhatsApp com a mensagem de interesse no ebook
function comprarEbook1() {
    const whatsappNumber = "558488770810";
    const text = "Olá, tenho interesse em comprar o ebook1 de canto e instrumentos musicais.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
}

function comprarEbook2() {
    const whatsappNumber = "558488770810";
    const text = "Olá, tenho interesse em comprar o ebook2 de canto e instrumentos musicais.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
}

function comprarEbook3() {
    const whatsappNumber = "558488770810";
    const text = "Olá, tenho interesse em comprar o ebook3 de canto e instrumentos musicais.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
}

// Função para redirecionar para o WhatsApp com a mensagem de agendamento de aula
function agendarAula() {
    const mensagem = "Gostaria de agendar uma aula!";
    window.open(`https://wa.me/558488770810?text=${encodeURIComponent(mensagem)}`, '_blank');
}

// Função que envia os dados do formulário para o WhatsApp
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const whatsappNumber = "558488770810"; // Número de WhatsApp de destino
    const text = `Olá, meu nome é ${nome}. Meu email é ${email}. Gostaria de saber mais informações: ${mensagem}`;

    // Cria o link do WhatsApp com os parâmetros do texto
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Redireciona o usuário para o WhatsApp com a mensagem personalizada
    window.open(whatsappUrl, "_blank");
});

// Atribuindo os eventos de clique aos botões
// document.querySelector('.btn-ebook').addEventListener('click', comprarEbook);
document.querySelector('.btn-aula').addEventListener('click', agendarAula);

// Função que aplica a classe "visible" aos elementos ao rolar a página
function handleScroll() {
    const elements = document.querySelectorAll('.hidden');

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
            el.classList.add('visible');
        }
    });
}

// Executa a função ao carregar a página e ao rolar
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);