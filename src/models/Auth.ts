/**
 * @author : Joseph Adogeri
 * @since : 13-JUN-2024
 * @version 1.0 
 * 
 * The Auth class represents the authentication for each User
*/

class Auth{

    private token : string;

    private expiration : string;

    private client : Client;  

    public constructor(token : string,expiration : string, client : Client){

        this.token = token;
        this.expiration = expiration;
        this.client = client;
    }

    public deactivate(client : Client) : void {

        client.setIsActive(false);
    }
   
    public activate(client : Client) : void {

        client.setIsActive(true);
    }

}