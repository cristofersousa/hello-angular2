import { Component, OnInit } from '@angular/core';
import {Job } from './job';  // inserindo nossa classe
import {Http, Headers} from '@angular/http';  // protocolos http
import 'rxjs/add/operator/toPromise'; // usando os Observable do RXJS é melhor que do Angular2


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  job: Job = new Job();  // instanciando um newJob
  jobs: Job[] = []; // instanciando um array de Job
  title = 'OpenJobs, find you job.';

  // Angular2 não adota promisses de primeiro estado e sim um Observable
  // criando meus providers (promisses)

  constructor(private http: Http) {

  }

  ngOnInit() : void {
    this.getJobs().then(jobs => {
      console.log(jobs);
      this.jobs = jobs;
    })
  }

  inserir() {
    this.jobs.push(this.job);
    this.job = new Job();
    console.log(this.jobs);
  }

// Lembrar: escrever artigo abordando sobre promisses e arrow function

  getJobs (): Promise<Job[]> {
    return this.http.get('http://159.203.162.141:9999/jobs')
    .toPromise()
    .then(res => res.json());
  }
}
