let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

module.exports  = () =>{
    let app = express();

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());


    consign()
        .include('./controllers')
        .into(app);

    return app;
}