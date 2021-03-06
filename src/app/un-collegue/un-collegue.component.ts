import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service'
import {ScorePipe} from '../shared/pipe/score.pipe'
import {StateService} from '../shared/status-server/state.service'
@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  //etat:boolean = false

  @Input() collegue:Collegue;
  constructor(private collegueService:CollegueService){//,private statusService:StateService) {
    //this.statusService.state().subscribe(val => this.etat = val)
    
  }

  ngOnInit() {
   
  }

  jaime(){
    this.collegueService.aimerUnCollegue(this.collegue).then(col => {
      this.collegue.score = col.score
    })
  }

  jeDeteste(){
    this.collegueService.detesterUnCollegue(this.collegue).then(col => {
      this.collegue.score = col.score
    })
  }

}
