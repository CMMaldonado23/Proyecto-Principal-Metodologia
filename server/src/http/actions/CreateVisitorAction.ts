import { Request, Response } from 'express';
import CreateVisitorCommand from 'application/commands/create.visitor.command';
import createVisitorHandler, {CreateVisitorHandler} from 'application/handlers/create.visitor.handler';

class CreateVisitorAction {
  constructor(
    private handler : CreateVisitorHandler
  ){
  }
  
  public async run(req: Request, res: Response) {
    const {ip, nickname,pin } = req.body;
    
    try {
      if (!ip || !nickname || !pin) {
        res.status(400).json({message: "Todos los campos son obligatorios"});
        return}
      const command = new CreateVisitorCommand(
        ip,
        nickname,
        pin,
      );
      
      await this.handler.handle(command);

      return res.status(201).json(
        { message: 'Creacion exitosa' }
      );
    } catch (error) {
      const {message} = error as Error;
      res.status(400).json(
        { message:message }
      );
    }
  }
}

export default new CreateVisitorAction(createVisitorHandler);