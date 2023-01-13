const express= require("express");

//import db connection file
const DbConnection = require("./databaseConnection");
// import database
const dotenv = require("dotenv");

// import routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

dotenv.config();

const app = express();
const PORT = 8081;

DbConnection();

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
      message: "Server is up and running succesfully",
    });
  });
  
  app.use("/users", usersRouter);
  app.use("/books", booksRouter);
  
  app.get("*", (req, res) => {
    res.status(404).json({
      message: "This route doesn't exist",
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
