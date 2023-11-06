import { Request, Response } from 'express';
import CreateClaimCommand from '../../../application/commands/claim/create.claim.command';
import createClaimHandler from '../../../application/handlers/claim/create.claim.handler';

class CreateClaimAction {
  public async run(req: Request, res: Response) {
    const { id, owner, title, description, category, location, createdAt,cloneOf } = req.body;

    try {
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
        { message: 'Claim created successfully' }
      );
    } catch (error) {
      res.status(400).json(
        { message: error.message }
      );
    }
  }
}

export default new CreateClaimAction();