import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-tasksstudent',
  templateUrl: './tasksstudent.component.html',
  styleUrls: ['./tasksstudent.component.css']
})
export class TasksstudentComponent implements OnInit {
tasks=[];
levelID;
id;
  constructor(private http:Http,std:StudentService) {
    this.id = std.getToken();
    this.http.get('http://localhost:31436/api/students/'+this.id)
    .subscribe(
      response=>
      {
        this.levelID=response.json().levelId;
        //console.log(this.levelID);
        this.http.get('http://localhost:31436/api/tasks?levelid='+this.levelID)
        .subscribe(
          response=>
          {
            this.tasks=response.json();
            console.log(this.tasks);
            
          },
          error=>{console.log("error"); }
          
        );
        
      },
      error=>{console.log("error");
      })
      
    }

  ngOnInit() {
  }

}






