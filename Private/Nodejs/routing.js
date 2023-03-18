const http = require("http");

const routes = {
    "/": function index(req,res) {
        response.writeHead(200);
        response.end("Node Routing");
    }
    "/aboutus": function aboutus(request, response) {
        response.end("This is about page");
    }
}

var listen = 8000

http.createServer(function(req, res){
    if(req,url in routes) {
        return routes[req.url](req, res)
    }
    console.log(`Running Server at localhost:${listen}`)
}).listen(process.env.PORT || 8000);
