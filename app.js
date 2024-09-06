function pesquisar() {
    /**
     * Função responsável por realizar a pesquisa e exibir os resultados.
     * 
     * **Como funciona:**
     * 1. Seleciona a seção HTML onde os resultados serão exibidos.
     * 2. Itera sobre os dados da pesquisa, construindo o HTML para cada resultado.
     * 3. Atualiza o conteúdo da seção com os resultados construídos.
     */

    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Not Found. You need to type a character's name.</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        
         nome = dado.nome.toLowerCase();
       
        if (nome.includes(campoPesquisa)) {

             /**
             * Para cada dado, cria um novo elemento HTML para representar o resultado da pesquisa.
             * Inclui informações como título, descrição e link para mais detalhes.
             */
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `
        } 
    }        

    if (!resultados) {
        resultados = "<p>Not Found</p>"
    };

    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
}