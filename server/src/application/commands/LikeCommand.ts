class CreateLikeCommand {
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

    public getvisitorId(): string {
        return this.visitorId;
    }    
    public getvisitorPin(): string {
        return this.visitorPin;
    }
    public getclaimId(): string {
        return this.claimId;
    }
}
export default CreateLikeCommand;

