import { Request, Response } from 'express';
import CreateClaimCommand from 'application/commands/create.claim.command';
import createClaimHandler, {CreateClaimHandler} from "../../application/handlers/create.claim.handler"

class CreateClaimAction {
  constructor(
    private handler: CreateClaimHandler
  ){

  }
  public async run(req: Request, res: Response) {
    const { owner, title, description, category, location } = req.body;
    try {
      if (!owner || !title || !description || !category || !location) {
        res.status(400).json({message: "Todos los campos son obligatorios"});
        return
      }
      const command = new CreateClaimCommand(
        owner,
        title,
        description,
        category,
        location,
        
      );
      
      await this.handler.handle(command);

      return res.status(201).json(
        { message: 'El reclamo fue cargado' }
      );
    } catch (error) {
      const {message} = error as Error;
      res.status(400).json(
        { message: message }
      );
    }
  }
}

export default new CreateClaimAction(createClaimHandler);