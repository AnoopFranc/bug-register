import * as express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

/**
 * Setup listener port
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info(`Running Node.js version ${process.version}`);
  console.info(`App environment: ${process.env.NODE_ENV}`);
  console.info(`App is running on port ${PORT}`);
});

export default app;
