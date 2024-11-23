import express from "express";
import route from "./route/postRoute.js";

// Create an Express application instance
const app = express();

app.use(express.static("uploads"));

route(app);
// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

