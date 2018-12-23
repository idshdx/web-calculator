import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('should calculate a result with the provided operation and operands', () => {
    it('+', ()=> {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      app.firstOperand = 1;
      app.secondOperand = 2;
      app.operation = '+';
      app.displayResult();
      fixture.detectChanges();
      expect(app.result).toBe(3);
    });
    it('-', ()=> {
     const fixture = TestBed.createComponent(AppComponent);
const app = fixture.debugElement.componentInstance;
      app.firstOperand = 1;
      app.secondOperand = 2;
      app.operation = '-';
      app.displayResult();
      fixture.detectChanges();
      expect(app.result).toBe(-1);
    });
    it('*', ()=> {
   const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.firstOperand = 1;
    app.secondOperand = 2;
    app.operation = '*';
    app.displayResult();
    fixture.detectChanges();
    expect(app.result).toBe(2);
    });
    it('/', ()=> {
         const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.firstOperand = 1;
    app.secondOperand = 2;
    app.operation = '/';
    app.displayResult();
    fixture.detectChanges();
    expect(app.result).toBe(0.5);
    });
  });
  describe('go back to previous results', async()=> {
           const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.firstOperand = 1;
    app.secondOperand = 2;
    app.operation = '+';
    app.displayResult();
    fixture.detectChanges();
    app.secondOperand = 1;
    app.operation = '+';
    app.displayResult();
    fixture.detectChanges();
    app.goBack();
    fixture.detectChanges();
    expect(app.result).toBe(3);
  })
});
