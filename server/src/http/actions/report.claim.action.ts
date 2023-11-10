import {Request, Response} from 'express';
import {ReportDuplicateClaimCommand} from "../../application/commands/reportDuplicate.claim.command";
import reportClaimHandler, {ReportClaimHandler} from "../../application/handlers/ReportClaimHandler";

export class reportClaimAction{
    constructor(
        private handler: ReportClaimHandler
    ){        
    }

    public async run (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const {originalId} = req.body;


        if(!originalId || id){
            res.status(400).json({message: 'Es requerido el id original '});
            return;
        }

        try{
            const command = new ReportDuplicateClaimCommand(id,originalId);
            await this.handler.handle(command);

            res.status(200).json({message: 'Reclamo reportado'})
        } catch(e:any){
            res.status(400).json({message: e.message})
        }
    }
}

export default new reportClaimAction(reportClaimHandler)