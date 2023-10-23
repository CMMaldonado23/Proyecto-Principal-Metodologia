import RepositoryCategory from "infrastructure/repositories/RepositoryCategory";
import CreateCategoryCommand from "application/commands/GetCategoriesCommand";


class GetCategoriesHandler{
    async execute (command : CreateCategoryCommand){
        const categories = await RepositoryCategory.findOneById(command.getId())

        if(!categories){
            throw new Error ('User not found');
        }
        return categories;
    }
}

export default new GetCategoriesHandler();