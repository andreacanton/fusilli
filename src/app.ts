import * as express from "express";
import * as bodyParser from "body-parser";
import * as expressPinoLogger from "express-pino-logger";
import { logger } from './logger';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(expressPinoLogger({ logger: logger }));
  }
}

export default new App().app;