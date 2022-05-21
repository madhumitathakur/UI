import { Component } from '@angular/core';
import { Interview } from './entities/interview.entity';
<<<<<<< HEAD
import { Pannel } from './entities/pannel.entity';
=======
import { Login } from './entities/login.entity';
>>>>>>> 74e50769c52bb7ed0cfcb55ad1167c6f86ec929f
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview-tracking-system';
  public interviewDetails: Array<Interview> = new Array();
<<<<<<< HEAD
  public pannelMembersDetails:Array<Pannel>=new Array();
=======
  public loginDetails: Array<Login> = new Array();


>>>>>>> 74e50769c52bb7ed0cfcb55ad1167c6f86ec929f
}
