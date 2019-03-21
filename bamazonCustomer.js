var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 7000,

    user: "root",

    password: "",
    database: "bamazon_db"
});

var id = item_id;
var price = price;
var quantity = stock_quantity;
var orderQuantity = " ";
var totalCost = price * orderQuantity;

function start() {

    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log('Hello. Welcome to Bamazon');
        console.log("Complete Stock tally\n");
        connection.end();
    });
    for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].ItemID + " | " + "Product: " + red[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
    }
}

function buyItems() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        inquirer
            .prompt({
                name: "id",
                type: "input",
                message: "Please enter the ID of the product you want to buy",
            });
    },
        function askAmount() {
            inquirer
                .prompt({
                    name: "amount",
                    type: "input",
                    message: "How many would you like to buy?"
                });
        })
    if (amount < stock_quantity) {
        "UPDATE"
    }

    then(function (ans) {
        var whatToBuy = (ans.id) - 1;
        var howMuchToBuy = parseInt(ans.qty);
        var grandTotal = parseFloat(((res[whatToBuy].Price) * howMuchToBuy).toFixed(2));

        console.log("Updating Stock\n");
        var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                    quantity: 100
                },
                {
                    item_id
                }
            ],
            function (err, res) {
                console.log(res.affectedRows + " Purchase Successful!\n");
            }
        );

        // logs the actual query being run
        console.log(query.sql);
    }
