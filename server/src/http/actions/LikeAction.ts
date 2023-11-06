import { Request, Response } from 'express';
import LikeCommand from '../../application/commands/LikeCommand';
import LikeHandler from '../../application/handlers/LikeHandler';
class LikeAction {
  public async run (req: Request, res: Response){
    const {visitorId, visitorPin, claimId} = req.body;
    try{
      const command = new LikeCommand(
        visitorId,
        visitorPin,
        claimId
      );
    await LikeHandler.execute(command);
    return res.status(201).json({message: 'Like registered'});  
    }
    catch(error){
      res.status(400).json({message: 'Something goes wrong'});
    }
  }
}
export default new LikeAction();