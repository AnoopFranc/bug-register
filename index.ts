import "reflect-metadata";
import * as cors from "cors";
import * as express from "express";
import * as dotenv from "dotenv";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./src/config/container";
dotenv.config();

// set up bindings
// container.bind<FooService>("FooService").to(FooService);

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(
    cors({
      origin: `*`,
      credentials: true, //access-control-allow-credentials:true
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
});
let app = server.build();
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
