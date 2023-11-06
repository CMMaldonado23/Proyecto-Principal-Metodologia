import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/RepositoryClaim";
import visitorRepository, {VisitorRepository} from "../../infrastructure/repositories/RepositoryVisitor";
import LikeCommand from "../commands/LikeCommand";

export class LikeHandler {
  private claimRepository: ClaimRepository;
  private visitorRepository: VisitorRepository;

  public constructor(claimRepository: ClaimRepository, visitorRepository: VisitorRepository) {
    this.claimRepository = claimRepository;
    this.visitorRepository = visitorRepository;
  }

  public async execute(command: LikeCommand) {

    const claim = await this.claimRepository.findOneById(command.getClaimId());

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


    claim.addLike(visitor.getId());

    await this.claimRepository.save(claim);
  }
}

export default new LikeHandler(claimRepository, visitorRepository);
