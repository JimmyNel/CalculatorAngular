import { Component, OnInit, HostListener } from '@angular/core';
import { CalculService } from '../calcul.service'

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  userInput = "";
  result = "";

  constructor(private calc: CalculService) { }

  ngOnInit() {
  }

  getInput(value){
    this.calc.inputStyle(this.userInput);
    this.userInput = this.calc.input(this.userInput, value);
      this.getResult();
  }

  getClear(){
    this.userInput = this.calc.clear();
    this.result = this.calc.clear();
  }

  getReturn(){
    this.calc.inputStyle(this.userInput);
    this.userInput = this.calc.deleteChar(this.userInput);
      this.getResult();
  }

  getResult(){
    this.result = this.calc.calculate(this.userInput);
    //console.log(this.result);
  }

  // Implement the keyboard input
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent){
    //console.log(ev.keyCode);
    //console.log(ev.key);

    const REGEX = /^[0-9+*/\-.]$/
    if(REGEX.exec(ev.key))
      this.getInput(ev.key);
    if(ev.keyCode === 8) 
      this.getReturn();
 }
}
