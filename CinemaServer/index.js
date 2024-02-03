const express = require('express');
const mongoose = require('mongoose');
const connectDB =require('./configs/db')
const app = express();
const PORT = 8000;
const cors = require('cors')
const authRouter = require('./Router/authRouter')


app.use(express.json());
connectDB()
app.use(cors())


app.use('/auth', authRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
