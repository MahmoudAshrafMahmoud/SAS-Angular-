import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Courses = [];
  Stuffs = [];
  Levels = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:31436/api/courses/')
    .subscribe(
      response =>{ 
        this.Courses = response.json();       
      },
      error=>{console.log("error");}
    )
    this.http.get('http://localhost:31436/api/levels/')
    .subscribe(
      response =>{ 
        this.Levels = response.json();       
      },
      error=>{console.log("error");}
    )
    this.http.get('http://localhost:31436/api/stuffs/')
    .subscribe(
      response =>{ 
        this.Stuffs = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddCourse(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:31436/api/courses',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteCourse(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:31436/api/courses/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  Course={};
  CourseID;
  EditCourse(id){
    this.http.get('http://localhost:31436/api/courses/'+id)
    .subscribe(
      response =>{    
        this.Course=response.json();
        this.CourseID=response.json().code;
        //console.log(this.CourseID);
        
      },
      error=>{console.log("Faild");}
    )
  }
  updateCourses(newData){
    newData.value.code=this.CourseID;
    console.log(newData.value);
    this.http.put('http://localhost:31436/api/courses/',newData.value)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("success");        
      },
      error=>{console.log("Faild");}
    )
    
  }
  refreshList()
  {
    this.http.get('http://localhost:31436/api/courses/')
    .subscribe(
      response =>{ 
        this.Courses = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }
  teacher={} ;
 // http://localhost:31436/api/search?crsId=2
  getTeacher(id){
    //console.log(id);
    this.http.get('http://localhost:31436/api/search?crsId='+id)
    .subscribe(
      response =>{ 
        //console.log(response.json());
        this.teacher = response.json();       
      },
      error=>{console.log("error");}
    )
  }



}
