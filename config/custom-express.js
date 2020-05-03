let express = require('express');
let consign = require('consign');

module.exports  = () =>{
    let app = express();
    consign()
        .include('./controllers')
        .into(app);

    return app;
}