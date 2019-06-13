import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-coursesstudent',
  templateUrl: './coursesstudent.component.html',
  styleUrls: ['./coursesstudent.component.css']
})
export class CoursesstudentComponent implements OnInit {

  id;
  courses=[];
  constructor(private http:Http,private std:StudentService) { 
    this.id = std.getToken();
   // console.log(this.id);
    
    this.http.get('http://localhost:31436/api/stdcrs?stdid='+this.id)
    .subscribe(
      response=>
      {
        //console.log(response.json());
        this.courses=response.json();
      },
      error=>{console.log("error");
      }
    );

  }

  ngOnInit() {
  }




}
