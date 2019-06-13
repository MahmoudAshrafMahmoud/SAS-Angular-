import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Tasks = [];
  Levels = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:31436/api/Tasks')
    .subscribe(
      response =>{ 
        this.Tasks = response.json();       
      },
      error=>{console.log("error");}
    )
    this.http.get('http://localhost:31436/api/levels')
    .subscribe(
      response =>{ 
        this.Levels = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddTask(data)
  {
    data.value.levelid=1;
   //console.log(data.value);
   this.http.post('http://localhost:31436/api/Tasks',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteTask(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:31436/api/Tasks/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  Task={};
  TaskID;
  EditTask(id){
    this.http.get('http://localhost:31436/api/Tasks/'+id)
    .subscribe(
      response =>{    
        this.Task=response.json();
        this.TaskID=response.json().id;
      //  console.log(this.TaskID);
        
      },
      error=>{console.log("Faild");}
    )
  }
  updateTasks(newData){
    newData.value.id=this.TaskID;
    //console.log(newData.value);
    this.http.put('http://localhost:31436/api/Tasks',newData.value)
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
    this.http.get('http://localhost:31436/api/Tasks')
    .subscribe(
      response =>{ 
        this.Tasks = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }

}
