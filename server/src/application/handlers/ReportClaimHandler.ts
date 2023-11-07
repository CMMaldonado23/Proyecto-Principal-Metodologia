import claimRepository, { ClaimRepository } from "infrastructure/repositories/RepositoryClaim";
import { ReportDuplicateClaimCommand } from "application/commands/reportDuplicate.claim.command";

export class ReportClaimHandler {

    constructor(
        private claimRepository: ClaimRepository
    ){        
    }

    public async handle(command: ReportDuplicateClaimCommand): Promise<void> {

        const duplicatedClaim = await this.claimRepository.findOneById(command.getId());

        if (!duplicatedClaim){
            throw new Error('Claim not found');
        }

        const originalClaim = await this.claimRepository.findOneById(command.getOriginalId());
        if (!originalClaim){
            throw new Error('Claim not found');
        }

        duplicatedClaim.report(originalClaim);        
    }
}

export default new ReportClaimHandler(claimRepository)