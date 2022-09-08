import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id:number;
  source:string;
  type:string;
  data_start_time:string;
  data_end_time:string;
  accuracy:string;
  error_log:string;
  bot_start_time:string;
  bot_end_time:string;
  status:string;
  ref_id:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 7701, source:'Email',type:'Claim Form',data_start_time:"06:05:00",data_end_time:"06:06:08",accuracy:"98%",error_log:"",
  bot_start_time:"14:05:40",bot_end_time:"14:06:10",status:"Completed",ref_id:"P-1000203904"},
  {id: 7702, source:'Email',type:'Claim Form',data_start_time:"06:06:00",data_end_time:"06:07:08",accuracy:"100%",error_log:"",
  bot_start_time:"14:06:40",bot_end_time:"14:07:10",status:"In Progress",ref_id:"---"},
  {id: 7703, source:'Email',type:'Proposal Form',data_start_time:"06:08:00",data_end_time:"06:09:08",accuracy:"100%",error_log:"",
  bot_start_time:"14:08:40",bot_end_time:"14:09:10",status:"Failed",ref_id:"---"},
  {id: 7701, source:'Email',type:'Claim Form',data_start_time:"06:05:00",data_end_time:"06:06:08",accuracy:"98%",error_log:"",
  bot_start_time:"14:05:40",bot_end_time:"14:06:10",status:"Completed",ref_id:"P-1000203904"},
  {id: 7702, source:'Email',type:'Claim Form',data_start_time:"06:06:00",data_end_time:"06:07:08",accuracy:"100%",error_log:"",
  bot_start_time:"14:06:40",bot_end_time:"14:07:10",status:"In Progress",ref_id:"---"},
  {id: 7703, source:'Email',type:'Proposal Form',data_start_time:"06:08:00",data_end_time:"06:09:08",accuracy:"100%",error_log:"",
  bot_start_time:"14:08:40",bot_end_time:"14:09:10",status:"Failed",ref_id:"---"},
  {id: 7701, source:'Email',type:'Claim Form',data_start_time:"06:05:00",data_end_time:"06:06:08",accuracy:"98%",error_log:"",
  bot_start_time:"14:05:40",bot_end_time:"14:06:10",status:"Completed",ref_id:"P-1000203904"},


];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'source', 'type', 'data_start_time','data_end_time','accuracy','error_log',
  'bot_start_time','bot_end_time','status','ref_id'];
  dataSource = ELEMENT_DATA;

  today: String= new Date().toLocaleString('en-gb', { day: '2-digit', month: '2-digit', year: 'numeric' });

  constructor() {

   }

  ngOnInit(): void {
  }

}
