import Visitor from './Entity_Visitor'; 
import Category from './Entity_Category';
class Claim{
    private id: string;
    private owner: Visitor;
    private title: string;
    private description: string;
    private category: Category;
    private location: string;
    private createdAt: Date;
    private cloneOf: Claim;
    
    private constructor(
        id: string,
        owner: Visitor,
        title: string,
        description: string,
        category: Category,
        location: string,
        createdAt: Date,
        cloneOf: Claim,
    ){
        this.id=id;
        this.owner=owner;
        this.title=title;
        this.description=description;
        this.category=category;
        this.location=location;
        this.createdAt=createdAt;
        this.cloneOf=cloneOf;
    }

    public static create(
        id: string,
        owner: Visitor,
        title: string,
        description: string,
        category: Category,
        location: string,
        createdAt: Date,
        cloneOf: Claim
        ): Claim{
        return new Claim(
            id,
            owner,
            title,
            description,
            category,
            location,
            createdAt,
            cloneOf
        )
    }

    public changeOwner(owner: Visitor): void {
        this.owner = owner;
    }
    public changeTitle(title: string): void {
        this.title = title;
    }
    public changeDescription(description: string): void{
        this.description=description;
    }  
    public changeCategory(category: Category): void{
        this.category=category;
    }
    public changeLocation(location: string): void{
        this.location=location;
    }
    public changeCreatedAt(createdAt: Date): void{
        this.createdAt=createdAt;
    }
    public changeCloneOf(cloneOf: Claim): void{
        this.cloneOf=cloneOf;
    }
    public getId(): string{
        return this.id;
    }
    public getOwner(): Visitor{
        return this.owner;
    }
    public getTitle(): string{
        return this.title;
    }
    public getDescription(): string{
        return this.description;
    }
    public getCategory(): Category{
        return this.category;
    }
    public getLocation(): string{
        return this.location;
    }
    public getCreatedAt(): Date{
        return this.createdAt;
    }
    public getCloneOf(): Claim{
        return this.cloneOf;
    }
}
export default Claim;