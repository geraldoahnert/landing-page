const express = require("express");
const app = express();
const port = 5000; // Same client proxy port.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register-email", (req, res, next) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server running at ${port}.`);
});
