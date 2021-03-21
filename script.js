function insertRow(firstName, secondName, firstLastname, secondLastName, id, username, password, phoneNumber, department, address){
  mysql = require("mysql")
  var con = mysql.createPool({
    host: "remotemysql.com",
    user: "yKjXV24w6E",
    password: "fZz4b9EsY8",
    port: 3306,
    database: "yKjXV24w6E"
  });

  con.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected to pool database!");
  });

  con.query(`INSERT INTO user (ID, Name, middleName, firstLastName, secondLastName, Username, phoneNumber, Department, Address, Password) VALUES (${mysql.escape(id)}, ${mysql.escape(firstName)}, ${mysql.escape(secondName)}, ${mysql.escape(firstLastname)}, ${mysql.escape(secondLastName)}, ${mysql.escape(username)}, ${mysql.escape(phoneNumber)}, ${mysql.escape(department)}, ${mysql.escape(address)}, ${mysql.escape(password)})`,(err)=>{
    if(err){
      throw err
      return
    }
    console.log("Row inserted")
  })
}

$("acceptButton").click(function() {
  insertRow(document.getElementById("firstNameInput").value, document.getElementById("secondNameInput").value, document.getElementById("firstLastnameInput").value, document.getElementById("secondLastnameInput").value, document.getElementById("IDInput").value,document.getElementById("usernameInput").value, document.getElementById("passwordInput").value,document.getElementById("phonenumberInput").value,document.getElementById("departmentInput").value,document.getElementById("addressInput").value)
});