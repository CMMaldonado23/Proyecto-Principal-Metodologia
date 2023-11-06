import category from "../../domain/entities/Entity_Category";

class CategoryRepository {
  private category: category[];

  public constructor() {
    this.category = [];
  }


  public async save(category: category): Promise<void> {
    const saveCategory = this.category.find(a => a.getId() === category.getId())

    if (saveCategory) {
      this.category.slice(this.category.indexOf(saveCategory), 1);
    }
    this.category.push(category)
  }

  public async findOneById(id: string): Promise<category | null> {
    const category = this.category.find(a => a.getId() === id);

    return category ? category : null;
  }

  async findAll(): Promise<category[]> {
    return this.category;
  }

}
export { CategoryRepository }
export default new CategoryRepository();
