const express = require("express");
const cors = require('cors');

const mainRouter = require("./routes/routes");

const app = express();

// const corsOptions = {
//     origin: "https://blinkpay-frontend.vercel.app/signup", // frontend URI (ReactJS)
//     origin: "https://blinkpay-frontend.vercel.app/signin", // frontend URI (ReactJS)
//     origin: "https://blinkpay-frontend.vercel.app/dashboard", // frontend URI (ReactJS)
//     origin: "https://blinkpay-frontend.vercel.app/send" // frontend URI (ReactJS)
// }

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    res.header("HTTP/1.1 200 OK")
      next();
    });
app.use(cors()); 
// app.use(cors(corsOptions));
app.use(express.json()); 


app.use("/api/v1" , mainRouter); 

app.listen(3000);
module.exports = app;