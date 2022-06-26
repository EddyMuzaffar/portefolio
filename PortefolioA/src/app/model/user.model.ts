export class User{
    username: string;
    id: number;
    password: string;
    secret_key: string;

    constructor(username: string, id: number, password: string, secret_key : string){
        this.username = username;
        this.id = id;
        this.password = password;
        this.secret_key = secret_key;
    }
}