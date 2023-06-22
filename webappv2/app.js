//Webapp v2 - CloudFormation SME Activity 2
var mysql = require('mysql')
var http = require('http')

const PORT=8080

var metadata_value

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

con.query('SELECT * FROM info AS metadata', function(err, rows, fields) {
  if (err) throw err;
  metadata_value = rows[0].metadata
})

function handleRequest(request, response){
  response.end('WebApp v2. The metadata value is: ' + metadata_value + ' ')
}

var server = http.createServer(handleRequest)

server.listen(PORT, function(){
    console.log('Server listening on: http://localhost:%s', PORT)
})