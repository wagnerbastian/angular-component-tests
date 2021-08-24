import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentgames';
  public isAddTimerVisible: boolean = false;
  isEndTimerAlertVisible: boolean = false;
  time: number = 0;
  timers: Array<number> = [];

  constructor() {
    this.timers = [3, 2, 144];
  }

  logCountdownEnd(): void {
    console.log('countdown ends');
  }


  showAddTimer(): void {
    this.isAddTimerVisible = true;
  }

  hideAddTimer(): void {
    this.isAddTimerVisible = false;
  }

  showEndTimerAlert(): void {
    this.isEndTimerAlertVisible = true;
  }

  hideEndTimerAlert(): void {
    this.isEndTimerAlertVisible = false;
  }

  public submitAddTimer(): void {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
}
