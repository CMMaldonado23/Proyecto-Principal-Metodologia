import {Request, Response} from "express";
import CategoryRepository from "../../infrastructure/repositories/RepositoryCategory"


class GetCategoryAction{

    async run(_req: Request, res: Response){
        try{

            const categories = await CategoryRepository.findAll();
            res.status(200).json(categories);
            
        }catch{
            res.status(500).json({error: "Error al obterner las categorias"});
        }
    }
}

export default new GetCategoryAction();