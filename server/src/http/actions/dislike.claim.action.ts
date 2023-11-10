import {Request, Response} from 'express';
import CreateDislikeCommand from 'application/commands/DislikeCommand';
import dislikeHandler, {DislikeHandler} from 'application/handlers/DislikeHandler';

class DislikeClaimAction {

    constructor(private handler: DislikeHandler){

    }

    public async run(req: Request, res: Response){
        const {visitorId,claimId,pin} = req.body;

        try{
            if(!claimId || !pin){
                res.status(400).json({message : 'Son requeridos el id y el pin del reclamo'});
                return
            }
        
        const command = new CreateDislikeCommand(visitorId,pin,claimId);
        
        await this.handler.handle(command)

        res.status(200).json({message: 'Dislike Realizado'});
    }catch(error){
        const{message} = error as Error;
        res.status(400).json({message});
    }
  }
}
export default new DislikeClaimAction(dislikeHandler)