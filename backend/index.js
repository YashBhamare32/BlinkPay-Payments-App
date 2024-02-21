const express = require("express");
const cors = require('cors');

const mainRouter = require("./routes/routes");

const app = express();
app.use(cors()); 
// const corsOptions = {
//     origin: "https://blinkpay-frontend.vercel.app/signup", // frontend URI (ReactJS)
//     origin: "https://blinkpay-frontend.vercel.app/signin", // frontend URI (ReactJS)
//     origin: "https://blinkpay-frontend.vercel.app/dashboard", // frontend URI (ReactJS)
//     origin: "https://blinkpay-frontend.vercel.app/send" // frontend URI (ReactJS)
// }

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}
const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

// app.use(cors()); 
// app.use(cors(corsOptions));
app.use(express.json()); 


app.use("/api/v1" , mainRouter); 

app.listen(3000);
module.exports = allowCors(handler);
module.exports = app;