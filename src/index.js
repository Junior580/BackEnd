const express = require("express");
const mongodb = require("./database/conn");
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use(router);

const PORT = 3000;
app.listen(PORT || process.env.PORT, () => {
    console.log("Server is running");
});
