/**
 * @author : Joseph Adogeri
 * @since : 13-JUN-2024
 * @version 1.0 
 * 
 * The Admin class represents the admin context 
*/
import User from "./User";
import Client from "./Client";

class Admin extends User{

    private is_admin : boolean;
  

    public constructor(id : string,username : string,password : string, nickname : string,
                       token : string, created_at : string){

        super(id,username,password,nickname,token,created_at);
        this.is_admin = true;
    }

    public deactivate(client : Client) : void {

        client.setIsActive(false);
    }
   
    public activate(client : Client) : void {

        client.setIsActive(true);
    }

}