require("dotenv").config();

import mongoose from "mongoose";
import chalk from "chalk";

const dbUrl: string = process.env.DB_URL || "";
const log = console.log;
const ConnectToDb = async () => {
  try {
    await mongoose.connect(dbUrl).then((data: any) => {
      log(
        chalk.green(
          `Database connected successfullywith ${data.connection.host}`
        )
      );
    });
  } catch (error: any) {
    log(chalk.red("error", error.message));
    setTimeout(ConnectToDb, 5000);
  }
};
export default ConnectToDb;
