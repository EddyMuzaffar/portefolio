export class Card{
    photo: string;
    id : number;
    name: string;
    description : string;

    constructor(photo: string, id: number, name : string, description : string){
        this.photo = photo;
        this.id = id;
        this.name = name;
        this.description = description;
    }
}