import { Request, Response } from "express";
import claimRepository ,{ ClaimRepository } from "infrastructure/repositories/RepositoryClaim";

class GetFiveOnFireAction{
    constructor(
        private claimRepository: ClaimRepository,
    ){
    }
        public async run(_req: Request, res: Response){
            try{
                const lastFiveClaimOnFire = await this.claimRepository.lastFiveOnfFireInLastHour();
                return res.status(200).json({
                    claims: lastFiveClaimOnFire.map(c => ({
                        id: c.getId(),
                        title: c.getTitle(),
                        description: c.getDescription(),
                        
                    })),
                });
            } catch(error){
                return res.status(500).json(
                    {error: "Se produjo un error, no se pudieron obtener los 5 ultimos reclamos 'on fire'"}
                    )
            }
        }
    }


export default new GetFiveOnFireAction(claimRepository);
