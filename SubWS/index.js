const express = require('express');
const cors = require('cors');
const  connectDB = require('./SubServer/configs/db')
const movieRouter = require('./SubServer/Router/moviesRouter')
const membersRouter = require('./SubServer/Router/membersRouter')
const subRouter = require('./SubServer/Router/subscriptionsRouter')




const app = express();
const port = 3000;

connectDB();

app.use(cors());

app.use(express.json());


app.use('/api/movies', movieRouter);
app.use('/api/members', membersRouter);
app.use('/api/subs', subRouter);





app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
  });