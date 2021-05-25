import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public carousels : any[];

  constructor() { }

  ngOnInit(): void {
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

  left(){
    console.log('waly');

  }
}
