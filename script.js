
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-Resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "vc gosta de estuda?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "não",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "não",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "não",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "não",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "não",
                afirmacao: "afirmacao"
            },
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){

}
mostraPergunta();



