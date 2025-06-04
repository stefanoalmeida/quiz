let perguntaAtual = 0;
let acertos = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const form = document.getElementById('quiz-form');
const feedback = document.getElementById('feedback');
const finalScore = document.getElementById('final-score');
const scoreText = document.getElementById('score-text');

function carregarPergunta() {
    const atual = perguntas[perguntaAtual];
    questionText.textContent = atual.pergunta;
    optionsContainer.innerHTML = '';

    atual.opcoes.forEach(opcao => {
        const label = document.createElement('label');
        label.className = 'flex items-center gap-2 hover:bg-base-100 p-2 rounded-xl cursor-pointer';
        label.innerHTML = `<input type="radio" name="answer" class="radio radio-sm radio-secondary" value="${opcao}"> ${opcao}`;
        optionsContainer.appendChild(label);
        // optionsContainer.appendChild(document.createElement('br'));
    });

    feedback.textContent = '';
    feedback.className = 'feedback';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const resposta = formData.get('answer');

    if (!resposta) {
        feedback.textContent = 'Por favor, selecione uma resposta.';
        feedback.className = 'alert alert-error text-white font-bold mb-4';
        return;
    }

    const correta = perguntas[perguntaAtual].correta;

    if (resposta === correta) {
        feedback.textContent = 'Resposta correta!';
        feedback.className = 'alert alert-success text-white font-bold mb-4 mb-4';
        acertos++;
    } else {
        feedback.textContent = `Resposta incorreta. A correta é "${correta}".`;
        feedback.className = 'alert alert-error text-white font-bold mb-4 mb-4';
    }

    // Esperar 1.5s e ir para a próxima pergunta
    setTimeout(() => {
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            exibirResultadoFinal();
        }
    }, 1500);
});

function exibirResultadoFinal() {
    document.getElementById('quiz-container').classList.add('hidden');
    finalScore.classList.remove('hidden');
    scoreText.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}

// Inicializar
carregarPergunta();