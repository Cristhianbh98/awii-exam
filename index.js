require('dotenv').config();

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());


//Servir como estatico el index.html

app.get('/', (req, res ) => {
   
        res.status(200).sendFile(path.join(__dirname, './index.html'));
    
})

//API

app.use('/api/transaccion', require('./routes/transaccion.routes'));

app.listen(PORT, () => console.log(`Server running at http://127.0.0.1:${PORT}`))