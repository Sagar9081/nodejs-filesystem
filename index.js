const express = require("express");
const app = express();

const userRoute = require("./routes/users");

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Welcome To The Node API Server at ${new Date()}`);
});
app.use((req, res, next) => {
  if (req.method !== "DELETE") {
    next();
  } else {
    res.send({ message: "You are not allowed to access DELETE method" });
  }
});
app.use("/users", userRoute);
app.listen(process.env.PORT||4200, () => console.log("server listening at port 4200"));
