const express = require("express");
const dbConnection = require("./config/db.js");
const routes = require("./routes/customers");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors({origin:true,Credential:true}));

//db connection
dbConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>res.send("Hello server"));
app.use("/api/customers", routes);
app.use("/api/promotions", routes);

const PORT = 3010;

app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`));