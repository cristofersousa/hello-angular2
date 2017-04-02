import {Injectable} from '@angular/core';
import {Job} from './job';
import {Http, Headers} from '@angular/http';


@Injectable ()
export class JobService {

headers =  new Headers();
url: string;

constructor(private http: Http) {
  this.headers = new Headers({'Content-Type': 'application/json'});
  this.url = 'http://159.2013.162.141:9999/';
}
  getJobs(): Promise<Job[]> {
    return this.http.get(this.url + 'jobs')
    .toPromise()
    .then(res => res.json());
  }

  getJob(id:string): Promise<Job> {
    return this.http.get(this.url+ 'jobs' + '${id}')
    .toPromise()
    .then(res => res.json());
  }

  addJob(job): Promise<Job> {
    return this.http
    .post(this.url + 'jobs', {titulo: job.titulo, descricao:job.descricao}, {headers:this.headers})
    .toPromise()
    .then (res => {
      return res.json()
    })
  }
}
