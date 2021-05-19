const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => console.log(`Server is listening in ${PORT}`));
