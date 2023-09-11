class category{
    private id: string
    private name: string
    private color: string

    private constructor(
        id:string,
        name:string,
        color:string

    ){
       this.id = id;
       this.name = name;
       this.color = color;
    }
}

export default category;