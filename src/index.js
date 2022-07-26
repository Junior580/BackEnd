const express = require("express");
const mongodb = require("./database/conn");
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use(router);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
