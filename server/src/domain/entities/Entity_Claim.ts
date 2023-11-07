import Visitor from './Entity_Visitor';
import Category from './Entity_Category';
import {v4} from "uuid";

class Claim {
  private id: string;
  private owner: Visitor;
  private title: string;
  private description: string;
  private category: Category;
  private location: string;
  private createdAt: Date;
  private cloneOf: Claim| null;
  private likes: string[] = []
  private dislikes: string[] = []

  private constructor(
    id: string,
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location;
    this.createdAt = createdAt;
    this.cloneOf = null;
  }

  public static create(
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
  ): Claim {
    return new Claim(
      v4(),
      owner,
      title,
      description,
      category,
      location,
      new Date()
    )
  }

  public changeOwner(owner: Visitor): void {
    this.owner = owner;
  }

  public changeTitle(title: string): void {
    this.title = title;
  }

  public changeDescription(description: string): void {
    this.description = description;
  }

  public changeCategory(category: Category): void {
    this.category = category;
  }

  public changeLocation(location: string): void {
    this.location = location;
  }

  public changeCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public changeCloneOf(cloneOf: Claim): void {
    this.cloneOf = cloneOf;
  }

  public getId(): string {
    return this.id;
  }

  public getOwner(): Visitor {
    return this.owner;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCategory(): Category {
    return this.category;
  }

  public getLocation(): string {
    return this.location;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getCloneOf(): Claim | null{
    return this.cloneOf;
  }

  addLike(id: string) {
    if (this.hasVisitorLiked(id)) {
      throw new Error('Visitor has already liked this claim.')
    }

    this.likes.push(id)
  }
  
  addDislike(id: string){
    if (this.hasVisitorDisliked(id)){
      throw new Error('Visitor has already disliked this claim.')
    }
  }

  public hasVisitorLiked(id: string) {
    return this.likes.includes(id);
  }

  public hasVisitorDisliked(id: string){
    return this.dislikes.includes(id);
  }

  public report(originalClaim: Claim) {

    if (this.createdAt.getTime() < originalClaim.createdAt.getTime()) {
      throw new Error('Original claim is older than duplicated claim');
    }

    this.cloneOf = originalClaim;
  }
}

export default Claim;