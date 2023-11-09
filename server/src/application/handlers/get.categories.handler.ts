import Category from "domain/entities/Entity_Category";
import  categoryRepository ,{CategoryRepository} from "infrastructure/repositories/RepositoryCategory";
import CreateCategoryCommand from "application/commands/GetCategoriesCommand";


export class GetCategoriesHandler{
    private categoryRepository: CategoryRepository;
    public constructor(categoryRepository: CategoryRepository){
        this.categoryRepository= categoryRepository;
    }
    public async handle(command:CreateCategoryCommand): Promise <void>{
        const categories = Category.create(
            command.getName(),
            command.getColor(),
        );
        await this.categoryRepository.save(categories)
    }
}

export default new GetCategoriesHandler(categoryRepository);
