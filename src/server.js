const app = require('./app');

const dotenv = require('dotenv');
dotenv.config();

//database
const db = require('./models/index');

db.sequelize.sync() // { force: true } descartará a tabela se ela já existir
.then(() => {
    console.log("Drop and Re-Sync db.");
})
.catch((err) => {
  console.log("Failed to Sync db: " + err.message);
});

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log(`server run in http://localhost:${port}`);
});