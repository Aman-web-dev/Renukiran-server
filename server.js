const express = require('express');
const app = express();
const connector = require("./db")
app.use(express.json());
const cors = require("cors");
const contactRoute =require('./Routes/ContactRoute')


app.use(cors());


const PORT =process.env.PORT || 5000;

app.use('/api',contactRoute)  

app.listen(PORT, () => {
  
  console.log(`Server is running on port ${PORT}`);
});