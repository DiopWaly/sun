import { AuthenticationComponent } from './authentication/authentication.component';
import { AutGuardService } from './service/aut-guard.service';
import { ResultatComponent } from './resultat/resultat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DossierComponent } from './dossier/dossier.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DeclarationSinistreComponent } from './declaration-sinistre/declaration-sinistre.component';


const routes: Routes = [
  {
    path:"sign-in", component: AuthenticationComponent
  },
  {
    path:"dossier", component: DossierComponent, canActivate: [AutGuardService]
  },
  {
    path:"resultat", component: ResultatComponent, canActivate: [AutGuardService]
  },
  {
    path:"home", component: HomeComponent
  },
  {
    path:"menu", component: MenuComponent
  },
  {
    path:"declaration", component: DeclarationSinistreComponent, canActivate: [AutGuardService]
  },
  {
    path:"footer", component: FooterComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
