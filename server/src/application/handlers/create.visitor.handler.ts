import Visitor from "domain/entities/Entity_Visitor";
import RepositoryVisitor from "infrastructure/repositories/RepositoryVisitor";
import CreateVisitorCommand from "application/commands/create.visitor.command";


class CreateVisitorHandler {
  async execute(command: CreateVisitorCommand) {

    const visitor = Visitor.create(
      command.getIp(),
      command.getNickname(),
      command.getPin()
    );

    await RepositoryVisitor.save(visitor);
  }
}

export default new CreateVisitorHandler();