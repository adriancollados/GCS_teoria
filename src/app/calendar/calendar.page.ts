import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {


  showInfo: Boolean = false;

  constructor(){
    
  }

  ngOnInit(){

  }
  
  mostrarDieta(){
    this.showInfo = true;
  }

  goHome(){
    console.log("pulsado");
    return "/tabs/home";
  }

}
