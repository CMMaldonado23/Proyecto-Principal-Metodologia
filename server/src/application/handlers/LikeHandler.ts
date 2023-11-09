import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/RepositoryClaim";
import visitorRepository, {VisitorRepository} from "../../infrastructure/repositories/RepositoryVisitor";
import LikeCommand from "../commands/LikeCommand";

export class LikeHandler {
  
  public constructor(
    private readonly claimRepository: ClaimRepository,
    private readonly visitorRepository: VisitorRepository
    
  ) {}
  public async execute(command: LikeCommand) {
    //const id = command.getId();
    //const owner = command.getvisitorId();
    //const pint = command.getPin    teniendolos aca podemos remplazar el command por la variable

    const claim = await this.claimRepository.findOneById(command.getId());

    if (!claim) {
      throw new Error('claim not found');
    }

    const visitor = await this.visitorRepository.findOneById(command.getvisitorId());

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
