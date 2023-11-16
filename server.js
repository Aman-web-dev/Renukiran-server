const express = require('express');
const app = express();
const connector = require("./db")
app.use(express.json());
const cors = require("cors");
const contactRoute =require('./Routes/ContactRoute')


app.use(cors({ origin: '*' }));
const port = 5000;

app.use('/api',contactRoute)  

app.listen(port, () => {
  
  console.log(`Server is running on port ${port}`);
});