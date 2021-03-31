const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./server/routes/pets.routes')(app); // This is new
require('./server/config/pets.config')
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
