import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualiar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request Body): Dados para a criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação
app.use(routes);
    
app.listen(3333);

