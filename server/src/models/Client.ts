/**
 * @author : Joseph Adogeri
 * @since : 13-JUN-2024
 * @version 1.0 
 * 
 * The Client class represents the client context 
*/

import User from "./User";
import Fruit from "./Fruit";

export default class Client extends User{

    private fruits : Fruit[];
  

    public constructor(id : string,username : string,password : string, nickname : string,
                       token : string, created_at : string){

        super(id,username,password,nickname,token,created_at);
    }

    public addFruit(fruit :Fruit) : void {
        
        if(this.isFull()){
            return;
        }
        else{
            this.fruits.push(fruit);   
        }     
        
    }

    public removeFruit(fruitRemoved : Fruit) : void{

        this.fruits = this.fruits.filter((fruit)=>{
            return fruit.getID() !== fruitRemoved.getID();
        });
    }

    public totalFruits() : number{

       return  this.fruits.length;

    }

    public isFull(): boolean{

        let isMaxCapacity : boolean = false;
        if( this.fruits.length >= 10){
            isMaxCapacity = true;
        }

        return isMaxCapacity;
    }
    

}

