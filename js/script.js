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
        { question: "1. Qual é o principal objetivo do Figma?", options: ["a) Escrever códigos para aplicativos", "b) Criar interfaces e protótipos de design digital", "c) Editar vídeos e áudios", "d) Gerenciar bancos de dados"], correct: 1 },
        { question: "2. O que significa 'interface' no contexto de design digital?", options: ["a) Um tipo de software de edição de fotos", "b) O meio pelo qual o usuário interage com um aplicativo ou site", "c) Um arquivo de imagem em alta resolução", "d) Um código que define a velocidade do site"], correct: 1 },
        { question: "3. Qual das seguintes funcionalidades é exclusiva do Figma?", options: ["a) Permite salvar imagens em diferentes formatos", "b) Oferece ferramentas de desenho vetorial", "c) Permite colaboração simultânea entre vários usuários em tempo real", "d) Possibilita imprimir o arquivo diretamente"], correct: 2 },
        { question: "4. No Figma, o que é um 'frame'?", options: ["a) Um container que organiza elementos de design", "b) Uma ferramenta para medir cores", "c) Um tipo de plugin para animações", "d) Um efeito de sombra para imagens"], correct: 0 },
        { question: "5. Qual prática é essencial ao iniciar um projeto no Figma?", options: ["a) Criar ícones antes da estrutura da tela", "b) Ignorar a usabilidade no início", "c) Definir a hierarquia visual e layout antes dos detalhes", "d) Exportar o design final antes de testar"], correct: 2 }
    ],
    2: [
        { question: "1. O que são componentes no Figma?", options: ["a) Partes do código do site", "b) Elementos reutilizáveis de design", "c) Tipos de arquivo SVG", "d) Modelos prontos"], correct: 1 },
        { question: "2. O que ocorre ao alterar o componente mestre?", options: ["a) Todas as instâncias são atualizadas", "b) Nenhuma instância muda", "c) O projeto é apagado", "d) Apenas o texto muda"], correct: 0 },
        { question: "3. O Auto Layout serve para quê?", options: ["a) Ajustar automaticamente espaçamentos e tamanhos", "b) Exportar arquivos PNG", "c) Fazer animações automáticas", "d) Aplicar efeitos visuais"], correct: 0 },
        { question: "4. O que o painel de prototipagem faz?", options: ["a) Cria conexões e animações entre telas", "b) Gera códigos CSS", "c) Cria componentes automáticos", "d) Define cores do layout"], correct: 0 },
        { question: "5. Qual vantagem dos componentes?", options: ["a) Reduzem retrabalho e mantêm consistência", "b) Aumentam o peso do arquivo", "c) Impedem mudanças", "d) Tornam o projeto mais lento"], correct: 0 }
    ],
    3: [
        { question: "1. O que são estilos no Figma?", options: ["a) Conjuntos de propriedades reutilizáveis como cores e textos", "b) Códigos CSS importados", "c) Modelos prontos da comunidade", "d) Ferramentas de prototipagem"], correct: 0 },
        { question: "2. Qual é o benefício de usar estilos de texto?", options: ["a) Garantir consistência tipográfica no projeto", "b) Permitir exportar fontes", "c) Aumentar a resolução", "d) Criar efeitos 3D"], correct: 0 },
        { question: "3. O que é biblioteca compartilhada no Figma?", options: ["a) Um espaço com recursos comuns entre arquivos", "b) Um plugin externo", "c) Um backup automático", "d) Uma pasta de imagens"], correct: 0 },
        { question: "4. O que acontece ao atualizar um estilo em uma biblioteca?", options: ["a) Os arquivos conectados são atualizados", "b) Nada muda", "c) O projeto trava", "d) O estilo é apagado"], correct: 0 },
        { question: "5. Estilos de cor servem para:", options: ["a) Aplicar cores consistentes e fáceis de atualizar", "b) Importar imagens", "c) Criar gradientes automáticos", "d) Alterar a opacidade do fundo"], correct: 0 }
    ],
    4: [
        { question: "1. O que são grids no Figma?", options: ["a) Guias de alinhamento para organização do layout", "b) Códigos de espaçamento CSS", "c) Plugins de animação", "d) Molduras automáticas"], correct: 0 },
        { question: "2. O grid ajuda em quê?", options: ["a) Manter alinhamento e proporções consistentes", "b) Aumentar contraste", "c) Corrigir erros de prototipagem", "d) Adicionar sombras"], correct: 0 },
        { question: "3. Qual o uso das constraints?", options: ["a) Definir comportamento de redimensionamento dos elementos", "b) Adicionar bordas automáticas", "c) Gerar código CSS", "d) Exportar imagens"], correct: 0 },
        { question: "4. Como se ativa o grid em um frame?", options: ["a) Clicando em ‘Layout grid’ no painel direito", "b) Pressionando Enter", "c) Apertando Ctrl + G", "d) Clicando duas vezes no nome do frame"], correct: 0 },
        { question: "5. Um layout bem alinhado melhora:", options: ["a) A legibilidade e a harmonia visual", "b) O tamanho do arquivo", "c) A velocidade do Figma", "d) A resolução das imagens"], correct: 0 }
    ],
    5: [
        { question: "1. O que é prototipagem interativa?", options: ["a) Simular a navegação real de um usuário", "b) Criar ícones vetoriais", "c) Exportar imagens", "d) Fazer ajustes de cores"], correct: 0 },
        { question: "2. Qual recurso permite transições entre telas?", options: ["a) Conexões de protótipo (interactions)", "b) Componentes", "c) Auto Layout", "d) Layout grid"], correct: 0 },
        { question: "3. O que são animações microinterativas?", options: ["a) Pequenos movimentos que dão feedback visual ao usuário", "b) Efeitos de vídeo", "c) Plugins externos", "d) Funções de exportação"], correct: 0 },
        { question: "4. Qual o objetivo do modo de apresentação no Figma?", options: ["a) Testar o fluxo e comportamento dos protótipos", "b) Editar cores", "c) Criar componentes automáticos", "d) Aplicar grids"], correct: 0 },
        { question: "5. Por que prototipar é importante?", options: ["a) Permite validar ideias e usabilidade antes da codificação", "b) Gera o código final", "c) Substitui o design completo", "d) Melhora o desempenho do Figma"], correct: 0 }
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



