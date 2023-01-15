import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { gym } from 'src/app/home/gym';
import { GymService } from '../gym.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent {
  gymData: gym|null=null
  

  constructor (
    public gymSer:GymService,
    public sub1:Subscription|null=null,
    public sub2:Subscription|null=null,
    public activeRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.sub1 = this.activeRoute.params.subscribe((a) => {
      this.sub2 = this.gymSer.getGym(a['id']).subscribe((g) => {
        this.gymData = g;
      });
    });
}}