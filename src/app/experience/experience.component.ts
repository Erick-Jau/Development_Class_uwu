import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  userForm!:FormGroup;


  constructor(
    public formBuilder:FormBuilder
  ) {
     
   }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      fullname:new FormControl('',[Validators.required,Validators.minLength(8), Validators.maxLength(28)]),
      email:new FormControl('',[Validators.required, Validators.minLength(8)]),
      school:new FormControl('',[Validators.required]),
      telephone:new FormControl('')
    })

  }

  get getControl(){
    return this.userForm.controls;
  }

}

