import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/shared/search-results/search-results.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroeComponent } from './pages/heroes/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'heroes', component: HeroesComponent },
  { path:'heroe/:id', component: HeroeComponent },
  { path:'search/:name', component: SearchResultsComponent },
  { path:'**', redirectTo:'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
