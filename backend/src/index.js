const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const { connectDB } = require("./lib/db.js");

const authRoutes = require("./routes/auth.route.js");
const messageRoutes = require("./routes/message.route.js");
const { app, server } = require("./lib/socket.js");


dotenv.config();

const PORT = process.env.PORT || 7007;


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:9572",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}


server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});