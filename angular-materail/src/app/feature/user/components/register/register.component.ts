import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regexPatterns, inputValidation } from '../../constants/message';
import * as _moment from 'moment';
import {IRegister} from '../../models/user.model'
import{AuthServce} from '../../servces/auth.service'
const moment = _moment;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedStatus : number;
  selectedCountry: String="--Select Country--";
  loginForm: FormGroup;
  validate=inputValidation;
  regularExp=regexPatterns;
  myFilter=new Date();
  register:IRegister;
  myhobbies: any = [
    {
      name: "Sports",
      value: "sports"
    },
    {
      name: "Music",
      value: "music",
      selected: true
    },
    {
      name: "Movie",
      value: "movie",
      selected: true
    },
    {
      name: "Reading",
      value: "reading"
    },
    {
      name: "Writing",
      value: "writing"
    }
  ];

   
  constructor(
    private formBuilder: FormBuilder,
    private authServce:AuthServce) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.regularExp.emailRegex)]],
      password: [null, Validators.required],
      gender:[null,Validators.required],
      hobbie:this.formBuilder.array([]),
      country:[''],
      state: [''],
      city: [''],
      doj:[new Date()]
    });
    
  }
  Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
	];
  
  onCheckboxChange(e) {
    console.log(e +"onchnage");
    const hobbie: FormArray = this.loginForm.get('hobbie') as FormArray;
  
    if (e.target.checked) {
      hobbie.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      hobbie.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          hobbie.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
	states: Array<any>;

	cities: Array<any>;
	
	changeCountry(e) {
		this.states = this.Countries.find(cntry => cntry.name == e.value ).states;
	}

	changeState(e) {
		this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == e.value).cities;
	}
  submit() {
    this.register={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
      gender:this.loginForm.value.gender,
      hobbies:this.loginForm.value.hobbie,
      country:this.loginForm.value.country,
      state:this.loginForm.value.state,
      city:this.loginForm.value.city,
      jod:this.loginForm.value.doj
    };
    console.log(this.register);
    this.authServce.register(this.register)
                   .subscribe(data=>console.log(data));
  }

}
