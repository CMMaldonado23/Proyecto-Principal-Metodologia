export class CreateLikeCommand {
    private readonly visitorId: string;
    private readonly pin: string;
    private readonly id: string;

    public constructor(
        owner: string, 
        pin: string,
        id: string
        ){
            this.visitorId = owner;
            this.pin = pin;
            this.id = id;
        }

    public getvisitorId(): string {
        return this.visitorId;
    }    
    public getPin(): string {
        return this.pin;
    }
    public getId(): string {
        return this.id;
    }
}
export default CreateLikeCommand;

