//Webapp v2 - CloudFormation SME Activity 2
var mysql = require("mysql")

var metadata_value = process.env.METADATA_VALUE || 'ERROR: The metadata environment variable was not available!'

console.log('Setting up Database...')

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
console.log('Creating tables...')
con.query('CREATE TABLE IF NOT EXISTS `info` (`id` INT(2), `metadata` VARCHAR(20), UNIQUE (id))', function(err, rows, fields) {
  if (err) throw err
})

console.log('Seeding data...')
con.query('INSERT INTO `info` (`id`, `metadata`) VALUES (0, "' + metadata_value +'" ) ON DUPLICATE KEY UPDATE `metadata` = VALUES(`metadata`)', function(err){
  if(err) throw err
})

con.end(function(err) {
  if(err) throw err
  console.log('Done!')
})