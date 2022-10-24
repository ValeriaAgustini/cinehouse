const catalogo = require('./database/catalogo.json')
//console.log(catalogo)

// exercício
// 1-listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)
// 2-buscar um filme especifico pelo código dele (buscarFilme) -> recebe um parâmetro: codigo
// 3-alterar o status de emCartaz ( true -> false e se false -> true)
// ( aterarStatusEmCartaz) -. receber parametro:codigo

// resposta exercicio 3
const alterarFilmeEmcartaz = (codigo) => {
    const filme = catalogo.find(filme) => filme.codigo == codigo

}
