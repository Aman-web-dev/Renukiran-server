const express = require('express');
const app = express();
const connector = require("./db")
app.use(express.json());
const cors = require("cors");
const contactRoute =require('./Routes/ContactRoute')
const carrerRouter = require ( './Routes/EmployementRoute')
const donationRouter =require('./Routes/DonationRoute')


app.use(cors());


const PORT =process.env.PORT || 5000;

app.use('/api',contactRoute)  
app.use('/api',carrerRouter)  
app.use('/api',donationRouter)  



app.listen(PORT, () => {
  
  console.log(`Server is running on port ${PORT}`);
});