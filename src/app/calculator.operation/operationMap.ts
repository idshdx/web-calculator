import { Operation } from './operation';
import { Substraction } from './substraction';
import { Multiplication } from './multiplication';
import { Division } from './division';
import { Addition } from './addition';


export class OperationMap{
    map: Map<string, Operation> = new Map<string, Operation>();


    constructor(){
        this.map.set("+",new Addition());
        this.map.set("/",new Division());
        this.map.set("*",new Multiplication());
        this.map.set("-",new Substraction());
    }

    getOperation(key:string): Operation {
        return this.map.get(key);
    }
}