import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() time: number = null;
  minutes: string = null;
  seconds: string = null;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes): void {
    if (changes.time) {
      const minutes = Math.trunc(changes.time.currentValue / 60);
      const seconds = changes.time.currentValue - minutes * 60;

      this.minutes = ('0' + minutes).substr(-2);
      this.seconds = ('0' + seconds).substr(-2);
    }
  }

}
