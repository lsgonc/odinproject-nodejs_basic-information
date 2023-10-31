const http = require('http'); //Requerindo o módulo http
const fs = require('fs'); //Requerindo o módulo fs => sistema de arquivos
const path = require('path'); //Path


//Criando o servidor http
const httpServer = http.createServer();

//Adicionando um evento pra ser ouvido = "request"
httpServer.on('request', (req, res) => {
    
    //url da requisição
    let url = req.url;
    
    //Definindo rotas simples, com base na url da requisição
    if(url == "/")
    {   
        //Caso a url seja = / => carrega index.html
        fs.readFile(path.join(__dirname,'index.html'), (err,data) => {
            if(err)
                console.log("Erro ao abrir index.html");
            else{ 
                res.write(data);
                res.end();
            } 
        });
    }
    else if (url == "/about")
    {
        //url = /about => carrega about.html
        fs.readFile(path.join(__dirname,'about.html'), (err,data) => {
            if(err)
                console.log("Erro ao abrir about.html");
            else{ 
                res.write(data);
                res.end();
            } 
        });
    }
    else if(url == "/contact")
    {
        //url = /contact => carrega contact.html
        fs.readFile(path.join(__dirname,'contact.html'), (err,data) => {
            if(err)
                console.log("Erro ao abrir contacts.html");
            else{ 
                res.write(data);
                res.end();
            } 
        });
    }
    else {
        //url != de todas as acima => carrega 404.html
        fs.readFile(path.join(__dirname,'404.html'), (err,data) => {
            if(err)
                console.log("Erro ao abrir 404.html");
            else{ 
                res.write(data);
                res.end();
            } 
        });
    }

});

//Servidor ouvindo na porta 8080, localhost
httpServer.listen(8080, 'localhost', () => {
    console.log("Servidor na porta 8080");
});


