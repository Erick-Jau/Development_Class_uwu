import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm!:FormGroup;


  constructor(
    public formBuilder:FormBuilder
  ) {
     
   }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      firstjob:new FormControl('',[Validators.required,Validators.minLength(8), Validators.maxLength(28)]),
      secondjob:new FormControl('',[Validators.required, Validators.minLength(8)]),
      thirdjob:new FormControl('',[Validators.required]),
      telephone:new FormControl(''),
      corporateemail:new FormControl('',[Validators.required]),
      personalemail:new FormControl('',[Validators.required]),
    })

  }

  get getControl(){
    return this.userForm.controls;
  }

}
