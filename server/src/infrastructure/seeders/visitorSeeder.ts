import RepositoryVisitor from "../repositories/RepositoryVisitor";
import Visitor from "../../domain/entities/Entity_Visitor";

class VisitorSeeder {
    private visitor : Array<Visitor> = [];

    public constructor (){
        //ejemplo 
        //this.visitor.push(this.visitor.create('',));
    }

    public async generate(): Promise<void> {
        for (const visitor of this.visitor){
            await RepositoryVisitor.save(visitor);
        }
    }
}

export default new VisitorSeeder();