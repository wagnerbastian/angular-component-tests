// tslint:disable: no-output-on-prefix
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {


  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;
  private countdownEndsSubscription: Subscription = null;
  private countdownSubscription: Subscription = null;
  public countdown: number = 0;


  constructor(public timer: TimerService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);

    this.countdownEndsSubscription = this.timer.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });
    this.countdownSubscription = this.timer.countdown$
    .subscribe((data) => {
      this.countdown = data;
      this.cdRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.timer.destroy();
    this.countdownEndsSubscription.unsubscribe();
    this.countdownSubscription.unsubscribe();
  }

  get progress(): number {
    return (this.init - this.countdown) / this.init * 100;
  }
}
