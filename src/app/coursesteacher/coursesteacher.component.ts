import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-coursesteacher',
  templateUrl: './coursesteacher.component.html',
  styleUrls: ['./coursesteacher.component.css']
})
export class CoursesteacherComponent implements OnInit {

  id;
  courses=[];
  constructor(private http:Http,private t:AuthService) { 
    this.id = t.getToken();
   // console.log(this.id);
    
    this.http.get('http://localhost:31436/api/search?tid='+this.id)
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

