import { Request, Response } from 'express';
import CreateClaimCommand from 'application/commands/create.claim.command';
import createClaimHandler from 'application/handlers/create.claim.handler';

class CreateClaimAction {
  public async run(req: Request, res: Response) {
    const { id, owner, title, description, category, location, createdAt,cloneOf } = req.body;

    try {
      if (!owner || !title || !description || !category || !location || !id) {
        res.status(400).json({message: "Todos los campos son obligatorios"});
        return
      }
      const command = new CreateClaimCommand(
        id,
        owner,
        title,
        description,
        category,
        location,
        createdAt,
        cloneOf
      );
      
      await createClaimHandler.execute(command);

      return res.status(201).json(
        { message: 'El reclamo fue cargado' }
      );
    } catch (error) {
      res.status(400).json(
        { message: error.message }
      );
    }
  }
}

export default new CreateClaimAction();