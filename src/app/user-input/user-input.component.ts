import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('congrats!  submitted form');
    console.log(this.addPropertyForm);
  } 
}
