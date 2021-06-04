import { Router } from '@angular/router';
import { AutGuardService } from './../service/aut-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public carousels : any[];
  public slideIn: string = "slideInRight";

  constructor(private route: Router) { }

  ngOnInit(): void {
    // localStorage.removeItem('isConnected');
    this.redirectTo();
    this.carousels = [
      {
        img: "../../assets/images/images/temoignage-1.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        nom: "Mamadou Ndiaye",
        status: "Ingénieur"
      },
      {
        img: "../../assets/images/images/temoignage-2.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        nom: "Mamadou Ndiaye",
        status: "Ingénieur"
      },
      {
        img: "../../assets/images/images/temoignage-3.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        nom: "Mamadou Ndiaye",
        status: "Ingénieur"
      }
    ];
  }

  slide(side : string){
    if(side == "left"){
      this.slideIn = "slideInLeft";
    }
    if(side == "right"){
      this.slideIn = "slideInRight";
    }
  }
  redirectTo(){
    if(!localStorage.getItem('isConnected')){
      this.route.navigate(['sign-in']);
    }
  }

}
