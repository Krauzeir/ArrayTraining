const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let livros = []
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI)
    livros = await resposta.json()
    exibirOsLivrosNaTela(livros)
    let livrosComDesconto = aplicarDesconto(livros)
}

