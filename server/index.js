//aca se sincroniza el server con la DB

const server = require("./src/server");
const { conn } = require('./src/db.js');
const getAllCountries = require("./src/controllers/getAllCountries")
const PORT = 3001;

conn.sync({ force: false, alter: true})
  .then(() => {
    server.listen(PORT, getAllCountries(), () => {
      console.log(`Server listening on port ${PORT}`);
    });
})
  .catch(error => console.error(error));
