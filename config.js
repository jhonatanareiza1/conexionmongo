import { createConnection } from "mysql";


const db = createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'usuarios'
});

db.connect((err) => {
    if(err) {
        console.error("Error connecting to base de datos usuarios: ", err);
        return
    }
    console.log("Connecting to base de datos usuarios");
} )

db.query('SELECT * FROM datos', (err, rows) => {

    if(err){
        console.error("Error executing query datos", err);
        return
    }
    console.log("Executing query de datos");
    console.log(rows);
})