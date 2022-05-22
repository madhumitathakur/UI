import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidate } from 'src/app/entities/candidate.entity';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  // constructor(private candidateService : CandidateService){

  // }
  forms: any = [];
  candidateDetails: Array<Candidate> = new Array();

  constructor(private candidateService : CandidateService, private formBuilder: FormBuilder) { 
    this.candidateService.getAllCandidate().subscribe((serverResponse: any) => {

      console.log('constructor serverResponse ', serverResponse);
      this.forms = serverResponse;

    })
  }

  ngOnInit(): void {
  }

  

  candidateForm = new FormGroup({
    
    candidateName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    primarySkills: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    secondarySkills: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    experience: new FormControl(null, [Validators.required]),
    qualification: new FormControl(null, [Validators.required]),
    designation: new FormControl(null, [Validators.required]),
    noticePeriod: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required])
  })

  submitCandidateForm = () => {

    var candidate_form = {
      // candidateId:
      candidateName: this.candidateForm.value['candidateName'],
      primarySkills: this.candidateForm.value['primarySkills'],
      secondarySkills: this.candidateForm.value['secondarySkills'],
      experience: this.candidateForm.value['experience'],
      qualification: this.candidateForm.value['qualification'],
      designation: this.candidateForm.value['designation'],
      noticePeriod: this.candidateForm.value['noticePeriod'],
      location: this.candidateForm.value['location']
    };

    this.candidateService.createNewCandidate(candidate_form).subscribe((serverResponse: any) => {
      console.log('createNewCandidate - serviceResponse : ', serverResponse);

      this.forms.push(serverResponse);
    })

    console.log(this.candidateForm.value);
    this.candidateService.addCandidate(candidate_form);
}
}