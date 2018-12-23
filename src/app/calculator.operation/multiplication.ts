import { Operation } from './operation';

export class Multiplication implements Operation {
    runOperation(input:number,input2:number):number{
        return +input * +input2;
    }
}