import express,{Application} from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import contatoRoutes from './routes/contatoRoutes';

class  Server {

    public app:  Application;

    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }
    //-- metodos de configação -- //
    config(): void{
            this.app.set('port', process.env.PORT || 3000);
            this.app.use(morgan('dev'));
            this.app.use(cors());
            this.app.use(express.json());
            this.app.use(express.urlencoded({extended: false}));
    }
//-- metodos de rotas --//
    routes(): void{
            this.app.use(indexRoutes);
            this.app.use('/api/contatos',contatoRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'),()=> {
        console.log('Servidor ativo na porta', this.app.get('port'))
        });
        
    }
}

const server = new Server();
server.start();