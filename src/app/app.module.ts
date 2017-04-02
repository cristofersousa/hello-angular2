import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { JobComponent } from './job.component';   // inserindo meu módulo
import { JobDetailComponent } from './job-detail.component';   // inserindo o meu detalhes de vagas
import { JobService } from './job.service';
import { CollapseModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,    // inserindo o JobComponent
    JobDetailComponent,
    ],
  imports: [
    CollapseModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([   //inserindo o router
      {
        path: 'detail',
        component: JobDetailComponent
      }
    ])
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
