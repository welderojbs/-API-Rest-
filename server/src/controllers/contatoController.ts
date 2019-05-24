import {Request, Response } from 'express';

import pool from '../factory/database';
import { text } from 'body-parser';
//camada controller index
class ContatoController { 

   public async list (req: Request, res: Response){
      const contatos = await pool.query('SELECT * FROM tbContatos');
       res.json(contatos); 
    }

      // Selecionando contatos por id
    public async getOne (req: Request, res: Response):Promise<any>{
      const {id} = req.params;
      const contato =  await pool.query('SELECT * FROM tbContatos WHERE idContato = ?', [id]);
        if (contato.length >0) {
          return res.json(contato[0]);
                }
      res.status(404).json({text: "Contato inexistente"});
      }

      // Criando Contatos na tabela
    public async create (req: Request, res: Response){
      //metodo assincrono  
      await pool.query('INSERT INTO tbContatos set ?',[req.body]);
      res.json({message:'Criando contato' });
    }
    
      //Atualizando contatos da tabela por id
    public async update (req: Request, res: Response): Promise<void> {
     const {id}= req.params;
     await pool.query('UPDATE tbContatos set ? WHERE idContato = ?', [req.body, id])
     res.json({message:'Atualizado' });
    }

      //Deletando contatos por id
    public async delete( req: Request, res: Response): Promise<void> {
      const {id}= req.params;
      await pool.query('DELETE FROM tbContatos WHERE idContato = ?', [id]);
      res.json({message: 'Contato Excluido'});
    }


   
    }

  const contatoController = new ContatoController();
  export default contatoController;