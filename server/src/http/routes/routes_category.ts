import {Application} from 'express';
import CommonRoutes from './common.routes';
import createCategoryAction from '../actions/category/create.category.action';
import updateCategoryAction from '../actions/category/update.category.action';
import findCategoryAction from '../actions/category/find.category.action';

class CategoryRoutes extends CommonRoutes{
    public constructor(app: Application){
        super(app,'Category');
    }

    public setUpRoutes(): Application {
        this.app.post('/category', createBookingAction.run)
        this.app.get('/category', findBookingAction.run)
        this.app.put('/category/:id', updateBookingAction.run )

        return this.app;
    }
}

export default CategoryRoutes;