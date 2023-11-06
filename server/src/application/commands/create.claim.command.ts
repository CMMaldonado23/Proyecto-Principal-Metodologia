import Category from "../../domain/entities/Entity_Category";
import Claim from "../../domain/entities/Entity_Claim";
import Visitor from "../../domain/entities/Entity_Visitor";

class CreateClaimCommand {
    private readonly id: string;
    private readonly owner: string;
    private readonly title: string;
    private readonly description: string;
    private readonly category: string;
    private readonly location: string;
    private readonly createdAt: Date;
    private readonly cloneOf: Claim;

    public constructor(
        id: string,
        owner: string,
        title: string,
        description: string,
        category: string,
        location: string,
        createdAt: Date,
        cloneOf: Claim
    ){
        this.id = id;
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.category = category;
        this.location = location;
        this.createdAt = createdAt;
        this.cloneOf = cloneOf;
    }

    public getId(): string {
        return this.id;
    }
    public getOwner(): string {
        return this.owner;
    }
    public getTitle(): string {
        return this.title;
    }
    public getDescription(): string {
        return this.description;
    }
    public getCategory(): string {
        return this.category;
    }
    public getLocation(): string {
        return this.location;
    }
    public getCreatedAt(): Date {
        return this.createdAt;
    }
    public getCloneOf(): Claim {
        return this.cloneOf;
    }
}
export default CreateClaimCommand;