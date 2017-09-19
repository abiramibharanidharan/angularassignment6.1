import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title
 public  name
  constructor(){ }
  ngOnInit(){
   this.title = ' Welcome';
  this.name='Abirami'
  } 
}

