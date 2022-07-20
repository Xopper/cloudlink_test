const express = require("express");

const app = express();

// Init Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define Routes
app.use("/", require("./routes/Client"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
