import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from 'http/actions/CreateClaimAction';
import likeClaimAction from 'http/actions/LikeAction';
import reportDuplicateClaimAction from 'http/actions/report.claim.action';
import getLastClaimsAction from 'http/actions/GetLastClaimsAction';
import findLastFiveClaimsAction from 'http/actions/find.last.five.Onfire.claim.action';


class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claim', createClaimAction.run);
    this.app.put('/claims/:id/like', likeClaimAction.run);
    this.app.put('/claims/:id/report', reportDuplicateClaimAction.run)
    this.app.get('/claims', getLastClaimsAction.run);
    this.app.get('/claims/on-fire', findLastFiveClaimsAction.run);

    return this.app;
  }
}

export default ClaimRoutes;