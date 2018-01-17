const http = require ('http')
const fs = require ('fs')

const routes = [
    {url : '/', controller : 'home'},
    {url : '/api/books', controller : 'books'},
]

const router = (req, res) => {
    let routeIndex = routes.findIndex((item) => item.url === req.url)
    if (routeIndex !== -1) {
        require(`${process.cwd()}/controllers/${routes[routeIndex].controller}`)(req, res)
    }
}

http.createServer(router).listen(8000, (err) => {
    if(err) throw err
    console.log('Server running and listening port 8000')
})