import { Component, OnInit, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;


  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus == "allumé"){
      return 'green';
    }
    else if (this.appareilName == "éteint"){
      return 'red';
    }
  }

}
