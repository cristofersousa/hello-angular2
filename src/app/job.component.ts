import { Component, Input } from '@angular/core';
import {Job } from './job';  // inserindo nossa classe


@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./app.component.css']
})

//minha classe
export class JobComponent {
  @Input() job: Job;

  public isCollapsed:boolean = false;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
}
