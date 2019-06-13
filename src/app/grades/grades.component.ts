import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {

  Levels = [];
  Courses = [];
  Grades = [];
  constructor(private http: Http) {
    this.http.get("http://localhost:31436/api/levels")
      .subscribe(
        response => { this.Levels = response.json(); },
        error => {
          console.log();
        }

      );
    this.http.get("http://localhost:31436/api/StdCrs")
      .subscribe(
        response => { this.Grades = response.json(); },
        error => {
          console.log();
        });
    this.http.get("http://localhost:31436/api/courses")
      .subscribe(
        response => { this.Courses = response.json(); },
        error => {
          console.log();
        }

      );
    this.refreshList();
  }

  AddGrade(data) {
    this.http.post("http://localhost:31436/api/StdCrs", data.value)
      .subscribe(
        response => {
          this.refreshList();
          alert("Inserted Grade  Successfully");
        },
        error => {
          console.log();
        }

      );
  }
  DeleteGrade(id) {
    this.http.delete('http://localhost:31436/api/StdCrs/' + id)
      .subscribe(
        response => {
          this.refreshList();
          alert("Deleted Grade  Successfully");
        },
        error => { console.log("Faild"); }
      )
  }
  fName;
  lName;
  displayName(event) {
    //console.log(id.target.value);

    this.http.get("http://localhost:31436/api/students/" + event.target.value)
      .subscribe(
        response => {
          //console.log(response);
          if (response.json() == null || response.json() == false) {
            this.fName = "This Student Not Found";
          } else {

            this.fName = response.json().fname;
            this.lName = response.json().lname;

          }
        },
        error => {
          console.log("error");
        }

      );
  }
  refreshList() {
    this.http.get('http://localhost:31436/api/StdCrs/')
      .subscribe(
        response => {
          this.Grades = response.json();
        },
        error => { console.log("Faild"); }
      )
  }
  Grade = {};
  gradeID;
  EditGrade(id) {
    this.http.get('http://localhost:31436/api/StdCrs/' + id)
      .subscribe(
        response => {
          this.Grade = response.json();
          this.gradeID = response.json().id;
          //console.log(this.CourseID);
          

        },
        error => { console.log("Faild"); }
      )
  }
  updateGrades(newData) {
    newData.value.id = this.gradeID;
    console.log(newData.value);
    this.http.put('http://localhost:31436/api/StdCrs/', newData.value)
      .subscribe(
        response => {
          this.refreshList();
          alert("Updated Grade  Successfully");
          
        },
        error => { console.log("Faild"); }
      )

  }
}
