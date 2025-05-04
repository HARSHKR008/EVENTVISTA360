require('dotenv').config();
const express = require('express');
const UserRouter = require('./routers/UserRouter');
const VenueRouter = require('./routers/VenueRouters');
const FeedRouter = require('./routers/feedbackrouter.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors({origin: '*'}))
app.use(express.json());
app.use('/user', UserRouter);
app.use('/venue', VenueRouter);
app.use('/feed', FeedRouter);

// endpoint or route

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/', (req, res) => {
    res.send('response from add');
})

//getall

//delete

app.listen(port, ()=> {
    console.log('server started');
});