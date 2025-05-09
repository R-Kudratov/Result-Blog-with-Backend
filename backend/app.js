require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = 3001;
const app = express();

app.use(express.static(path.resolve("..", "frontend", "dist")));

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve("..", "frontend", "dist", "index.html"));
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
