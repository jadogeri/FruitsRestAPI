/**
 * @author : Joseph Adogeri
 * @since : 13-JUN-2024
 * @version 1.0 
 * 
 * The User class represents the user context 
*/

export default class User {

    private id : string;
    private username : string;
    private password : string;
    private nickname : string;
    private token : string;
    private created_at : string;
    private is_active : boolean;

    public constructor(id : string,username : string,password : string, nickname : string,
                       token : string, created_at : string){

        this.id = id;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.token = token;
        this.created_at = created_at;
        this.is_active = true;
    }

    public setIsActive(status : boolean) : void{

        this.is_active = status;
    }

    public getIsActive() : boolean{

        return this.is_active;
    }

    public unsubscribe() : string{
        
        return "";
    }

}

module.exports = {User};