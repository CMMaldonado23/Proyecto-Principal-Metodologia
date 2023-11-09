import { Request, Response } from "express";
import claimRepository, {ClaimRepository} from "infrastructure/repositories/RepositoryClaim";
class GetLastClaimsAction
{
    constructor (
        private claimRepository: ClaimRepository,
    ){
    }
    public async run(_req: Request, res:Response){
        try{
            const ultimosReclamos = await this.claimRepository.UltimosReclamos();
            return res.status(200).json({
                claims: ultimosReclamos.map(rec=>({
                    id: rec.getId(),
                    title: rec.getTitle(),
                    description: rec.getDescription(),
                })),
            });
        }
        catch(error){
            res.status(500).json({error: 'No se puedo listar los ultimos reclamos.'});
        }
    }
}
export default new GetLastClaimsAction(claimRepository)