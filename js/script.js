// barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("mainContent");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

// efeito rolagem
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

// atividades
const quizzes = {
    1: [
        { question: "1. O que significa a sigla UI/UX?", options: [
            "A) User Interface / User Experience", 
            "B) Unified Interaction / User Exchange", 
            "C) User Information / Universal Experience", 
            "D) Utility Interface / Usage Experience"], 
            correct: 0 },
        { question: "2. Qual é a principal função do Figma?", options: [
            "A) Criação de vídeos", 
            "B) Criação de interfaces e protótipos digitais", 
            "C) Edição de fotos", 
            "D) Programação de sites"], 
            correct: 1 },
        { question: "3. O Figma é baseado em qual tipo de tecnologia?", options: [
            "A) Aplicativo desktop", 
            "B) Plataforma online baseada em nuvem", 
            "C) Software offline", 
            "D) Sistema operacional"], 
            correct: 1 },
        { question: "4. Qual é a diferença entre UI e UX?", options: [
            "A) UI é sobre código e UX é sobre design", 
            "B) UX é a interface e UI é a navegação", 
            "C) UI é aparência e UX é experiência do usuário", 
            "D) Não há diferença"], 
            correct: 2 },
        { question: "5. O que é um wireframe?", options: [
            "A) Protótipo funcional", 
            "B) Código HTML", 
            "C) Imagem final do design", 
            "D) Esboço básico de layout"], 
            correct: 3 }
    ],
    
    2: [
        { question: "1. Qual ferramenta desenha formas básicas no Figma?", options: [
            "A) Move Tool", 
            "B) Shape Tool", 
            "C) Text Tool", 
            "D) Frame Tool"], 
            correct: 1 },
        { question: "2. Como inserir texto em um layout?", options: [
            "A) Usando a ferramenta Text", 
            "B) Com o pincel", 
            "C) Clicando com botão direito", 
            "D) No menu Prototype"], 
            correct: 0 },
        { question: "3. O que é um Frame?", options: [
            "A) Um tipo de efeito", 
            "B) Um contêiner que organiza elementos", 
            "C) Uma fonte", 
            "D) Uma paleta de cores"], 
            correct: 1 },
        { question: "4. Qual a diferença entre Group e Frame?", options: [
            "A) Group é mais rápido", 
            "B) Frame é menor", 
            "C) Group é temporário, Frame é estrutural",
            "D) Não há diferença"], 
            correct: 2 },
        { question: "5. Como aplicar uma cor personalizada?", options: [
            "A) Selecionar o objeto e escolher a cor no painel Fill", 
            "B) Arrastar a cor com o mouse", 
            "C) Clicar duas vezes no objeto", 
            "D) Usar o menu Prototype"], 
            correct: 0 }
    ],
    
    3: [
        { question: "1. O que é um componente?", options: [
            "A) Um grupo de camadas", 
            "B) Um elemento reutilizável", 
            "C) Uma animação", 
            "D) Uma cor fixa"], 
            correct: 1 },
        { question: "2. Qual a vantagem de usar componentes?", options: [
            "A) Diminui o contraste", 
            "B) Reduz o tamanho do arquivo", 
            "C) Cria mais efeitos", 
            "D) Facilita consistência e reaproveitamento"],  
            correct: 3 },
        { question: "3. O que é uma instância?", options: [
            "A) Cópia vinculada de um componente",
            "B) Um frame vazio", 
            "C) Uma animação", 
            "D) Um texto dinâmico"], 
            correct: 0 },
        { question: "4. Por que nomear camadas é importante?", options: [
            "A) Aumenta o contraste", 
            "B) Gera links automáticos", 
            "C) Cria novos componentes", 
            "D) Facilita organização e busca"], 
            correct: 3 },
        { question: "5. O que diferencia Group e Frame?", options: [
            "A) Frame tem propriedades próprias", 
            "B) Group é permanente", 
            "C) Frame apaga camadas", 
            "D) Group permite rolagem"], 
            correct: 0 }
    ],
    
    4: [
        { question: "1. Qual modo conecta telas no Figma?", options: [
            "A) Design", 
            "B) Prototype", 
            "C) Inspect", 
            "D) Share"], 
            correct: 1 },
        { question: "2. Como visualizar o protótipo?", options: [
            "A) No modo Play", 
            "B) No menu Export", 
            "C) Na aba Design", 
            "D) Na barra lateral"], 
            correct: 0 },
        { question: "3. Cite um tipo de transição.", options: [
            "A) Copy Frame", 
            "B) Hover Auto", 
            "C) Move In", 
            "D) Auto Swap"], 
            correct: 2 },
        { question: "4. O que diferencia protótipos de alta e baixa fidelidade?", options: [
            "A) A animação", 
            "B) O número de frames", 
            "C) A cor usada", 
            "D) O nível de detalhe visual"],
            correct: 3 },
        { question: "5. Por que testar o protótipo é importante?", options: [
            "A) Para validar a experiência do usuário", 
            "B) Para exportar imagens", 
            "C) Para criar códigos", 
            "D) Para reduzir fontes"], 
            correct: 0 }
    ],
    
    5: [
        { question: "1. No Figma, o uso de frames e grids ajuda o designer a manter o quê em um layout?", options: [
            "A) Organização e alinhamento visual", 
            "B) Efeitos de animação", 
            "C) Redução do tamanho do arquivo", 
            "D) Melhor contraste entre camadas"], 
            correct: 0 },
        { question: "2. O que acontece quando se edita o componente principal no Figma?", options: [
            "A) Apenas o original muda", 
            "B) Todas as instâncias são atualizadas automaticamente", 
            "C) Cria-se uma nova variante", 
            "D) As cópias perdem vínculo"], 
            correct: 1 },
        { question: "3. Durante um teste de usabilidade, o protótipo foi usado para simular cliques e transições. Que tipo de recurso está sendo avaliado?", options: [
            "A) A hierarquia visual", 
            "B) A experiência do usuário (UX)", 
            "C) O design da interface (UI)", 
            "D) O grid do layout"], 
            correct: 1 },
        { question: "4. Um designer quer compartilhar componentes entre projetos sem perder vínculo. Qual procedimento é o mais adequado?", options: [
            "A) Exportar os frames como imagem", 
            "B) Copiar e colar entre arquivos", 
            "C) Publicar os componentes em uma biblioteca compartilhada", 
            "D) Converter os componentes em variantes"], 
            correct: 2 },
        { question: "5. Em um protótipo com várias transições, o usuário sente lentidão e confusão visual. Qual princípio de design foi provavelmente comprometido?", options: [
            "A) Feedback e consistência", 
            "B) Contraste e tipografia", 
            "C) Variedade e dinamismo", 
            "D) Hierarquia e cor"],
            correct: 0 }
    ]
};

