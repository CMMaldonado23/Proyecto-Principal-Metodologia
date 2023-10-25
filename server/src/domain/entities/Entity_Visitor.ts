class Visitor {

    private  id: string
    private  ip: string
    private  nickname: string 
    private pin : string


     public constructor(
        id: string,
        ip: string,
        nicknmame: string,
        pin: string
    ){

        this.id = id;
        this.ip = ip;
        this.nickname = nicknmame;        
        this.pin= pin
    }
    public getId(): string {
        return this.id;
      }
      public getPin(): string {
        return this.pin
      }
      public static create(id: string, ip: string, nickname: string, pin: string): Visitor{
        return new Visitor(
          id,
          ip,
          nickname,
          pin
        )
      }
        
      }
    
export default Visitor;


