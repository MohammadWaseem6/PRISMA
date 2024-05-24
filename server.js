import dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./routes/index.js";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(routes);

app.get("/", (req, res) => {
    console.log("finded");
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
});
