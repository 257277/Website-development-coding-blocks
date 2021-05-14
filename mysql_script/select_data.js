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
    `SELECT * FROM persons`,
    function(err,rows,columns)
    {
      if(err)
      {
          console.log(err);
      }
      else 
      {
          console.log(rows)
          console.log(columns)
      }
      connection.close();
    }
)