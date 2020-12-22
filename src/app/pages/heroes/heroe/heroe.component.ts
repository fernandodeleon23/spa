import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../services/heroess.service';
import { Heroe } from '../../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private _heroresS: HeroesService,
  ) {

    this.aRoute.params.subscribe( params => {
      this.heroe =  this._heroresS.getHeroe( params.id );
    })
  }

  ngOnInit(): void {
  }

}
