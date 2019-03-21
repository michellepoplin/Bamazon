const mysql = require("mysql");
const inquirer = require("inquirer");

require("dotenv").config();

var products;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

function init() {
    readProducts();
}

function readProducts() {
    console.log("Complete Stock Tally");
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;
        products = results;
        results.forEach(product => {
            console.log(`ID: ${product.item_id} - ${product.product_name} - $${product.price}`);
        });
        promptUser();
    });
}

function promptUser() {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Please enter the ID of the product you want to buy:"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
        }
    ]).then(answers => {
        if (!checkQuantityOfItem(answers.id, answers.quantity)) {
            console.log("Insufficient quantity!");
            connection.end();
            return;
        }
        console.log("Purchase was successful!");
        const cost = calculateCostOfPurchase(answers.id, answers.quantity);
        console.log(`That will cost $${cost}`);
        adjustQuantityOfItem(answers.id, answers.quantity);
    });
}

function getProductById(itemId) {
    return products.find(product => product.item_id === parseInt(itemId));
}

function checkQuantityOfItem(itemId, quantity) {
    return getProductById(itemId).stock_quantity >= parseInt(quantity);
}

function calculateCostOfPurchase(itemId, quantity) {
    return parseInt(getProductById(itemId).price) * quantity;
}

function adjustQuantityOfItem(itemId, quantity) {
    const sql = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?";
    connection.query(sql, [parseInt(quantity), itemId], (err, result) => {
        connection.end();
        if (err) throw err;
    });
}

init();
