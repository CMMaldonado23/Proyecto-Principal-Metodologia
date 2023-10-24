import Visitor from "domain/entities/Entity_Visitor";
import RepositoryVisitor from "infrastructure/repositories/RepositoryVisitor";
import CreateVisitorCommand from "application/commands/create.visitor.command";


class CreateVisitorHandler{
    async execute (command : CreateVisitorCommand){

        const id = command.getId();
        const findId = await RepositoryVisitor.findOneById(id);

        if(!findId){
            const visitor = Visitor.create(
                command.getId(),
                command.getIp(),
                command.getNickname(),
                command.getPin()
            );                 
        }else{
            throw new Error('Visitor already exists')
        }
    }
}
export default new CreateVisitorHandler();