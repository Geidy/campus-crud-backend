// server.js
/*const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  //  console.log('Hello World...!');
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log(`App is up and running. Listening on port ${3000}`);
}); */
//include the node postgres library
var pg = require('pg');

//connect to a database

let options = {
    user: 'postgres',
    host: 'host',
    database: 'postgres',
    password: 'geidy',
    port:5433
}

var pool = new pg.Pool(options);

//Conection using created pool
pool.connect(function(err, client, done){
    query = "SELECT * from campuses WHERE name = 'Lehman College'";
    //console.log(err);
    client.query(query)
     .then(res => {

    //console.log(res.rowCount);

    for(var i = 0; i < resizeBy.rowCount; i++){
        console.log(res.rows[i].id + " " + res.rows[i].name)}

    } 
)
    .catch(e => console.error(e.stack));
})


//pool shutdown
pool.end()





