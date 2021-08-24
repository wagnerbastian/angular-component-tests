import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  private countdownTimerRef: any = null;
  public countdown: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }

  startCountdown(): void {
    if(this.init && this.init >0){
      this.clearTimeout();
      this.countdown = this.init;
      this.doCountdown();
    }
  }

  private doCountdown(): void {
    this.countdownTimerRef = setTimeout(()=>{
      this.countdown = this.countdown -1;
      this.processCountdown();
    }, 1000);
  }

  private processCountdown(): void {
    if(this.countdown === 0){
      this.onComplete.emit();
      console.log('--countdown end--');
    }
    else{
      this.doCountdown();
    }
  }

  private clearTimeout(): void {
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
}
