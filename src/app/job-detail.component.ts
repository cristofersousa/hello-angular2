import { Component, Input } from '@angular/core';
import {Job } from './job';  // inserindo nossa classe

@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./app.component.css']
})

//minha classe
export class JobDetailComponent {
  @Input() job: Job;
}
