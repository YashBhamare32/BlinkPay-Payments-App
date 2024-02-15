const express = require("express");
const cors = require('cors');

const mainRouter = require("./routes/routes");

const app = express();

const corsOptions = {
    origin: "https://blinkpay-frontend.vercel.app/", // frontend URI (ReactJS)
}
app.use(cors()); 
app.use(express.json()); 
app.use(cors(corsOptions));


app.use("/api/v1" , mainRouter); 

app.listen(3000);
module.exports = app;