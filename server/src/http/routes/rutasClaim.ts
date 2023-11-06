import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/claim/create.claim.action';
import updateClaimAction from '../actions/claim/update.claim.action';
import findClaimAction from '../actions/claim/find.claim.action';

class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claim', createClaimAction.run);
    this.app.get('/claim', findClaimAction.run);
    this.app.put('/claim/:id', updateClaimAction.run);

    return this.app;
  }
}

export default ClaimRoutes;