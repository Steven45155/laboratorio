    const http = require('http');
    const server = http.createServer((req, res)=>{
        if (req.url === '/'){
            res.end(JSON.stringify({mensaje: "La api esta funcionando correctamente"}));
        } else {
            res.end('Bienvenido a mi api');
        }    
    });

server.listen(3000);

        