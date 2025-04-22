const todos =
[
    {
        "userId": 1,
        "id": 1,
        "title": "Mise en place d'une API avec Node JS",
        "completed": true
    }
]

module.exports.handleMethod = (req, res) => {
    searchParams = req.url.split('/');
    console.log(searchParams);

    const isTodos = searchParams.length >= 2 && searchParams[1] === "todo";
    const todoId = searchParams.length === 3 && searchParams[1] === "todo" ? Number(searchParams[2]) : undefined; 

    if(isTodos)
    {
        // Test les méthodes HTTP
        switch(req.method){
            case "GET":
                handleGet(req, res, todoId);
                break;
            case "POST":
                handlePost(req, res)
                break;
            case "PUT":
                handlePut(req, res, todoId);
                break;
            case "DELETE":
                handleDelete(req, res, todoId);
                break;
            default:
                res.writeHead(405);
                res.end("Method not implemented");
        }
    }
    else {
        res.writeHead(404);
        res.end("Not Found");
    }
}

function handleGet(req, res, todoId){
    if(todoId === undefined){
        res.writeHead(200, {'Content-type': 'application/json', 'Default-Encoding': 'utf-8' });
        res.end(JSON.stringify(todos));
    }
    else {
        const todo = todos.find((item) => item.id)
    }
}

function handlePost(req, res){

}

function handlePut(req, res, todoId){

}

function handleDelete(req, res, todoId){
    
}