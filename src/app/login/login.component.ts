import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';
import { ParentService } from '../parent.service';
import { StaffService } from '../staff.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private std: StudentService,
    private par: ParentService,
    private auth: AuthService,
    private stf: StaffService,
    private http:Http) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  login(data) {
    this.http.get('http://localhost:31436/api/stuffs?email='+data.value.email+'&password='+data.value.pass)
    .subscribe(
      response=>{
          if(response.json().RoleId == 1){
            this.auth.sendToken(response.json().id)
            this.myRoute.navigate(["/Admin/ProfileOfAdmin"]);
          }
          else if(response.json().RoleId == 2){
            //console.log(response.json().id);
            this.stf.sendToken(response.json().id)
            this.myRoute.navigate(["/Staff/ProfileOfStaff"]);
          }
      },
      error=>{console.log("error");
      },
    )
  }

}