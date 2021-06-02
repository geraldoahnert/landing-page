const express = require("express");
const app = express();
const port = 5000; // Same client proxy port.

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server running at ${port}.`);
});
