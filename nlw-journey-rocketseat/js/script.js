//object {}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: false
}

//array, lista, vetor []
let atividades = [
    atividade,
    {
        nome: 'Academia em grupo',
        data: new Date("2024-07-08 12:26"),
        finalizada: false
    },
    {
        nome: 'Gaming session',
        data: new Date("2024-07-09 16:00"),
        finalizada: true
    },
]

atividades = []

//arrow function
const criarItemDeAtividade = (atividade) => {
    let input = '<input type="checkbox" '

    //controle de fluxo
    if(atividade.finalizada){
        input += 'checked'
    }
    input += '>'

    return `
    <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${atividade.data}</time>
    </div>
    `
}

const section = document.querySelector('section');

//estrutura de repetição
for(let atividade of atividades){
    section.innerHTML += criarItemDeAtividade(atividade)
}

