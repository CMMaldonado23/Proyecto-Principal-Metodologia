import {Request, Response} from "express";
import  category from "../../domain/entities/Entity_Category"
import CategoryRepository from "../../infrastructure/repositories/RepositoryCategory"


class GetCategoryAction{

    async run(_req: Request, res: Response){
        const category: category[]= await CategoryRepository.findAll();
        

    }
}

export default new GetCategoryAction();