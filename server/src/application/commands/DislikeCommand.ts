class CreateDislikeCommand {
    //private readonly visitorId: string;
    //private readonly pin: string;
    //private readonly claimId: string;

    public constructor(
        private visitorId: string, 
        private pin: string,
        private claimId: string,     
        ){
            this.visitorId = visitorId;
            this.pin = pin;
            this.claimId = claimId;
        }

    public getVisitorId(): string {
        return this.visitorId;
    }    
    public getPin(): string {
        return this.pin;
    }
    public getClaimId(): string {
        return this.claimId;
    }
}
export default CreateDislikeCommand;