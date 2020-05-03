
module.exports = (app) =>{
    app.get('/pagamentos', (req, res) =>{
        console.log('Recebida requisicao de teste na porta 3000');
        res.send('OK');
    });
    app.post('/pagamentos/pagamento', (req, res) =>{
        let pagamento = req.body;
        console.log(pagamento)
        res.send('OK')
    } )
}