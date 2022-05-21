import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pannel } from 'src/app/entities/pannel.entity';
import { PannelService } from 'src/app/services/pannel.service';

@Component({
  selector: 'app-panel-form',
  templateUrl: './panel-form.component.html',
  styleUrls: ['./panel-form.component.css']
})
export class PanelFormComponent  {

  forms: any = [];
  pannelMembersDetails: Array<Pannel> = new Array();


  
  constructor(private  pannelService:  PannelService, private formBuilder: FormBuilder) {

    this. pannelService.getAllPannelMembers().subscribe((serverResponse: any) => {
      console.log('constrcutor serverResponse ', serverResponse);
      this.forms = serverResponse;
    })
  }



  pannelForm = new FormGroup({
    employeeId: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
  })

  submitPannelForm = () => {

    var pannel_form = {
      employeeId: this.pannelForm.value['employeeId'],
      name: this.pannelForm.value['name'],
      type: this.pannelForm.value['type'],

      location: this.pannelForm.value['location']
      // date: this.interviewForm.value['date']
    };

  this.pannelService.createNewPannel(pannel_form).subscribe((serverResponse: any) => {
    console.log('createNewPannel - serviceResponse : ', serverResponse);

    this.forms.push(serverResponse);
  })

  console.log(this.pannelForm.value);
  this.pannelService.addPannels(pannel_form);

}
}
