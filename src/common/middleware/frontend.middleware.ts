import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";
import { join } from "path";

@Injectable()
export class FrontEndMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { url } = req;
        if (url.indexOf('/api') === 1) {
          next();
        } else {
          res.sendFile(join(__dirname, '..', '..', '..', 'client', 'public', 'index.html'))
        }
    }
}