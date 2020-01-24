import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './baseRoutes';
import { IndexRoute } from '../controller/index';

export class AppRoutes extends BaseRoute {
    constructor(){
        super();
    }

    public static create(router: Router) {
        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });

        router.post('/', (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().add(req, res, next);
        });
    }
}