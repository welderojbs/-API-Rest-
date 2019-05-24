import {Request, Response } from 'express';


//camada controller index
class IndexController { 

   public index (req: Request, res: Response){
        res.send('machine mem')
    }

    }

    export const indexController = new IndexController();