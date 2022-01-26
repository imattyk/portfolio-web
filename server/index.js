const express = require("express");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
app.enable("trust proxy");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

//Redirect to https
app.use(function (request, response, next) {
  if (process.env.NODE_ENV != "dev" && !request.secure) {
    return response.redirect("https://" + request.headers.host + request.url);
  }
  next();
});

// Handle GET requests to /api route, requests are handled in apis.js under routes
app.use("/api/", require("./routes/apis"));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
