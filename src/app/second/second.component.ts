import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AgmMap,MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public pathImg: string = "../../assets/images/images/";
  public tmp: number = 0;
  public cmpte: boolean = false;
  public type : string = "password";
  public typeconfirm: string = "password";
  public progress = 0;
  public tabprogress = [5,10,15,20,30,45,50,65,75,80,90,95];
  public ettiquettes = [18,27,36,44,61,87,95,120,137,146,163,171.5];
  public ettiquette : number;
  public form : FormGroup;
  public isncriptionForm : FormGroup;
  public myFiles:string[] = [];
  public fileType = {};
  public jours: number[] = [];
  public mois: number[] = [];
  public annees: number[] = [];
  errorFile:boolean=false;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  private user = {user: "", pwd: ""};
  private typeSinistres: string[] = ["collision","vol","dommage","inondation","collisionAnimal","autre"];
  public typeSinistre: string;

  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "file" : new FormControl('',Validators.compose([]))
    });
    this.formInstance();
    console.log(this.tmp);
    this.progress = this.tabprogress[this.tmp];
    this.ettiquette = this.ettiquettes[this.tmp];
    console.log(this.cmpte);
    this.selectInit();
    //AIzaSyAipnqbfCtbrUJvXkYpEmdKtl4IFtgNWkc
    this.typeSinistre = this.typeSinistres[0];

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });

  }

  formInstance(){
    this.isncriptionForm = new FormGroup({
      "user" : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[A-z][A-z0-9 ]*$')
      ])),
      "pwd" : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[A-z]{3,}$')
      ])),
      "pwdconfirm" : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[A-z]{3,}$')
      ])),
    });
  }

  selectInit(){
    for(let i = 1; i<=31; i++)
      this.jours.push(i);

    for(let i = 1; i<=12; i++)
      this.mois.push(i);

    for(let i = 0; i<10; i++)
      this.annees.push(2015+i);
  }
  onFileChange(event){
    this.errorFile=false;
    let tabError=['image/png','image/jpg', 'image/jpeg', 'application/pdf'];
    for(let file of event.target.files){
      if(tabError.indexOf(file.type)==-1){
        this.errorFile=true;
        return;
      }
    }
    for(let i=0; i < event.target.files.length; i++){
      this.myFiles.push(event.target.files[i]);
    }
    console.log(this.myFiles);
    console.log("ici",this.fileType["image/png"]);
    this.fileType ={"image/png":this.pathImg+"8/jpg-icone.svg",
                      "image/jpg":this.pathImg+"8/jpg-icone.svg",
                      "image/jpeg":this.pathImg+"8/jpg-icone.svg",
                      "application/pdf":this.pathImg+"8/pdf-icon.svg"
                    };
  }

  deleteFile(i : number){
    this.myFiles.splice(i,1);
  }


  incremente(){
    this.tmp = this.tmp + 1;
    if(this.tmp == 11){
      this.inscrire() ? this.formInstance() : this.tmp--;
    }
    if(this.tmp == 12){
      this.connexion() ? console.log('Success connexion !!!') : this.tmp --;

    }
    this.progress = this.tabprogress[this.tmp];
    this.ettiquette = this.ettiquettes[this.tmp];
    console.log(this.tmp);
  }
  decremente(){
    this.tmp --;
    this.progress = this.tabprogress[this.tmp];
    this.ettiquette = this.ettiquettes[this.tmp];
    console.log(this.tmp);
  }

  compteOui(){
    this.cmpte = true;
    console.log(this.cmpte);


  }
  compteNon(){
      this.cmpte = false;
      console.log(this.cmpte);
  }

  afficher(action: string){
    if(action == 'pass'){
      this.type = "text";
    }
    else if(action == 'confirm'){
      this.typeconfirm = "text";
    }
  }
  masquer(action: string){
    if(action == 'pass')
      this.type = "password";
    else if(action == 'confirm')
      this.typeconfirm = "password";
  }

  inscrire(){
    let cmpte = this.isncriptionForm.value;
    if(cmpte.pwd === cmpte.pwdconfirm){
      this.user.user = cmpte.user;
      this.user.pwd = cmpte.pwd;
      return true;
    }
    return false;
  }
  connexion(){
    let cmpte = this.isncriptionForm.value;
    if(this.user.user === cmpte.user && this.user.pwd === cmpte.pwd){
        console.log('connexion success !!!');
        return true;
    }
    return false;
  }

  sinitre(i : number){
    this.typeSinistre = this.typeSinistres[i];
    console.log(this.typeSinistre);

  }

  //maps
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          console.log('addresse = ',this.address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
    console.log('latitude = ',latitude);
    console.log('longitude = ',longitude);
  }

}
