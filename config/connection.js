var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mytodoapp'
});

function connectDatabase(){
    if(connection){
        connection.connect(function (err) {
            if (!err){
                console.log('Connected');
            }else{
                console.log('Connection Error');
            }

        });

        return connection;
    }
}

module.exports = connectDatabase();
