import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  flag:boolean = true;
  modelImg:string = '';
  srcs: string[] = [
    '../../assets/cabin.png',
    '../../assets/cake.png',
    '../../assets/circus.png',
    '../../assets/game.png',
    '../../assets/safe.png',
    '../../assets/submarine.png',

  ]

  hideModel( element: EventTarget | null, img: HTMLImageElement):void {
    if(element == img ) return;

    this.flag = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
