//bibliotecas e codigos de terceiros

const formatador = (data) =>{
    return{
        dia: {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
}


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

//arrow function
const criarItemDeAtividade = (atividade) => {
    let input = '<input type="checkbox" '

    //controle de fluxo
    if(atividade.finalizada){
        input += 'checked'
    }
    input += '>'

    const formatar = formatador(atividade.data)

    return `
    <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${formatar.dia.semana.longo}, 
    dia ${formatar.dia.numerico} 
    de ${formatar.mes} 
    às ${formatar.hora}h </time>
    </div>
    `
}


const atualizarListaDeAtividades = () => {
    const section = document.querySelector('section');

    //verificar se a minha lista esta vazia
    if(atividades.length == 0){
        section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`
        return
    }

    //estrutura de repetição
    for(let atividade of atividades){
        section.innerHTML += criarItemDeAtividade(atividade)
    }
}

atualizarListaDeAtividades();

const salvarAtividade = (event) => {
    event.preventDefault()
}