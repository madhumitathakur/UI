import { Component } from '@angular/core';
import { Interview } from './entities/interview.entity';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview-tracking-system';
  public interviewDetails: Array<Interview> = new Array();
}