// funções auxiliares
function romanoParaNumero(romano) {
    const mapa = { I: 1, II: 2, III: 3, IV: 4, V: 5 };
    return mapa[romano.toUpperCase()] || null;
}

function detectarModuloAtual() {
    const match = window.location.href.match(/modulo(\w+)\.html/i);
    if (match) return romanoParaNumero(match[1]);
    return 1;
}

// progresso
function inicializarProgresso() {
    let progresso = JSON.parse(localStorage.getItem("progressoCurso"));
    if (!progresso) {
        progresso = { 1: { unlocked: true, completed: false, score: 0 }, 2: { unlocked: false, completed: false, score: 0 }, 3: { unlocked: false, completed: false, score: 0 }, 4: { unlocked: false, completed: false, score: 0 }, 5: { unlocked: false, completed: false, score: 0 } };
        localStorage.setItem("progressoCurso", JSON.stringify(progresso));
    }
    return progresso;
}

function atualizarMenuProgresso() {
    const progresso = inicializarProgresso();
    document.querySelectorAll(".sidebar a").forEach(link => {
        const match = link.getAttribute("href")?.match(/modulo(\w+)\.html/i);
        if (match) {
            const num = romanoParaNumero(match[1]);
            if (!progresso[num]?.unlocked) {
                link.style.opacity = "0.4";
                link.style.pointerEvents = "none";
                link.title = "Complete o módulo anterior com pelo menos 60% para desbloquear este.";
            } else {
                link.style.opacity = "1";
                link.style.pointerEvents = "auto";
            }
        }
    });
}

function desbloquearProximoModulo(porcentagem) {
    const progresso = inicializarProgresso();
    const moduloAtual = detectarModuloAtual();

    if (porcentagem >= 60 && !progresso[moduloAtual].completed) {
        progresso[moduloAtual].completed = true;
        progresso[moduloAtual].score = porcentagem;

        const proximo = moduloAtual + 1;
        if (progresso[proximo]) progresso[proximo].unlocked = true;

        alert("🎉 Parabéns! Você desbloqueou o próximo módulo!");
    } else if (porcentagem < 60) {
        progresso[moduloAtual].score = porcentagem;
        alert("Você acertou menos de 60%. Revise o conteúdo e tente novamente!");
    }

    localStorage.setItem("progressoCurso", JSON.stringify(progresso));
    atualizarMenuProgresso();
}

document.addEventListener("DOMContentLoaded", atualizarMenuProgresso);

// avançar módulos
const moduloAtual = detectarModuloAtual();
const quizData = quizzes[moduloAtual];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((opt, index) => {
        const button = document.createElement("button");
        button.textContent = opt;
        button.onclick = () => selectOption(index);
        optionsEl.appendChild(button);
    });
}

function selectOption(selected) {
    const correct = quizData[currentQuestion].correct;
    if (selected === correct) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    const percent = Math.round((score / quizData.length) * 100);
    resultEl.style.display = "block";
    resultEl.innerHTML = `Você acertou ${score}/${quizData.length} questões.<br>Porcentagem: ${percent}%`;
    desbloquearProximoModulo(percent);
}

prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion();

// vídeos
function trocarVideo(videoId, linkElement) {
    const iframe = document.getElementById("videoPlayer");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
}



