import express, { response } from 'express';


const app = express();


// Rota : Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema.

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação existente no back-end
// PUT:  Atualizar uma informação existente no back-end
// Delete: Remover uma informação do back-end

//POST http://localhost:3333/users


app.get('/users', (request, response) =>{
    console.log('Listagem de usuários');

// JSON


response.json([
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
    ]);

});


app.post('/users', (request, reponse) => {
    const user = {
        name: 'Iago',
        email: 'iagodsv@gmail.com'
    };

    return response.json(user);
})

app.listen(3333);