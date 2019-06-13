import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
public absenceDate;
public start;
public end;
  Absences = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:31436/api/absences')
    .subscribe(
      response =>{ 
        this.Absences = response.json();       
      },
      error=>{console.log("error");}
    )
  }


  /////////////////////////////////////////////////////////
  GetAbsence()
  {
    this.http.get("http://localhost:31436/api/search?d="+this.absenceDate)
    .subscribe(
      response=>
      {
        // console.log("sent successfully")
        // console.log(response.json());
        this.Absences=response.json();
      },
      error=>
      {
        
        console.log("Error: Its not sent!!!");
        
      }
    )
  }
  /////////////////////////////////////////////////////
  GetAbsenceRange()
  {
    this.http.get("http://localhost:31436/api/search?StartDate="+this.start+"&EndDate="+this.end)
    .subscribe(
      response=>
      {
        // console.log("sent successfully :)");
        // console.log(response.json());
        this.Absences=response.json();
      }
      ,
      error=>
      {
             console.log("Error:Its not sent !!!");
             
      })
  }
  /////////////////////////////////////////////////////
  AddAbsence(data)
  {
   //console.log(data.value);
   data.value.status=1;
   this.http.post('http://localhost:31436/api/absences',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteAbsence(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:31436/api/absences/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  Absence={};
  AbsenceID;
  EditAbsence(id){
    this.http.get('http://localhost:31436/api/absences'+id)
    .subscribe(
      response =>{    
        this.Absence=response.json();
        this.AbsenceID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateAbsences(newData){
    newData.value.id=this.AbsenceID;
   // console.log(newData.value);
    this.http.put('http://localhost:31436/api/absences',newData.value)
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
    this.http.get('http://localhost:31436/api/absences')
    .subscribe(
      response =>{ 
        this.Absences = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }

  fName;
  lName;
  displayName(event)
  {
    //console.log(id.target.value);
    
   this.http.get("http://localhost:31436/api/students/"+event.target.value)
   .subscribe(
     response=>{ 
       //console.log(response);
       if(response.json() ==null || response.json() == false)
       {
        this.fName = "This Student Not Found";
       }else{
         
        this.fName=response.json().fname;
        this.lName=response.json().lname;
       }
     },
     error=>{console.log("error");
     }
     
   );
}}
