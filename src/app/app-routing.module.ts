import { ResultatComponent } from './resultat/resultat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DossierComponent } from './dossier/dossier.component';
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  {
    path:"dossier", component: DossierComponent
  },
  {
    path:"resultat", component: ResultatComponent
  },
  {
    path:"first", component: FirstComponent
  },
  {
    path:"menu", component: MenuComponent
  },
  {
    path:"second", component: SecondComponent
  },
  {
    path:"footer", component: FooterComponent
  },
  {
    path: "",
    redirectTo: "/first",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
