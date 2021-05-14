const mysql= require('mysql2')

const connection=mysql.createConnection(
    {
        host:'localhost',
        database:'mytestdb',
        user:'myuser',
        password:'mypass'
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS persons(
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)
    )`,
    function(err,result)
    {
   if(err)
   {
       console.log(err)
   }
   else
   {
       console.log("Table is created successfully")
   } 
      connection.close();
    }
)