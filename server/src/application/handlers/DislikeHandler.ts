import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/RepositoryClaim";
import visitorRepository, {VisitorRepository} from "../../infrastructure/repositories/RepositoryVisitor";
import DislikeCommand from "../commands/DislikeCommand";
export class DislikeHandler {
    private claimRepository: ClaimRepository;
    private visitorRepository: VisitorRepository;

    public constructor(claimRepository: ClaimRepository, visitorRepository: VisitorRepository){
        this.claimRepository = claimRepository;
        this.visitorRepository = visitorRepository;
    }

    public async handle(command: DislikeCommand): Promise<void>
    {
        const claimId = command.getClaimId();
        const claim = await this.claimRepository.findOneById(claimId);

        if (!claim) {
            throw new Error('claim not found');
        }
      
          const visitor = await this.visitorRepository.findOneById(command.getVisitorId());
      
        if (!visitor) {
            throw new Error('visitor not found');
          }
      
        if (!visitor.pinMatch(command.getPin())) {
            throw new Error('visitor pin does not match')
        }

        claim.addDislike(visitor.getId());

        await this.claimRepository.save(claim);
    }
}
export default new DislikeHandler(claimRepository, visitorRepository);