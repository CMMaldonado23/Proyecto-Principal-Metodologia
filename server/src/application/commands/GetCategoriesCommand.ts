class CreateCategoryCommand{
    private readonly id: string;
    private readonly name: string;
    private readonly color: string;

    public constructor(
        id:string,
        name: string,
        color:string
    ){
        this.id = id;
        this.name = name;
        this.color= color; 
    }

    public getId ():string{
        return this.id;
    }
    public getName(): string{
        return this.name;
    }
    public getColor(): string{
        return this.color;
    }
}

export default CreateCategoryCommand;