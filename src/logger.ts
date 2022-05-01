import * as pino from 'pino';
import { LOG_LEVEL } from "./config";

export const logger = pino({
  name: 'fusilli',
  level: LOG_LEVEL
});