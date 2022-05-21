import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Interview } from 'src/app/entities/interview.entity';

import { InterviewService } from 'src/app/services/interview.service';


@Component({
  selector: 'interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css'],
})
export class InterviewFormComponent {
  forms: any = [];
  interviewDetails: Array<Interview> = new Array();
  // interviewForm: FormGroup;



  constructor(private interviewService: InterviewService, private formBuilder: FormBuilder) {

    this.interviewService.getAllInterviews().subscribe((serverResponse: any) => {
      console.log('constrcutor serverResponse ', serverResponse);
      this.forms = serverResponse;
    })
  }

  interviewForm = new FormGroup({
    interviewId: new FormControl('', [Validators.required]),

    candidateId: new FormControl('', [Validators.required]),
    finalStatus: new FormControl('', [Validators.required]),
    hrRating: new FormControl('', [Validators.required]),
    techRating: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })




  submitInterviewForm = () => {

    var interview_form = {
      interviewId: this.interviewForm.value['interviewId'],

      candidateId: this.interviewForm.value['candidateId'],
      techRating: this.interviewForm.value['techRating'],
      hrRating: this.interviewForm.value['hrRating'],

      finalStatus: this.interviewForm.value['finalStatus']
      // date: this.interviewForm.value['date']
    };

    this.interviewService.createNewInterview(interview_form).subscribe((serverResponse: any) => {
      console.log('createNewInterview - serviceResponse : ', serverResponse);

      this.forms.push(serverResponse);
    })

    console.log(this.interviewForm.value);
    this.interviewService.addInterviews(interview_form);

  }


  deleteInterviewById(interviewId: number) {
    console.log("delete method called");
  }

  shareInterviewById(interviewId: number) {
    console.log("share called")
  }

}







