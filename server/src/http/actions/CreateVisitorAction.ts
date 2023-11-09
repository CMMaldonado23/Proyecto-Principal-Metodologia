import { Request, Response } from 'express';
import CreateVisitorCommand from 'application/commands/create.visitor.command';
import createVisitorHandler from 'application/handlers/create.visitor.handler';

class CreateVisitorAction {
  public async run(req: Request, res: Response) {
    const { id, ip, nickname,pin } = req.body;
    
    try {
      if (!ip || !nickname || !pin) {
        res.status(400).json({message: "Todos los campos son obligatorios"});
        return}
      const command = new CreateVisitorCommand(
        id,
        ip,
        nickname,
        pin,
      );
      
      await createVisitorHandler.execute(command);

      return res.status(201).json(
        { message: 'Creacion exitosa' }
      );
    } catch (error) {
      res.status(400).json(
        { message: error.message }
      );
    }
  }
}

export default new CreateVisitorAction();