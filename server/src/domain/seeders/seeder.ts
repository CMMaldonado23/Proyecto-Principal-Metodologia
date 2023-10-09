import { Category } from '../../domain/entities/Entity_Category'
import CategoryRepository from '../../infrastructure/repositories/RepositoryCategory'

class CategorySeeder {
  private categories: Array<Category> = [];
  
  public constructor() {
    this.categories.push(Category.create('Cabanas Los montes', 'Rojo'));
    this.categories.push(Category.create('Hotel First Class', 'Azul'));
    this.categories.push(Category.create('first class', 'Verde'));
    this.categories.push(Category.create('first class', 'Naranja'));
    this.categories.push(Category.create('tourist', 'Amarillo'));
  }

  public async generate(): Promise<void> {
    for (const category of this.categories) {
      await CategoryRepository.save(category);
    }
  }
}

export default new CategorySeeder();