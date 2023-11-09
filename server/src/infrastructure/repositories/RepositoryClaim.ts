import Claim from "../../domain/entities/Entity_Claim";

class ClaimRepository {
  private claims: Claim[];

  public constructor() {
    this.claims = [];
  }

  public async save(claim: Claim): Promise<void> {
    const saveClaim = this.claims.find(a => a.getId() === claim.getId());

    if (saveClaim) {
      this.claims.splice(this.claims.indexOf(saveClaim), 1);
    }

    this.claims.push(claim);
  }

  public async findOneById(id: string): Promise<Claim | null> {
    const claim = this.claims.find(a => a.getId() === id);

    return claim ? claim : null;
  }
 public async lastFiveOnfFireInLastHour(): Promise<Claim[]>{
  const now = new Date();
  const oneHourAgo = new Date(now);
  oneHourAgo.setHours(now.getHours() - 1);

  return this.getActiveClaims().filter((claim) =>
  claim.createdAt > oneHourAgo
  )
  .sort((a,b) => b.getLikes()- a.getLikes())
  .slice(0,5)
 }
  

 private getActiveClaims(): Array<Claim>{
  return this.claims.filter(c => !c.cloneOf);
 }
}

export { ClaimRepository };
export default new ClaimRepository();