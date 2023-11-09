import Visitor from "domain/entities/Entity_Visitor";

import CreateVisitorCommand from "application/commands/create.visitor.command";

import visitorRepository ,{VisitorRepository} from "infrastructure/repositories/RepositoryVisitor";


export class CreateVisitorHandler {
    private visitorRepository : VisitorRepository;
    public constructor(visitorRepository: VisitorRepository){
        this.visitorRepository = visitorRepository;
    }

    public async handle(command: CreateVisitorCommand): Promise <void>{
        const visitor = Visitor.create(
            command.getIp(),
            command.getNickname(),
            command.getPin()
        );

        await this.visitorRepository.save(visitor);
    }
}

export default new CreateVisitorHandler(visitorRepository);