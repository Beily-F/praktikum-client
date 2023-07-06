import { Component, OnInit } from '@angular/core';
import Child from '../models/child';
import User from '../models/user';

// /** @title Simple form field */
// @Component({
//   selector: 'form-field-overview-example',
//   templateUrl: 'form-field-overview-example.html',
//   styleUrls: ['form-field-overview-example.css'],
// })
// export class FormFieldOverviewExample {}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // (public firstName:string,
  //   public lastName:string,
  //   public idNumber:string,
  //   public birthDate:Date,
  //   public gender:string,
  //   public HMO:string,
  //   public childrens:Child[]
  chArr:Child[]=[]
  emptyUser:User=new User("","","",new Date(),"","",this.chArr)
  constructor() { }

  ngOnInit(): void {
  }
  save(e) {
  }
}
