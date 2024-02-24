import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent,title:"Home"},
  {path:'home', component:HomeComponent,title:"Home"},
  {path:'about', component:AboutComponent,title:"About"},
  {path:'contact',component:ContactComponent,title:"Contact"},
  {path:'portfolio',component:PortfolioComponent,title:"Portfolio"},
  {path:'**',component:NotFoundComponent,title:"Notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled",useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
