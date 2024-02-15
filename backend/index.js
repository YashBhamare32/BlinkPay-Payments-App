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


app.use(cors()); 
// app.use(cors(corsOptions));
app.use(express.json()); 


app.use("/api/v1" , mainRouter); 

app.listen(3000);
module.exports = app;