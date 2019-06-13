import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-gradesstudent',
  templateUrl: './gradesstudent.component.html',
  styleUrls: ['./gradesstudent.component.css']
})
export class GradesstudentComponent implements OnInit {

  id;
  grades=[];
  constructor(private http:Http,private std:StudentService) { 
    this.id = std.getToken();
   // console.log(this.id);
    
    this.http.get('http://localhost:31436/api/stdcrs?stdid='+this.id)
    .subscribe(
      response=>
      {
        //console.log(response.json());
        this.grades=response.json();
      },
      error=>{console.log("error");
      }
    );

  }

  ngOnInit() {
  }




}
