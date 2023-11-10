import RepositoryVisitor from "../repositories/RepositoryVisitor";
import Visitor from "../../domain/entities/Entity_Visitor";

class VisitorSeeder {
    private visitor : Array<Visitor> = [];

    public constructor (){
        //ejemplo 
        //this.visitor.push(this.visitor.create('',));
        this.visitor.push(Visitor.create("192.0.0.1", "Carlos", "123456"));
        this.visitor.push(Visitor.create("192.0.0.1", "Dante", "123456"));
        this.visitor.push(Visitor.create("192.0.0.1", "Lorena", "123456"));
        this.visitor.push(Visitor.create("192.0.0.1", "Juan", "123456"));
        this.visitor.push(Visitor.create("192.0.0.1", "Lautaro", "123456"));
    }

    public async generate(): Promise<void> {
        for (const visitor of this.visitor){
            await RepositoryVisitor.save(visitor);
        }
    }
}

export default new VisitorSeeder();