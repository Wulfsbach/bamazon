var inquirer = require ('inquirer');
var sql = require ("mysql");

var connection = sql.createConnection({
    host:"localhost",
    port:3400,
    user:"root",
    password:"password",
    database: "bamazon"


});

connection.connect(function (err){
    if (err) throw err;
    CustomerChoice();
})

function CustomerChoice(){
    inquirer.prompt({
        name:'ProductNum',
        type:'input',
        message:"State the ID of the product ranging from 14-23."
    },
    {
        name:''
    })
}