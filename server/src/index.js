import express from "express";
import "reflect-metadata";
import "./database/index.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
    console.log(`+ Server running at ${port}.`);
});
