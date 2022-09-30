function tempo (request, response) {
    const dynamicDate = new Date(); /* variavel que esta guardando o tempo atual */

    response.json({ /*respondendo a requisição json */
        date: dynamicDate.toGMTString() /* Uma propriedade melhor para se ler */
}); 
}

export default tempo;