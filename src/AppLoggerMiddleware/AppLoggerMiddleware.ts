import { Injectable, Logger, NestMiddleware } from "@nestjs/common";

@Injectable()
export class AppLoggerMiddeware implements NestMiddleware {
    constructor() {}
    use(req: any, res: any, next: (error?: any) => void) {
        try {
            console.log('IP Request Address', req.ip)
            next()
        } catch (error) {
            Logger.error(error)
        }
    }

}