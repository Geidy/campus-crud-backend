var express =express

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:geidy@localhost:5433/postgres')


//connect to a database

let options = {
    user: 'postgres',
    host: 'host',
    database: 'postgres',
    password: 'geidy',
    port:5432
}

var pool = new pg.Pool(options);


var campuses = sequelize.define('campuses', {
    //create name and material as strings,
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    //height as an integer,
    description: Sequelize.STRING,
    //and brim as a true/false
    image: Sequelize.BYTEA
   }); 

  


campuses.sync()
.then(function(){
    console.log('campuses is now ready to be used');

   //Insert values to the table
    campuses.create(
        {
        name: 'Lehman College',
        address: '250 Bedford Park Blvd W, The Bronx, NY 10468',
        description: 'Lehman College is a senior college of the City University of New York in New York, United States',
        image: lehman
    });

    //Retrieving instance of a given model

    app.get('/campuses', function(req, res){

    var name;
    var address;

    campuses.findAll().then(function(rows) {
        for(var i = 0; i < rows.length; i++) {
        var columnData = rows[i].dataValues;
        name = columnData.name;
        address = columnData.address;
        console.log(name + " "  + address);
        }
      res.send(" " + name);
    });
       
});

       //Connecting from and to sequelize 

       app.listen(3000, function (){
           console.log('Example app listening');
        })
    
