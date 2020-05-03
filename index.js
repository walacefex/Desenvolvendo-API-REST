let app = require('./config/custom-express')();

app.listen(3000, () =>{
    console.log('servidor rodando na porta 3000');
});