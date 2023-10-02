class Visitor {
    private id: string
    private ip: string
    private nickname: string 


    private constructor(
        id: string,
        ip: string,
        nicknmame: string,
    ){

        this.id = id;
        this.ip = ip;
        this.nickname = nicknmame;

    }
    public getId(): string {
        return this.id;
      }
    
}
    export default Visitor;

