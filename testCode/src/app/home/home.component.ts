import { Component ,Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { gym } from 'src/app/home/gym';
import { GymService } from '../gym.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
   gyms: gym []=[]
  constructor (
    public gymSer:GymService,
    public sub1:Subscription|null=null,
    
  ){}
  ngOnInit(): void {
    this.sub1=this.gymSer.getGyms().subscribe(
      (g:any)=>{this.gyms=g}
      )
}}


