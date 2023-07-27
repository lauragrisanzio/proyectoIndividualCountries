require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
    logging: false, 
    native: false, 
});
  
  //se obtiene el nombre base del archivo actual en Node.js y se asigna a la const basename:
  const basename = path.basename(__filename);
  
  //array que guardara los archivos de la carpeta models:
const modelDefiners = [];
  
  //  Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
  fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });
  
  // Inyectamos la conexion (sequelize) a todos los modelos
 modelDefiners.forEach(model => model(database));
  
  //Acá se obtiene un arreglo de pares clave-valor con todas las prop del objeto:
  let entries = Object.entries(database.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  database.models = Object.fromEntries(capsEntries);
  
//en database.models estan los modelos como propiedades, para acceder hacemos un destructuring
const { Country, Activity } = database.models;

// Aca vendrian las relaciones:

Country.belongsToMany(Activity, {
  through: "Countries_Activities",
  timestamps: false,
});
Activity.belongsToMany(Country, {
  through: "Countries_Activities",
  timestamps: false,
});


module.exports = {
  ...database.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: database,     // para importart la conexión { conn } = require('./db.js');
};



