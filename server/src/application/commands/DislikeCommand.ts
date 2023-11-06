class CreateDislikeCommand {
    private readonly visitorId: string;
    private readonly visitorPin: string;
    private readonly claimId: string;

    public constructor(
        visitorId: string, 
        visitorPin: string,
        claimId: string,     
        ){
            this.visitorId = visitorId;
            this.visitorPin = visitorPin;
            this.claimId = claimId;
        }

    public getVisitorId(): string {
        return this.visitorId;
    }    
    public getVisitorPin(): string {
        return this.visitorPin;
    }
    public getClaimId(): string {
        return this.claimId;
    }
}
export default CreateDislikeCommand;