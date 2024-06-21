
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
                texto: "isso é assustador",
                afirmacao: "afirmacao",
            },
            {
                texto: "não",
                afirmacao: "afirmacao",
            },
        ],
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao",
            },
            {
                texto: "não",
                afirmacao: "afirmacao",
            },
        ],
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao",
            },
            {
                texto: "não",
                afirmacao: "afirmacao",
            },
        ],
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao",
            },
            {
                texto: "não",
                afirmacao: "afirmacao",
            },
        ],
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao",
            },
            {
                texto: "não",
                afirmacao: "afirmacao",
            },
        ],
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal= "";

function mostraPergunta() {
    if(atual >= perguntaAtual.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
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
     const afirmacoes = opcaoSelecionada.afirmacoes;
     historiaFinal += afirmacoes + " ";
     atual++;
     mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();




      



