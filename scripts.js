// Função para redirecionar ao link do e-book
function abrirLinkEbook() {
    const ebookUrl = "https://seulinkdoebook.com"; // Insira o link do e-book aqui
    window.open(ebookUrl, "_blank");
}

function comprarEbook() {
    window.location.href = 'https://pay.cakto.com.br/5DjLy4c?fbclid=PAZXh0bgNhZW0CMTEAAabOgIZLA-Ljvk-A1TZXCar4JoqIgHkfiX0Ksuz1fnohuG7XgzhRHeP4d2U_aem_fRRC5nT0eJISADXNYb-Msw';
}

// Função para redirecionar ao WhatsApp com a mensagem de interesse no e-book
// function comprarEbook() {
//     const whatsappNumber = "558488770810";
//     const text = "Olá, tenho interesse em comprar o ebook de canto e instrumentos musicais.";
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
//     window.open(whatsappUrl, "_blank");
// }

// Função para redirecionar ao WhatsApp com a mensagem de agendamento de aula
function agendarAula() {
    const mensagem = "Gostaria de agendar uma aula!";
    window.open(`https://wa.me/558488770810?text=${encodeURIComponent(mensagem)}`, '_blank');
}
function insta() {
    window.location.href = "https://www.instagram.com/stories/highlights/17974580978724789/";
}

// Função que envia os dados do formulário para o WhatsApp
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const whatsappNumber = "558488770810";
    const text = `Olá, meu nome é ${nome}. Meu email é ${email}. Gostaria de saber mais informações: ${mensagem}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
});

// Atribuindo os eventos de clique aos botões de e-book e de aula
document.querySelector('.btn-ebook-link').addEventListener('click', abrirLinkEbook);
document.querySelector('.btn-ebook-compra').addEventListener('click', comprarEbook);
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