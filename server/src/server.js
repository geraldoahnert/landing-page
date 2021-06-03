const express = require("express");
const app = express();
const port = 5000; // Same client proxy port.

app.post("/register", () => {
    res.send("Ok, you find me. The Post!");
});

app.listen(port, () => {
    console.log(`Server running at ${port}.`);
});
