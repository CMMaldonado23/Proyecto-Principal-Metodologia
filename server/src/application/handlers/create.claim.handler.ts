import Claim from "domain/entities/Entity_Claim";


import visitorRepository, { VisitorRepository} from "infrastructure/repositories/RepositoryVisitor";
import claimRepository, { ClaimRepository } from "infrastructure/repositories/RepositoryClaim";
import  categoryRepository ,{ CategoryRepository } from "infrastructure/repositories/RepositoryCategory";

import CreateClaimCommand from "application/commands/create.claim.command";

export class CreateClaimHandler {

    public constructor(
        private repositoryVisitor: VisitorRepository,
         private claimRepository: ClaimRepository,
         private repositoryCategory: CategoryRepository
        ){
        this.repositoryVisitor = repositoryVisitor;
        this.claimRepository = claimRepository;
        this.repositoryCategory = repositoryCategory;
    }
       public async handle(command: CreateClaimCommand): Promise<void>{
        const owner = await this.repositoryVisitor.findOneById(command.getOwner())

        if(!owner){
            throw new Error('El visitante no existe');
        }

        const category = await this.repositoryCategory.findOneById(command.getCategory())
        if(!category){
            throw new Error('La categoria no fue encontrada')
        }

        const claim = Claim.create(
            owner,
            command.getTitle(),
            command.getDescription(),
            category,
            command.getLocation(),
        );
      await this.claimRepository.save(claim);
    }
}
export default new CreateClaimHandler(
    visitorRepository,
    claimRepository,
    categoryRepository
    );