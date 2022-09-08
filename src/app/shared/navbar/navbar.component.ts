import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
title='Dashboard';
  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  show:boolean=false;
  // today=new Date();

  onClick(check: number){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else if(check==3){
          this.tab = 'tab3';
        }
        else{
          this.tab='tab4';
        }

    }

  toolbar(tb:number){
    if(tb==1){
      this.title = 'Dashboard';
    }else if(tb==2){
      this.title = 'Approval';
    }else if(tb==3){
      this.title = 'History';
    }
    else{
      this.title='User Management';
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

  logout(){

  }
}
