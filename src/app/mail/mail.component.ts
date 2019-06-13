import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
    
  }
  sendEmail(data){
    //console.log(data.value);
    this.http.post('http://localhost:31436/api/search',data.value)
    .subscribe
    (
      response=>{    alert("Sending Mail Successfully"); },
      error=>{alert("Not Sending")
      }
    ); 
  
  }
}
