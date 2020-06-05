// Bibliteca para ambiente de dev
import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('list users');

    //response.send('Hello World');
    response.json([
        'Camilo',
        'Mary J',
        'Ananda',
        'China'
    ]);
});

app.listen(3333);