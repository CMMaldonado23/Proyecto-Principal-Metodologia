import { Request, Response } from 'express';
import {CreateLikeCommand} from '../../application/commands/LikeCommand';
import LikeHandler from '../../application/handlers/LikeHandler';
class LikeAction {
  async run (req: Request, res: Response){
    const {owner, pin, id} = req.body;
    
      try{
        const command = new CreateLikeCommand(owner,pin,id);
        if(!id || !pin){
          res.status(400).json({message: 'Son requeridos el id y el pin del reclamo'});
          return
        }
      
    await LikeHandler.execute(command);
    return res.status(201).json({message: 'Like registrado'});  
    } catch(error){
      res.status(400).json({message: 'Algo fallo'});
    }
    }
  } 
export default new LikeAction();