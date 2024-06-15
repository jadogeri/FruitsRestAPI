/**
 * @author : Joseph Adogeri
 * @since : 13-JUN-2024
 * @version 1.0 
 * 
 * The Fruit class represents the fruit context 
*/

class Fruit {

    private id : string;
    private name : string;
   
    public constructor(id : string,name : string){

        this.id = id;
        this.name = name;
    
    }

    public getID() : string{

        return this.id

    }

    public getName() : string{

        return this.name
    }
  
}