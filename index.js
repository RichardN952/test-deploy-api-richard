const express = require('express');
const app = express();
const customers = [{id:1, name:"John"},{id:2, name:"John2"},{id:3, name:"John3"}]

app.get('/', (req, res) => {res.send('Hello World :)');});

app.get('/api/customers', (req, res) => {res.send('[1, 2, 3]');})

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c=>id === parseInt(req.params.id));
    if(!customer){
        res.status(404).send('The ID not found')
    }
    res.send(customer);
})

app.listen(process.env.PORT || 3000, () => console.log('Listening to port $PORT'))