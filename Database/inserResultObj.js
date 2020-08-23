//Result Object

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 75'],
    ['Peter', 'Lowstreet 42'],
    ['Viola', 'Sideway 1663']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.fieldCount);
    console.log("Number of records affected: " + result.affectedRows);
    console.log(" insertID: " + result.insertId);
    console.log("serverStatus: " + result.serverStatus);
    console.log("warningCount: " + result.warningCount);
    console.log("message: " + result.message);
    console.log("protocol41: " + result.protocol41);
    console.log("changedRows: " + result.changedRows);

  });
});


/*

{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}

*/