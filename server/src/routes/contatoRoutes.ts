import { Router} from 'express';

import contatoController from '../controllers/contatoController';

class ContatoRoutes {
    router: Router = Router();

    constructor (){
        this.config();
    }

    config(): void{
        this.router.get('/', contatoController.list);
        this.router.get('/:id', contatoController.getOne);
        this.router.post('/', contatoController.create);
        this.router.put('/:id', contatoController.update);
        this.router.delete('/:id', contatoController.delete);
    }
}
const contatoRoutes =new ContatoRoutes();
export default contatoRoutes.router;