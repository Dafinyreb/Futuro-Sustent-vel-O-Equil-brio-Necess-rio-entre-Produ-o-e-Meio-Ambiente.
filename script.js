
// ========== 1. SCROLL SUAVE NO MENU ==========
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// ========== 2. BOTÃO DE DICA NA HOME ==========
const btnDica = document.getElementById('btn-dica');
const dicaMsg = document.getElementById('dica-mensagem');
btnDica.addEventListener('click', () => {
    dicaMsg.textContent = '🌱 Pequenas atitudes contam: recicle, economize água e plante uma árvore!';
    dicaMsg.classList.remove('hidden');
});

// ========== 3. REVELAR VERDADE SOBRE MITOS ==========
document.querySelectorAll('.btn-verdade').forEach((botao, index) => {
    botao.addEventListener('click', function() {
        const verdade = this.previousElementSibling; // parágrafo da verdade
        verdade.classList.toggle('hidden');
        this.textContent = verdade.classList.contains('hidden') ? 'Mostrar verdade' : 'Esconder verdade';
    });
});

// ========== 4. SIMULADOR DE PEGADA DE CARBONO (TABELA INTERATIVA) ==========
const sliderPecuaria = document.getElementById('slider-pecuaria');
const sliderAgricultura = document.getElementById('slider-agricultura');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoPegada = document.getElementById('resultado-pegada');

btnCalcular.addEventListener('click', () => {
    // Atualiza valores da tabela (simulação)
    const valorPecuaria = parseFloat(sliderPecuaria.value);
    const valorAgricultura = parseFloat(sliderAgricultura.value);
    
    // Define alguns valores para os itens (exemplo didático)
    document.getElementById('val2').textContent = (valorPecuaria * 0.5).toFixed(2); // Cattle
    document.getElementById('val6').textContent = (valorPecuaria * 0.3).toFixed(2); // Meat
    document.getElementById('val9').textContent = (valorAgricultura * 0.2).toFixed(2); // Vegetable
    
    // Calcula total simples (soma de alguns)
    let total = valorPecuaria * 0.5 + valorPecuaria * 0.3 + valorAgricultura * 0.2;
    document.getElementById('total').textContent = total.toFixed(2);
    
    resultadoPegada.textContent = `🌍 Pegada simulada: ${total.toFixed(2)} ton CO₂ equivalente.`;
});

// ========== 5. MODAL COM INFORMAÇÕES DE ONGS ==========
const ongCards = document.querySelectorAll('.ong-card');
const modal = document.getElementById('modal');
const modalTexto = document.getElementById('modal-texto');
const fecharModal = document.querySelector('.fechar');

ongCards.forEach(card => {
    card.addEventListener('click', () => {
        modalTexto.textContent = card.getAttribute('data-info');
        modal.classList.remove('hidden');
    });
});

fecharModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.add('hidden');
    }
});

// ========== 6. FRASES ALEATÓRIAS ==========
const frases = [
    '"Desenvolvimento sustentável... é a única via viável para um futuro mais seguro e esperançoso." – Maurice Strong',
    '"A agroecologia busca a harmonia entre produção, biodiversidade e bem-estar." – Vandana Shiva',
    '"Não precisa destruir pra gente crescer." – Frase popular',
    '"Sustentabilidade é toda ação destinada a manter as condições que sustentam todos os seres." – Leonardo Boff',
    '"O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor é agora." – Provérbio chinês',
    '"Não temos um Planeta B." – Slogan ambiental'
];

const btnFrase = document.getElementById('btn-frase');
const fraseExibida = document.getElementById('frase-exibida');

btnFrase.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    fraseExibida.textContent = frases[randomIndex];
});

// ========== 7. QUIZ SUSTENTÁVEL ==========
const perguntas = [
    {
        pergunta: "Qual prática ajuda a recuperar solos degradados?",
        opcoes: ["ILPF", "Desmatamento", "Uso excessivo de agrotóxicos", "Queimadas"],
        correta: 0
    },
    {
        pergunta: "O que significa a sigla ILPF?",
        opcoes: ["Integração Lavoura-Pecuária-Floresta", "Instituto Livre de Proteção Florestal", "Índice de Lixo Plástico Flutuante", "Inovação e Lucro para o Futuro"],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
const perguntaDiv = document.getElementById('pergunta');
const respostasDiv = document.getElementById('respostas');
const btnProxima = document.getElementById('btn-proxima');
const pontuacaoP = document.getElementById('pontuacao');

function carregarPergunta() {
    if(perguntaAtual < perguntas.length) {
        const p = perguntas[perguntaAtual];
        perguntaDiv.textContent = p.pergunta;
        respostasDiv.innerHTML = '';
        p.opcoes.forEach((opcao, index) => {
            const btn = document.createElement('button');
            btn.textContent = opcao;
            btn.classList.add('btn');
            btn.style.margin = '0.5rem';
            btn.addEventListener('click', () => {
                if(index === p.correta) {
                    pontuacao += 10;
                    alert('✅ Correto!');
                } else {
                    alert('❌ Errado! A resposta correta era: ' + p.opcoes[p.correta]);
                }
                pontuacaoP.textContent = `Pontuação: ${pontuacao}`;
                perguntaAtual++;
                carregarPergunta();
            });
            respostasDiv.appendChild(btn);
        });
        btnProxima.classList.add('hidden');
    } else {
        perguntaDiv.textContent = 'Fim do quiz! Parabéns!';
        respostasDiv.innerHTML = '';
        btnProxima.classList.remove('hidden');
    }
}

btnProxima.addEventListener('click', () => {
    perguntaAtual = 0;
    pontuacao = 0;
    pontuacaoP.textContent = '';
    carregarPergunta();
});

// Inicia o quiz
carregarPergunta();

// ========== 8. MUDAR COR DE FUNDO DOS PILARES AO CLICAR ==========
const pilares = document.querySelectorAll('.pilar');
pilares.forEach(pilar => {
    pilar.addEventListener('click', function() {
        this.style.backgroundColor = '#9EC6F3'; // muda para um azul claro
        setTimeout(() => {
            this.style.backgroundColor = ''; // volta após 1s
        }, 1000);
    });
});

// ========== EXTRA: BOTÃO QUE MOSTRA DATA ATUAL ==========
// (opcional, mas legal)
const dataFooter = document.createElement('p');
dataFooter.style.textAlign = 'center';
dataFooter.style.padding = '1rem';
dataFooter.style.backgroundColor = '#674636';
dataFooter.style.color = '#FFF2C6';
dataFooter.textContent = `Hoje é ${new Date().toLocaleDateString('pt-BR')} - Cuide do planeta todos os dias!`;
document.body.appendChild(dataFooter);