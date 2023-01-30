const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//handling Uncught exception
//example -console.log(youtube);
process.on("uncaughtException", (err) => {
  console.log(`error:${err.message}`);
  console.log(`shutting down the server due to Uncaught exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`error:${err.message}`);
  console.log(`shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit;
  });
});
