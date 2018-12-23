import { Operation } from './operation';

export class Substraction implements Operation {
    runOperation(input:number, input2:number):number {
        return +input - +input2;
    }
}