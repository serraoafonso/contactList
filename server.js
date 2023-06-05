const express = require('express')
const port = process.env.PORT || 5000;
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express()
const dotenv = require('dotenv').config()

app.use(express.json())//permite usar o json
app.use("/api/contacts", contactRoutes)
app.use(errorHandler)
app.listen(port, ()=>console.log(`Server running on ${port}`))