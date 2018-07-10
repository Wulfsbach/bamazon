var inquirer = require ('inquirer');
var sql = require ("mysql");

var connection = sql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    database: "bamazon"


});

connection.connect(function (err){
    if (err) throw err;
    CustomerChoice();
})

function CustomerChoice(){
    inquirer.prompt([{
        name:'ProductNum',
        type:'input',
        message:"State the ID of the product ranging from 14-23."
    },
    {
        name:'Amount',
        type:'input',
        message: "Please state the amount you wish to purchase."
    }
    ]) .then(function (statement) {
        var ProductNum = statement.ProductNum
        var amount = answer.amount

        var query = "SELECT * FROM bamazon"
        query += "WHERE item_id= " + ProductNum + " AND stock_quantity >" + amount + ";";

        connection.query(query,function(err,response,space){
            if (amount <= response[0].stock_quantity){
                console.log("Item is available for purchase.");

                var update ="UPDATE bamazon SET stock_quantity = " + (response[0].stock_quantity - amount) + "WHERE item_id= " + itemID;
            connection.query (update, function(err,data,space){
                console.log("Purchase of" + response[0].product_name + ", Your Total Is: $" + amount *response[0].price);

            });
            }else {
                console.log("We don't have that many in stock!")
            }
        })
        connection.end();
    })
    
}