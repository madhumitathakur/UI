import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css'],
})
export class InterviewFormComponent implements OnInit {
  interviewForm: FormGroup;
  constructor(private formbuilder : FormBuilder) {
    this.interviewForm = this.formbuilder.group({
      candidateId : ['',Validators.required],
      finalStatus : ['',Validators.required],
      hrRating : ['',Validators.required],
      techRating : ['',Validators.required],
      date : ['',Validators.required]
    })
  }

    submitInterviewForm = () => {
    console.log(this.interviewForm.value);


  }

  ngOnInit(): void {}
}
