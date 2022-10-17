const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ErrorHandler = require("./ErrorHandler/ErrorHandler");
const CONNECTDB = require("./database/connect");
const TableRoute = require("./routers/Table");
const ReservationRoute = require("./routers/Reservation");
const app = express();
dotenv.config();
const PORT = process.env.PORT  || 5000;

//middlewares
app.use(express.json());
app.use(cors({origin: '*'}));
//database
CONNECTDB(process.env.MONGO_URL);

//routers
app.use('/api/reservation',ReservationRoute);
app.use('/api/table',TableRoute);

app.get('/', ()=> {
    console.log('this is a reservation api');
})


//errorHandler
app.use(ErrorHandler);

//listen
app.listen(PORT, ()=> {
    console.log(`listening at port ${PORT}`);
})