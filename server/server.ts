require("dotenv").config();
import chalk from "chalk";
import { app } from "./app";
import ConnectToDb from "./utils/db";
ConnectToDb();

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(chalk.green.inverse("server running on port number", port));
});

//testing the root api
