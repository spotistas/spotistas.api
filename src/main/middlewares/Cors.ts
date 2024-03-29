/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import cors, { type CorsOptions } from 'cors';
import { type NextFunction, type Request, type Response } from 'express';
import { Env } from '../config';
import logger from '../config/logger';

export class Cors {
  private static readonly _origin = Env.get('CORS').includes('*') ? false : Env.getList('CORS') ?? true;

  private static readonly configure = (): CorsOptions => {
    return {
      origin: this._origin,
      methods: ['GET', 'POST'],
      credentials: true,
    };
  };

  public static readonly middleware = (req: Request, res: Response, next: NextFunction): void => {
    logger.debug('CORS:', req.method, req.url);
    cors(this.configure())(req, res, next);
  };

  static {
    this._origin ? logger.debug('CORS:', this._origin) : logger.warn('CORS: DISABLED');
  }
}
