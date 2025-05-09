require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require("express");
const cors = require("cors");
const Connection = require("./DB/Connection.js");
const app = express();


const port = process.env.APP_PORT || 5005;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// DB Connection
Connection();
//Routes
// app.use("/", userRoute);

app.get("/", (req, res) => {
    res.send("Hello world!");
});


app.listen(port, () => {
    console.log(`Listning on port http://localhost:${port}`);
})