import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  AppForm: any;
  ngOnInit(): void {
 this.Submit();
  }

  addForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl("")
  })

  constructor(private ConsAdd: RegisterService) { }
  get add() {
    return this.addForm.controls;
  }
  Submit() {
    return this.ConsAdd.PostApi(this.addForm.value).subscribe((resp: any) => {
      this.AppForm = resp;
      console.log(resp);
    })
  }
}
