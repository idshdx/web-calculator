import { Component } from '@angular/core';
import { OperationMap } from './calculator.operation/operationMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OperationMap]
})

export class AppComponent {
  result:string;
  operation:string;
  firstOperand:string;
  secondOperand:string;

  history:Array<any> = [];

  operations:Array<string> = ['+', '*', '/'];
  
  constructor(private operationMap: OperationMap) {
    this.result = '';
  }  

  processInput(value:string):void {
      this.result += value;

      // Set the operands. If there is an operation set, we should set the second operand and viceversa
      if (this.operation) {
        this.secondOperand ? this.secondOperand += value : this.secondOperand = value;
      } else {
        this.firstOperand ? this.firstOperand += value : this.firstOperand = value;
      }
  } 

  clearResult():void {
      this.result = '';
      this.history = [];
      this.operation = undefined;
      this.firstOperand = undefined;
      this.secondOperand = undefined;
  }

  // I would have implemented in this way. SUPER SIMPLE. But the req said i must use OOP so...
  equal() {
    try {
      this.result = eval(this.result.toString());
    } catch(e) {
      throw e;
    }
  }

  setOperation(op:string):void {
    // differentiate between negative numbers and subtraction
    if (op === '-') {
      if ((this.result[this.result.length -2] === '-' && this.lastResultChar() === '-') || (this.result.length === 1 && this.lastResultChar() === '-')) {
        return;
      }
      if(!this.result || this.operations.indexOf(this.lastResultChar()) !== -1) {
        this.processInput(op);
        return;
      }
    }
    //check for the last character so we dont have multiple operations like 1++---5
    if (this.operations.indexOf(this.lastResultChar()) !== -1 || !this.result || this.lastResultChar() === '-') return;

    //if there is a previous operation set, calculare it before setting the new one
    if (this.operation) this.displayResult();

    this.result += op;
    this.operation = op;
  }

  displayResult() {
    if(!this.operation || !this.secondOperand) return;

    console.log('1st: ', this.firstOperand)
    console.log('2nd: ', this.secondOperand)
    console.log('op: ', this.operation)

    this.result = this.operationMap.getOperation(this.operation).runOperation(parseFloat(this.firstOperand), parseFloat(this.secondOperand));

    this.history.push(this.result);

    this.firstOperand = this.result;

    this.operation = undefined;
    this.secondOperand = undefined;
  }

  goBack() {
    if(!this.history.length || this.history.length === 1) return;

    this.history.pop();
    this.result = this.history[this.history.length -1];
    this.firstOperand = this.result;
  }
  processKeyBindings($event) {
    switch($event.key) {
      case '1':
        this.processInput('1');
        break;
      case '2':
        this.processInput('2');
        break;
      case '3':
        this.processInput('3');
        break;
      case '4':
        this.processInput('3');
        break;
      case '5':
        this.processInput('5');
        break;
      case '6':
        this.processInput('6');
        break;
      case '7':
        this.processInput('7');
        break;
      case '8':
        this.processInput('8');
        break;
      case '9':
        this.processInput('9');
        break;
      case '-':
        this.setOperation('-');
        break;
      case '+':
        this.processInput('5');
        break;
      case '*':
        this.processInput('*');
        break;
      case '/':
        this.processInput('/');
        break;
      default:
        this.displayResult();
        break;
    }
  }
  private lastResultChar() {
    if (!this.result) return;

    return this.result[this.result.length -1];
  }
}
