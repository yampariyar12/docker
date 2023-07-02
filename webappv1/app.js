//Webapp v1 - CloudFormation SME Activity 1
var mysql = require('mysql')
var http = require('http')

const PORT=8080

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db')
    process.exit(1)
  }
})

function handleRequest(request, response){
  response.end('Webapp successfully deployed. DB Connection working')
}

var server = http.createServer(handleRequest)

server.listen(PORT, function(){
    console.log('Server listening on: http://localhost:%s', PORT)
})