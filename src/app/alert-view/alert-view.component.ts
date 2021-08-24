// tslint:disable: no-output-on-prefix
// tslint:disable: no-inferrable-types
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.scss']
})
export class AlertViewComponent implements OnInit {
  @Output() onCancel = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<number>();

  public time: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
