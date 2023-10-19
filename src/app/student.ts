export class Student {
    id : number;
    name : string;
    email : string;
    phone : string;
    isDeleted : boolean;

    constructor(id : number, name : string, email:string, phone : string, isDeleted : boolean){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.isDeleted = isDeleted;
    }
    
}
