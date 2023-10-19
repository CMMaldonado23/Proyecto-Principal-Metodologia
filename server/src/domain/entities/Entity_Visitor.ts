class Visitor {
    private id: string
    private ip: string
    private nickname: string 
    private pin: string

    private constructor(
        id: string,
        ip: string,
        nicknmame: string,
        pin: string
    ){

        this.id = id;
        this.ip = ip;
        this.nickname = nicknmame;
        this.pin = pin;

    }
    public getId(): string {
        return this.id;
    }
    public getNickName(): string {
        return this.nickname;
    }       
}
    export default Visitor;

