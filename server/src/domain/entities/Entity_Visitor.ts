import {v4} from "uuid";

class Visitor {

  private id: string
  private ip: string
  private nickname: string
  private pin: string


  public constructor(
    id: string,
    ip: string,
    nicknmame: string,
    pin: string
  ) {

    this.id = id;
    this.ip = ip;
    this.nickname = nicknmame;
    this.pin = pin
  }

  public getId(): string {
    return this.id;
  }

  public getPin(): string {
    return this.pin
  }

  public static create(ip: string, nickname: string, pin: string): Visitor {
    return new Visitor(
      v4(),
      ip,
      nickname,
      pin
    )
  }

  pinMatch(pin: string) {
    return this.pin === pin;
  }

  public getNickName(): string {
    return this.nickname;
  }

  public getIp(): string {
    return this.ip;
  }
}

export default Visitor;


