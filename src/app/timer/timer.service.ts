import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class TimerService {
  private countdownTimerRef: any = null;
  paused: boolean = true;

  private init: number = 0;

  private countdownEndSource = new Subject<void>();
  countdownEnd$ = this.countdownEndSource.asObservable();
  private countdownSource = new BehaviorSubject<number>(0);
  countdown$ = this.countdownSource.asObservable();

  constructor() { }

  destroy(): void {
    this.clearTimeout();
  }

  restartCountdown(init?): void {
    if (init) {
      this.init = init;
    }
    if (this.init && this.init > 0) {
      this.paused = true;
      this.clearTimeout();
      this.countdownSource.next(this.init);
    }
  }

  private doCountdown(): void {
    this.countdownTimerRef = setTimeout(() => {
      this.countdownSource.next(this.countdownSource.getValue() - 1);
      this.processCountdown();
    }, 1000);
  }

  private processCountdown(): void {
    if (this.countdownSource.getValue() === 0) {
      this.countdownEndSource.next();
      console.log('--countdown end--');
    }
    else {
      this.doCountdown();
    }
  }

  toggleCountdown(): void {
    this.paused = !this.paused;

    if (this.paused === false) {
      this.doCountdown();
    } else {
      this.clearTimeout();
    }
  }

  private clearTimeout(): void {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
}
