// TODO temp solution
var exec = require('child_process').exec;
exec("psql -f ./tempScripts.sql" + process.env.DATABASE_URL ,(error, stdout, stderr) => {console.log(error, stdout, stderr)});