import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  title:string = "PORTFOLIO COMPONENT";
  light:boolean = false;
  activeImg:string ="";
  showPopUp:boolean=false;
  show(src:string):void{
    this.showPopUp= true;
    this.activeImg= src;
  }
  deShow():void{
    this.activeImg="";
    this.showPopUp =false;
  }
}
