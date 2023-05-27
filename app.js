const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

const PORT = 3000;

app.listen(
    3000,
    console.log(`Server is listening on port http://localhost:${PORT}`)
);
