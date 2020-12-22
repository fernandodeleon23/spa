import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../../services/heroess.service';
import { Heroe } from '../../../interfaces/heroe.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = '';

  constructor(
    private heroeS: HeroesService,
    private aRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    this.aRoute.params.subscribe( data => {
      this.termino = data.name;
      this.heroes = this.heroeS.searchHeroes( data.name );
    })

  }

  getTheHeroe( id:number ){
    this.router.navigate(['/heroe', id]);
  }

}
