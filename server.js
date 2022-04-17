const express = require("express");
const pug = require("pug");
const path = require("path");
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

app.listen(8000, () => {
  console.log("server is running at 8000 port");
});
